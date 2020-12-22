// styles
import "jsuites/dist/jsuites.css"; // dropdown styles
import "ag-grid-community/dist/styles/ag-grid.css"; // table styles
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css"; // table styles (dark)
import "leaflet/dist/leaflet.css"; // leaflet css
import "../scss/style.scss"; // current project styles

// modules
import getApiData from "./utility/getApiData";
import setDropdowns from "./components/setDropdowns";
import setTableControls from "./tables_utility/setTableControls";
import setGraphControls from "./utility/setGraphControls";
import setFullScrBtns from "./components/setFullScrBtns";
import updateData from "./utility/updateData";
import viewMap from "./components/map";

// callback function as arg to set default page after fetches completed
getApiData(updateData, viewMap, setDropdowns);

// // set up and fill dropdowns in header
// setTimeout(() => setDropdowns(), 1000);

// display and set up controls for each of three tables
setTableControls("casesTable");
setTableControls("deathsTable");
setTableControls("recoveredTable");

// set up graph controls
setGraphControls();

// display and set up fullscreen buttons for main blocks
setFullScrBtns();
