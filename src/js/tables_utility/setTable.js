import { Grid, TooltipFeature } from "ag-grid-community";
import properties from "../properties";

/* UNDER CONSTRUCTION */
/* added only as example, to work with tables */
export default function (tableClass) {
  // clear previous table
  const currentTable = document.querySelector(`.stats__table--${tableClass}`);
  currentTable.innerHTML = "";
  // set table depends on argument passed
  const columnDefs = [
    {
      headerName: "Country",
      field: "Country",
      sortable: true,
      lockPosition: true,
      flex: 1,
    },
  ];
  let eGridDiv;
  let rowData;
  // set empty tables if selected country
  if (properties.region !== "World") {
    columnDefs[0].field = "----";
    columnDefs[0].headerName = "----";
    columnDefs.push({
      headerName: "----",
      field: "----",
      sortable: false,
      lockPosition: true,
      flex: 1,
    });
    eGridDiv = currentTable;
    rowData = [];
  } else if (tableClass === "cases") {
    const fieldName =
      properties.period === "All time" ? "TotalConfirmed" : "NewConfirmed";
    columnDefs.push({
      headerName: "Cases",
      field: fieldName,
      sortable: true,
      lockPosition: true,
      flex: 1,
    });
    columnDefs[1].cellClass = "stats__table--cases-column";
    eGridDiv = document.querySelector(".stats__table--cases");
    rowData = properties.apiData.Countries;
  } else if (tableClass === "deaths") {
    const fieldName =
      properties.period === "All time" ? "TotalDeaths" : "NewDeaths";
    columnDefs.push({
      headerName: "Deaths",
      field: fieldName,
      sortable: true,
      lockPosition: true,
      flex: 1,
    });
    columnDefs[1].cellClass = "stats__table--deaths-column";
    eGridDiv = document.querySelector(".stats__table--deaths");
    rowData = properties.apiData.Countries;
  } else if (tableClass === "recovered") {
    const fieldName =
      properties.period === "All time" ? "TotalRecovered" : "NewRecovered";
    columnDefs.push({
      headerName: "Recovered",
      field: fieldName,
      sortable: true,
      lockPosition: true,
      flex: 1,
    });
    columnDefs[1].cellClass = "stats__table--recovered-column";
    eGridDiv = document.querySelector(".stats__table--recovered");
    rowData = properties.apiData.Countries;
  } else {
    throw new Error("wron argument passed to setTable function");
  }

  // let the grid know which columns and what data to use
  const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
  };

  new Grid(eGridDiv, gridOptions);
}
