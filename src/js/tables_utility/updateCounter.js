import properties from "../properties";

// set counter depends on properties values
// argument is part of table class name: cases || deaths || recpovered
export default async function (tableName) {
  const counterElement = document.querySelector(`.stats__count--${tableName}`);

  // get current country data
  let currentCountryData = null;
  if (properties.region !== "World") {
    currentCountryData = properties.apiData.Countries.filter((e) => {
      if (e.Country === properties.region) return e;
      return null;
    });
  }

  switch (tableName) {
    case "cases":
      // check properties period and set counter depends on it value
      // for all world
      if (properties.region === "World") {
        if (properties.period === "All time") {
          counterElement.innerText = properties.apiData.Global.TotalConfirmed;
        } else {
          counterElement.innerText = properties.apiData.Global.NewConfirmed;
        }
        // check properties points and set counter depends on it value
        if (properties.casesTable.units !== "absolute") {
          counterElement.innerText = Math.ceil(
            (+counterElement.innerText / 7856170432) * 100000
          );
        }
      } else {
        // for selected country
        if (properties.period === "All time") {
          counterElement.innerText = currentCountryData[0].TotalConfirmed;
        } else {
          counterElement.innerText = currentCountryData[0].NewConfirmed;
        }
        // check properties points and set counter depends on it value
        if (properties.casesTable.units !== "absolute") {
          counterElement.innerText = Math.ceil(
            (+counterElement.innerText / 7856170432) * 100000
          );
        }
      }
      break;
    case "deaths":
      // check properties period and set counter depends on it value
      if (properties.region === "World") {
        if (properties.period === "All time") {
          counterElement.innerText = properties.apiData.Global.TotalDeaths;
        } else {
          counterElement.innerText = properties.apiData.Global.NewDeaths;
        }
        // check properties points and set counter depends on it value
        if (properties.deathsTable.units !== "absolute") {
          counterElement.innerText = Math.ceil(
            (+counterElement.innerText / 7856170432) * 100000
          );
        }
      } else {
        if (properties.period === "All time") {
          counterElement.innerText = currentCountryData[0].TotalDeaths;
        } else {
          counterElement.innerText = currentCountryData[0].NewDeaths;
        }
        // check properties points and set counter depends on it value
        if (properties.deathsTable.units !== "absolute") {
          counterElement.innerText = Math.ceil(
            (+counterElement.innerText / 7856170432) * 100000
          );
        }
      }

      break;
    case "recovered":
      // check properties period and set counter depends on it value
      if (properties.region === "World") {
        if (properties.period === "All time") {
          counterElement.innerText = properties.apiData.Global.TotalRecovered;
        } else {
          counterElement.innerText = properties.apiData.Global.NewRecovered;
        }
        // check properties points and set counter depends on it value
        if (properties.recoveredTable.units !== "absolute") {
          counterElement.innerText = Math.ceil(
            (+counterElement.innerText / 7856170432) * 100000
          );
        }
      } else {
        if (properties.period === "All time") {
          counterElement.innerText = currentCountryData[0].TotalRecovered;
        } else {
          counterElement.innerText = currentCountryData[0].NewRecovered;
        }

        // check properties points and set counter depends on it value
        if (properties.recoveredTable.units !== "absolute") {
          counterElement.innerText = Math.ceil(
            (+counterElement.innerText / 7856170432) * 100000
          );
        }
      }
      break;
    default:
      throw new Error("Passed wrong argument to updateCounter func");
  }
}
