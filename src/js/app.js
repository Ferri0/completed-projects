import "../scss/style.scss";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

import setTable from "./tables_utility/setTable";
import setTableControls from "./tables_utility/setTableControls";

setTable("casesTable");
setTable("deathsTable");
setTable("recoveredTable");

setTableControls("casesTable");
setTableControls("deathsTable");
setTableControls("recoveredTable");
