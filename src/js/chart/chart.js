import Chart from "../../../node_modules/chart.js/dist/Chart.min.js"

export default function(stateControls, region) {
  let chart;
  let destrChart = document.querySelector('#chart')
  destrChart.remove();
  document.querySelector('#wrapper-chart').innerHTML='<canvas id="chart"></canvas>';
  let ctx = document.querySelector('#chart').getContext('2d');
  let state = []; //axis y
  let arrTotalCases = [];
  let arrDates = []; //axis x
  let arrTotalDeaths = [];
  let arrTotalRecovered = [];
  let title;
  let chartConfig = {};

  

if (region === undefined || region === "World") {
  fetch("https://covid19-api.org/api/timeline")//for all world
  .then((response) => response.json())
  .then((data) => {
    
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
      if (stateControls === "cases" && region === "World" ) {
        state = arrTotalCases;
        title = 'total cases'
        
      } else if (stateControls === "deaths" && region === "World" ) {
        state = arrTotalDeaths;
        title = 'total death'
      } else if (stateControls === "recovered" && region === "World" ) {
        state = arrTotalRecovered;
        title = 'total recovered'
      } else if (stateControls === undefined && region === undefined ) {
        state = arrTotalCases;
        title = 'total cases'
      } 

       chartConfig = {
        type: 'line',
        data: {
            labels: arrDates, //axis x
            datasets: [{
                label:'',
                data: state, //axis y
                backgroundColor: [
                    'rgba(255, 211, 0, 0.8)',
                ],
            }],
        },
        options: {
            title: {
                display: true,
                text: title, //title graph
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

    chart = new Chart(ctx, chartConfig);
    chart.update();
  });
  
 } else {
  
   fetch(`https://disease.sh/v3/covid-19/historical/${region}?lastdays=all`) //for specific country
   .then((response) => response.json())
   .then((data) => {
    //console.log(data);
    let keys = Object.keys(data.timeline.cases);
    for (let i = 0, l = keys.length; i < l; i++) {
      arrDates.push(keys[i]);
      arrTotalCases.push(data.timeline.cases[keys[i]]);
    }; 
    keys = Object.keys(data.timeline.deaths);
    for (let i = 0, l = keys.length; i < l; i++) {
     // arrDates.push(keys[i]);
      arrTotalDeaths.push(data.timeline.deaths[keys[i]]);
    };
  
    keys = Object.keys(data.timeline.recovered);
    for (let i = 0, l = keys.length; i < l; i++) {
    //arrDates.push(keys[i]);
    arrTotalRecovered.push(data.timeline.recovered[keys[i]]);
    };

   if (stateControls === "cases") {
    state = arrTotalCases;
    title = `total cases ${region}`
   } else if (stateControls === "deaths"){
    state = arrTotalDeaths;
    title = `total deaths ${region}`
   } else if (stateControls === "recovered"){
    state = arrTotalRecovered;
    title = `total recovered ${region}`
   } else if (stateControls === undefined){
    state = arrTotalCases;
    title = `total cases ${region}`
   }
  
     chartConfig = {
     type: 'line',
     data: {
        labels: arrDates, //axis x
        datasets: [{
            label:'',
            data: state, //axis y
            backgroundColor: [
                'rgba(255, 211, 0, 0.8)',
            ],
        }],
    },
    options: {
        title: {
            display: true,
            text: title, //title graph
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
   chart = new Chart(ctx, chartConfig);
   });
 }
}
