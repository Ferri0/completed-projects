import Chart from "../../../node_modules/chart.js/dist/Chart.min.js"

export default function() {
  window.onload = () => {
  const ctx = document.querySelector('#chart').getContext('2d');

  fetch("https://covid19-api.org/api/timeline")
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);
    let arrTotalCases = [];
    let arrDates = [];
    let arrTotalDeaths = [];
    let arrTotalRecovered = [];

    for (let i=data.length - 1; i>0; i--) {       //get arr of dates
      arrDates.push(data[i].last_update.substr(5,5));
    };
    for (let i=data.length - 1; i>0; i--) {       //get arr of total cases
      arrTotalCases.push(data[i].total_cases);
    };
    for (let i=data.length - 1; i>0; i--) {       //get arr of total deaths
      arrTotalDeaths.push(data[i].total_deaths);
    };
    for (let i=data.length - 1; i>0; i--) {       //get arr of total recovered
      arrTotalRecovered.push(data[i].total_recovered);
    };
      console.log(data);

      const chartConfig = {
        type: 'line',
        data: {
            labels: arrDates, //axis x
            datasets: [{
                label:'',
                data: arrTotalRecovered, //axis y
                backgroundColor: [
                    'rgba(255, 211, 0, 0.8)',
                ],
            }],
        },
        options: {
            title: {
                display: true,
                text: 'total cases', //title graph
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }

    const chart = new Chart(ctx, chartConfig);
  });
}
}

    