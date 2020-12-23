// styles
import "jsuites/dist/jsuites.css"; // dropdown styles
import "ag-grid-community/dist/styles/ag-grid.css"; // table styles
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css"; // table styles (dark)
import "leaflet/dist/leaflet.css"; // leaflet css
import "../scss/style.scss"; // current project styles

// modules
import getApiData from "./utility/getApiData";
import setDropdowns from "./components/setDropdowns";
import setTable from "./tables_utility/setTable";
import setTableControls from "./tables_utility/setTableControls";
import setFullScrBtns from "./components/setFullScrBtns";
import updatePage from "./utility/updatePage";
import chart from "../js/chart/chart"; 
import viewMap from "./components/map";

// get data from api and store it locally
getApiData();

// set up and fill dropdowns in header
setDropdowns();

// display and set up controls for each of three tables
setTableControls("casesTable");
setTableControls("deathsTable");
setTableControls("recoveredTable");

// display and set up fullscreen buttons for main blocks
setFullScrBtns();

// set all values from api data, should always run last.
// timeout added as emulation of async/await (fix later?)
setTimeout(() => updatePage(), 1000);

// display map
setTimeout(() => viewMap(), 1000);
