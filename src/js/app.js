// styles
import "jsuites/dist/jsuites.css"; // dropdown styles
import "ag-grid-community/dist/styles/ag-grid.css"; // table styles
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css"; // table styles (dark)
import "leaflet/dist/leaflet.css"; // leaflet css
import "../scss/style.scss"; // current project styles

// modules
import setDropdowns from "./components/setDropdowns";
import setTable from "./tables_utility/setTable";
import setTableControls from "./tables_utility/setTableControls";
import setFullScrBtns from "./components/setFullScrBtns";
import viewMap from "./components/map";

// set up and fill dropdowns in header
setDropdowns();

// set up and fill three tables in main
setTable("casesTable");
setTable("deathsTable");
setTable("recoveredTable");

// display and set up controls for each of three tables
setTableControls("casesTable");
setTableControls("deathsTable");
setTableControls("recoveredTable");

// display and set up fullscreen buttons for main blocks
setFullScrBtns();

// display map
viewMap();
