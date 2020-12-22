import properties from "../properties";

export default async function getApiData(callback1, callback2) {
  async function getCovidData() {
    const url = "https://api.covid19api.com/summary";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async function getCountriesData() {
    const url =
      "https://restcountries.eu/rest/v2/all?fields=name;population;flag";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  properties.apiData = await getCovidData();
  properties.apiDataCountries = await getCountriesData();
  if (callback1) callback1();
  if (callback2) callback2();
}

// export { getApiData, getApiCountriesData };
