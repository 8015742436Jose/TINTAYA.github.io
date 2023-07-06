// Crear el mapa
var map = L.map('map').setView([-9.189967, -75.015152], 6);

// Agregar capa base de OpenStreetMap
var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
});
basemapOSM.addTo(map);

// Agregar capa base de Google Maps
var basemapGoogle = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
  attribution: 'Google Maps'
});

var colegiosLayer = L.tileLayer.wms("http://localhost:8080/geoserver/departamento_ancash/wms", {
  layers: "departamento_ancash:colegios",
  format: 'image/png',
  transparent: true,
  version: '1.1.0',
  attribution: "Colegios"
}).addTo(map);

// Agregar capa de bancos desde el GeoServer
var bancosLayer = L.tileLayer.wms("http://localhost:8080/geoserver/departamento_ancash/wms", {
  layers: "departamento_ancash:bancos",
  format: 'image/png',
  transparent: true,
  version: '1.1.0',
  attribution: "Bancos"
}).addTo(map);

// Agregar capa de estacionamientos desde el GeoServer
var estacionamientosLayer = L.tileLayer.wms("http://localhost:8080/geoserver/departamento_ancash/wms", {
  layers: "departamento_ancash:estacionamientos",
  format: 'image/png',
  transparent: true,
  version: '1.1.0',
  attribution: "Estacionamientos"
}).addTo(map);

// Agregar capa de farmacias desde el GeoServer
var farmaciasLayer = L.tileLayer.wms("http://localhost:8080/geoserver/departamento_ancash/wms", {
  layers: "departamento_ancash:farmacias",
  format: 'image/png',
  transparent: true,
  version: '1.1.0',
  attribution: "Farmacias"
}).addTo(map);

// Agregar capa de hoteles desde el GeoServer
var hotelesLayer = L.tileLayer.wms("http://localhost:8080/geoserver/departamento_ancash/wms", {
  layers: "departamento_ancash:hoteles",
  format: 'image/png',
  transparent: true,
  version: '1.1.0',
  attribution: "Hoteles"
}).addTo(map);

// Agregar capa de mercado desde el GeoServer
var mercadoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/departamento_ancash/wms", {
  layers: "departamento_ancash:mercado",
  format: 'image/png',
  transparent: true,
  version: '1.1.0',
  attribution: "Mercado"
}).addTo(map);

// Agregar capa de restaurantes desde el GeoServer
var restaurantesLayer = L.tileLayer.wms("http://localhost:8080/geoserver/departamento_ancash/wms", {
  layers: "departamento_ancash:restaurantess",
  format: 'image/png',
  transparent: true,
  version: '1.1.0',
  attribution: "Restaurantes"
}).addTo(map);

var supermercadoLayer = L.tileLayer.wms("http://localhost:8080/geoserver/departamento_ancash/wms", {
  layers: "departamento_ancash:super mercado",
  format: 'image/png',
  transparent: true,
  version: '1.1.0',
  attribution: "Supermercado"
}).addTo(map);

var departamentolayer = L.tileLayer.wms("http://localhost:8080/geoserver/departamento_ancash/wms", {
  layers: "departamento_ancash:departamento_ancash",
  format: 'image/png',
  transparent: true,
  version: '1.1.0',
}).addTo(map);

// Agregar logotipo de SENCICO
var sencicoLogo = L.control({ position: "bottomleft" });
sencicoLogo.onAdd = function(map) {
  var div = L.DomUtil.create("div", "sencico-logo");
  div.innerHTML = '<img src="img/sencico.png" alt="SENCICO Logo" width="491" height="130">';
  return div;
};
sencicoLogo.addTo(map);



var baseMaps = {
  "OSM": basemapOSM,
  "Google Maps": basemapGoogle
};

var overlayMaps = {
  "Colegios": colegiosLayer,
  "Bancos": bancosLayer,
  "Estacionamientos": estacionamientosLayer,
  "Farmacias": farmaciasLayer,
  "Hoteles": hotelesLayer,
  "Mercado": mercadoLayer,
  "Restaurantes": restaurantesLayer,
  "Supermercado": supermercadoLayer,
  "Distritos De Ancash": departamentolayer,
};
L.control.layers(baseMaps, overlayMaps, {
  position: 'topright',
  collapsed: false
}).addTo(map);
