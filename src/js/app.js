import "jsuites/dist/jsuites.css";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import "../scss/style.scss";

import setRegionDropdown from "./components/setRegionDropdown";
import setTable from "./tables_utility/setTable";
import setTableControls from "./tables_utility/setTableControls";

setRegionDropdown();

setTable("casesTable");
setTable("deathsTable");
setTable("recoveredTable");

setTableControls("casesTable");
setTableControls("deathsTable");
setTableControls("recoveredTable");
