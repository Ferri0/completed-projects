import properties from "../properties";

export default async function () {
  await fetch("https://api.covid19api.com/summary")
    .then(async (response) => response.json())
    .then((data) => {
      properties.apiData = data;
    });
}
