import L from "leaflet";
import WorldData from "geojson-world-map";

export default function viewMap() {
  const map = L.map("map").setView([40, 10], 2);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    {
      maxZoom: 10,
      minZoom: 1,
      center: [-34, 140],
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: "mapbox/light-v9",
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(map);

  // control that shows state info on hover
  const info = L.control();

  info.onAdd = function (m) {
    this.div = L.DomUtil.create("div", "info");
    this.update();
    return this.div;
  };

  info.update = function (props) {
    if (props) {
      this.div.innerHTML = `<h4>${props.name}</h4>Cases: Num<br /> Death: Num<br> Recovered: Num`;
    } else {
      this.div.innerHTML = `Hover over a country`;
    }
  };

  info.addTo(map);

  // get color depending on population density value
  function getColor(d) {
    if (d > 1000) {
      return "#800026";
    }
    if (d > 500) {
      return "#BD0026";
    }
    if (d > 200) {
      return "#E31A1C";
    }
    if (d > 100) {
      return "#FC4E2A";
    }
    if (d > 50) {
      return "#FD8D3C";
    }
    if (d > 20) {
      return "#FEB24C";
    }
    if (d > 10) {
      return "#FED976";
    }
    return "#FFEDA0";
  }

  function style(feature) {
    return {
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
      fillColor: getColor(feature.properties.density),
    };
  }

  function highlightFeature(e) {
    const layer = e.target;

    layer.setStyle({
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7,
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }

    info.update(layer.feature.properties);
  }

  let geojson;

  function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
  }

  function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
  }

  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature,
    });
  }

  geojson = L.geoJson(WorldData, {
    style: style,
    onEachFeature: onEachFeature,
  }).addTo(map);

  map.attributionControl.addAttribution(
    'Population data &copy; <a href="http://census.gov/">US Census Bureau</a>'
  );

  const legend = L.control({ position: "bottomright" });

  legend.onAdd = function (m) {
    const div = L.DomUtil.create("div", "info legend");
    const grades = [0, 10, 20, 50, 100, 200, 500, 1000];
    const labels = [];
    let from;
    let to;

    for (let i = 0; i < grades.length; i += 1) {
      from = grades[i];
      to = grades[i + 1];

      // labels.push('<i style="background:' + getColor(from + 1) + '"></i> ' + from + (to ? "&ndash;" + to : "+"));
      labels.push(`<i style="background:${getColor(from + 1)}"></i>${from} &ndash; ${to}`);

      // labels
      //   .push
      //   // `<i style="background:'${getColor(from + 1)}'"></i>${from}${to ? '&ndash;'to : '+'}`
      //   // '<i style="background:' + getColor(from + 1) + '"></i> ' +
      //   // from + (to ? '&ndash;' + to : '+'));
      //   ();
    }

    div.innerHTML = labels.join("<br>");
    return div;
  };

  legend.addTo(map);
}
