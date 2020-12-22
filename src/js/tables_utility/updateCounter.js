import properties from "../properties";

// set counter depends on properties values
// argument is part of table class name: cases || deaths || recpovered
export default async function (tableName) {
  const counterElement = document.querySelector(`.stats__count--${tableName}`);

  const worldPopulation = 7856170432;

  // get current country data
  let currentCountryData = null;
  let currentCountryPopulation = null;
  if (properties.region !== "World") {
    currentCountryData = properties.apiData.Countries.filter((e) => {
      if (e.Country === properties.region) return e;
      return null;
    });
    const populationArray = properties.apiDataCountries.filter((e) => {
      let countryName = null;

      if (e.name === "Bolivia (Plurinational State of)")
        countryName = "Bolivia";
      else if (e.name === "Cabo Verde") countryName = "Cape Verde";
      else if (e.name === "Congo") countryName = "Congo (Brazzaville)";
      else if (e.name === "Congo (Democratic Republic of the)")
        countryName = "Congo (Kinshasa)";
      else if (e.name === "Holy See")
        countryName = "Holy See (Vatican City State)";
      else if (e.name === "Iran (Islamic Republic of)")
        countryName = "Iran, Islamic Republic of";
      else if (e.name === "Korea (Democratic People's Republic of)")
        countryName = "Korea (South)";
      else if (e.name === "Lao People's Democratic Republic")
        countryName = "Lao PDR";
      else if (e.name === "Macao") countryName = "Macao, SAR China";
      else if (e.name === "Macedonia (the former Yugoslav Republic of)")
        countryName = "Macedonia, Republic of";
      else if (e.name === "Moldova (Republic of)") countryName = "Moldova";
      else if (e.name === "Palestine, State of")
        countryName = "Palestinian Territory";
      else if (e.name === "Saint Barthélemy")
        countryName = "Saint Vincent and Grenadines";
      else if (e.name === "Syrian Arab Republic")
        countryName = "Syrian Arab Republic (Syria)";
      else if (e.name === "Taiwan") countryName = "Taiwan, Republic of China";
      else if (e.name === "United Arab Emirates")
        countryName = "United Arab Emirates";
      else if (
        e.name === "United Kingdom of Great Britain and Northern Ireland"
      )
        countryName = "United Kingdom";
      else if (e.name === "Venezuela (Bolivarian Republic of)")
        countryName = "Venezuela (Bolivarian Republic)";
      else countryName = e.name;

      if (countryName === properties.region) return e;
      return null;
    });
    currentCountryPopulation = populationArray[0].population;
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
            (+counterElement.innerText / worldPopulation) * 100000
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
            (+counterElement.innerText / currentCountryPopulation) * 100000
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
            (+counterElement.innerText / worldPopulation) * 100000
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
            (+counterElement.innerText / currentCountryPopulation) * 100000
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
            (+counterElement.innerText / worldPopulation) * 100000
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
            (+counterElement.innerText / currentCountryPopulation) * 100000
          );
        }
      }
      break;
    default:
      throw new Error("Passed wrong argument to updateCounter func");
  }
}
