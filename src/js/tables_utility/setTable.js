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
  if (tableClass === "cases") {
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

  // specify the data
  // const rowData = [
  //   { country: "US", cases: "17800000" },
  //   { country: "India", cases: "378020200" },
  //   { country: "France", cases: "1800450" },
  //   { country: "Germany", cases: "17800124" },
  //   { country: "Ireland", cases: "23478000" },
  //   { country: "Great Britain", cases: "17800" },
  //   { country: "Italy", cases: "178132001" },
  //   { country: "Spain", cases: "17800789" },
  //   { country: "Rome", cases: "17800887" },
  //   { country: "US", cases: "17800000" },
  //   { country: "India", cases: "378020200" },
  //   { country: "France", cases: "1800450" },
  //   { country: "Germany", cases: "17800124" },
  //   { country: "Ireland", cases: "23478000" },
  //   { country: "Great Britain", cases: "17800" },
  //   { country: "Italy", cases: "178132001" },
  //   { country: "Spain", cases: "17800789" },
  //   { country: "Rome", cases: "17800887" },
  //   { country: "US", cases: "17800000" },
  //   { country: "India", cases: "378020200" },
  //   { country: "France", cases: "1800450" },
  //   { country: "Germany", cases: "17800124" },
  //   { country: "Ireland", cases: "23478000" },
  //   { country: "Great Britain", cases: "17800" },
  //   { country: "Italy", cases: "178132001" },
  //   { country: "Spain", cases: "17800789" },
  //   { country: "Rome", cases: "17800887" },
  //   { country: "US", cases: "17800000" },
  //   { country: "India", cases: "378020200" },
  //   { country: "France", cases: "1800450" },
  //   { country: "Germany", cases: "17800124" },
  //   { country: "Ireland", cases: "23478000" },
  //   { country: "Great Britain", cases: "17800" },
  //   { country: "Italy", cases: "178132001" },
  //   { country: "Spain", cases: "17800789" },
  //   { country: "Rome", cases: "17800887" },
  // ];

  // let the grid know which columns and what data to use
  const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
  };

  new Grid(eGridDiv, gridOptions);
}
