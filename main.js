var iconFeature1 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-115.2910899, 36.2860005])),
  name: 'Somewhere',
});

var iconFeature2 = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat([-115.2910899, 36.2860005])),
  name: 'Somewhere else'
});

// specific style for that one point
iconFeature2.setStyle(new ol.style.Style({
  image: new ol.style.Icon({
    anchor: [0.5, 46],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: '/img/location.png',
  })
}));




const iconLayerSource = new ol.source.Vector({
  features: [iconFeature1, iconFeature2]
});

const iconLayer = new ol.layer.Vector({
  source: iconLayerSource,
   // style for all elements on a layer
  style: new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: 'https://openlayers.org/en/v4.6.4/examples/data/icon.png'
    })
  })
});

      
const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        }),
        iconLayer
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-115.2910899, 36.2860005]),
        zoom: 14
    })
});