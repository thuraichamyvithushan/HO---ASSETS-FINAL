import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Footer from "./Footer";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerIconRetinaPng from "leaflet/dist/images/marker-icon-2x.png";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "./dealer.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Fix Leaflet's default icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconRetinaPng,
  iconUrl: markerIconPng,
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const defaultIcon = new L.Icon({
  iconUrl: markerIconPng,
  iconRetinaUrl: markerIconRetinaPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const activeIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconRetinaUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const userLocationIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png",
  iconRetinaUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

function MapPanner({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      const bounds = L.latLngBounds(
        [position[0] - 0.001, position[1] - 0.001],
        [position[0] + 0.001, position[1] + 0.001]
      );
      map.fitBounds(bounds, { maxZoom: 18, padding: [50, 50] });
    }
  }, [position, map]);
  return null;
}

function MapUpdater({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom);
    }
  }, [center, zoom, map]);
  return null;
}

// ✅ Routing with single error toast
function Routing({ from, to }) {
  const map = useMap();

  useEffect(() => {
    if (!from || !to) return;

    const toastId = "routing-error";

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
      routeWhileDragging: false,
      show: false,
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      createMarker: () => null,
      lineOptions: {
        styles: [{ color: "#6FA1EC", weight: 4 }],
      },
    })
      .on("routesfound", () => {
        toast.dismiss(toastId);
      })
      .on("routingerror", () => {
        if (!toast.isActive(toastId)) {
          toast.error("Dealer is too far or route cannot be generated.", {
            toastId,
          });
        }
      })
      .addTo(map);

    return () => {
      if (routingControl && map.hasLayer(routingControl)) {
        map.removeControl(routingControl);
      }
    };
  }, [map, from, to]);

  return null;
}

export default function DealerLocatorCSV() {
  const [dealers, setDealers] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedPos, setSelectedPos] = useState(null);
  const [selectedDealerIndex, setSelectedDealerIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [routeDestination, setRouteDestination] = useState(null);

  const defaultCenter = [-30.0, 140.0];
  const defaultZoom = 4;
  const australiaCenter = [-25.0, 134.0];
  const australiaZoom = 5;
  const newZealandCenter = [-41.0, 174.0];
  const newZealandZoom = 6;
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [mapZoom, setMapZoom] = useState(defaultZoom);

  useEffect(() => {
    Papa.parse("/dealers.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsedDealers = results.data.map((row) => ({
          name: row.name,
          lat: parseFloat(row.lat),
          lng: parseFloat(row.lng),
          photo_url: row.photo_url,
          address: row.address,
          mobile_number: row.mobile_number,
          website_url: row.website_url,
        }));
        setDealers(parsedDealers);
      },
      error: (err) => {
        console.error("Error loading CSV:", err);
      },
    });
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => {
        console.warn("Error getting location:", err);
      }
    );
  }, []);

  const filteredDealers = dealers.filter((d) =>
    d.name.toLowerCase().includes(query.toLowerCase())
  );

  const australiaDealers = filteredDealers.filter(
    (d) => d.lat <= -9 && d.lat >= -44 && d.lng >= 110 && d.lng <= 155
  );

  const newZealandDealers = filteredDealers.filter(
    (d) => d.lat <= -33 && d.lat >= -48 && d.lng >= 165 && d.lng <= 180
  );

  let dealersToShow =
    selectedRegion === "australia"
      ? australiaDealers
      : selectedRegion === "newzealand"
      ? newZealandDealers
      : filteredDealers;

  let selectedDealer = null;
  if (selectedDealerIndex !== null) {
    selectedDealer =
      selectedCategory === "australia"
        ? australiaDealers[selectedDealerIndex]
        : selectedCategory === "newzealand"
        ? newZealandDealers[selectedDealerIndex]
        : filteredDealers[selectedDealerIndex];
  }

  const handleDealerClick = (lat, lng, index, category) => {
    setSelectedPos([lat, lng]);
    setSelectedDealerIndex(index);
    setSelectedCategory(category);
    setRouteDestination(null);
  };

  const handleShowRouteClick = () => {
    if (!userLocation) {
      toast.error("User location not available. Please allow location access.");
      return;
    }
    if (!selectedDealer) {
      toast.error("Please select a dealer first.");
      return;
    }

    setRouteDestination([selectedDealer.lat, selectedDealer.lng]);
  };

  return (
    <div>
      <div className="dealer-con">
        <ToastContainer position="top-right" autoClose={4000} />
        <h1>FIND A DEALER</h1>
        <div style={{ marginBottom: 15 }}>
          <button
            onClick={() => {
              setSelectedRegion("australia");
              setMapCenter(australiaCenter);
              setMapZoom(australiaZoom);
            }}
            style={{
              marginRight: 10,
              padding: "8px 16px",
              backgroundColor: selectedRegion === "australia" ? "#a92020" : "#ddd",
              color: selectedRegion === "australia" ? "white" : "#333",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Australia
          </button>
          <button
            onClick={() => {
              setSelectedRegion("newzealand");
              setMapCenter(newZealandCenter);
              setMapZoom(newZealandZoom);
            }}
            style={{
              marginRight: 10,
              padding: "8px 16px",
              backgroundColor: selectedRegion === "newzealand" ? "#a92020" : "#ddd",
              color: selectedRegion === "newzealand" ? "white" : "#333",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            New Zealand
          </button>
          <button
            onClick={() => {
              setSelectedRegion(null);
              setMapCenter(defaultCenter);
              setMapZoom(defaultZoom);
            }}
            style={{
              padding: "8px 16px",
              backgroundColor: selectedRegion === null ? "#a92020" : "#ddd",
              color: selectedRegion === null ? "white" : "#333",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            All
          </button>
        </div>

        <div className="dealer-locator">
          <div className="dealer-map-container">
            <MapContainer center={mapCenter} zoom={mapZoom} className="dealer-map">
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {userLocation && (
                <Marker position={userLocation} icon={userLocationIcon}>
                  <Popup>Your Location</Popup>
                </Marker>
              )}

              {dealersToShow.map((dealer, i) => (
                <Marker
                  key={i}
                  position={[dealer.lat, dealer.lng]}
                  icon={
                    selectedDealer && dealer.name === selectedDealer.name
                      ? activeIcon
                      : defaultIcon
                  }
                  eventHandlers={{
                    click: () =>
                      handleDealerClick(dealer.lat, dealer.lng, i, selectedRegion),
                  }}
                >
                  <Popup>
                    <div style={{ maxWidth: "200px" }}>
                      <h3>{dealer.name}</h3>
                      <p>
                        <strong>Address:</strong> {dealer.address}
                      </p>
                      {dealer.mobile_number && (
                        <p>
                          <strong>Phone:</strong> {dealer.mobile_number}
                        </p>
                      )}
                      {dealer.website_url && (
                        <p>
                          <strong>Website:</strong>{" "}
                          <a
                            href={dealer.website_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {dealer.website_url}
                          </a>
                        </p>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))}

              {userLocation && routeDestination && (
                <Routing from={userLocation} to={routeDestination} />
              )}

              {selectedPos && <MapPanner position={selectedPos} />}
              <MapUpdater center={mapCenter} zoom={mapZoom} />
            </MapContainer>
          </div>

          <div className="dealer-sidebar">
            <input
              type="text"
              placeholder="Search dealers..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="dealer-search"
              aria-label="Search dealers"
            />

            <div className="dealer-list">
              {dealersToShow.length === 0 ? (
                <p className="no-results">No dealers found.</p>
              ) : (
                dealersToShow.map((dealer, i) => {
                  let cat = "all";
                  if (australiaDealers.includes(dealer)) cat = "australia";
                  else if (newZealandDealers.includes(dealer)) cat = "newzealand";

                  return (
                    <div
                      key={i}
                      onClick={() => {
                        setSelectedCategory(cat);
                        handleDealerClick(dealer.lat, dealer.lng, i, cat);
                      }}
                      className={`dealer-item ${
                        selectedDealer && selectedDealer.name === dealer.name ? "active" : ""
                      }`}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select ${dealer.name}`}
                    >
                      <div style={{ fontWeight: "700" }}>{dealer.name}</div>
                    </div>
                  );
                })
              )}
            </div>

            {selectedDealer && (
              <button
                onClick={handleShowRouteClick}
                style={{
                  marginTop: "15px",
                  padding: "10px 20px",
                  backgroundColor: "#4a4a4a",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%",
                  fontSize: "16px",
                }}
              >
                Show Route
              </button>
            )}

            {selectedDealer && (
              <div className="dealer-details" style={{ marginTop: "20px" }}>
                <h3>{selectedDealer.name}</h3>
                <p>
                  <strong>Address:</strong> {selectedDealer.address}
                </p>
                {selectedDealer.mobile_number && (
                  <p>
                    <strong>Phone:</strong> {selectedDealer.mobile_number}
                  </p>
                )}
                {selectedDealer.website_url && (
                  <p>
                    <strong>Website:</strong>{" "}
                    <a
                      href={selectedDealer.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedDealer.website_url}
                    </a>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
