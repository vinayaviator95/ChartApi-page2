var pieChart = document.getElementById("pieChart").getContext("2d");
var myChart = new Chart(pieChart, {
  type: "pie",

  data: {
    labels: [
      "v5:production mode (63.36%)",
      "v5:insert change mode (3.83%)",
      "v5:maintaianace mode (0.55%)",
      "v5:other (1.09%)",
      "v5:No Operation (1.09%)",
      "v5:machine cleaning (30.05%)",
    ],
  
    datasets: [
      {
        label: [
          "v5:production mode (63.36%)",
          "v5:insert change mode (3.83%)",
          "v5:maintaianace mode (0.55%)",
          "v5:other (1.09%)",
          "v5:No Operation (1.09%)",
          "v5:machine cleaning (30.05%)",
        ],
        hoverBackgroundColor:[
            "rgba(90,102,107,255)",
            "rgba(75,171,170,255)",
            "rgba(207,132,89,255)",
            "rgba(146,178,94,255)",
            "rgba(169,206,225,255)",
            "rgba(24,119,178,255)",
        ],
        data: [63.39, 3.83, 0.55, 1.09, 1.09, 30.05],
        backgroundColor: [
          "rgba(90,102,107,255)",
          "rgba(75,171,170,255)",
          "rgba(207,132,89,255)",
          "rgba(146,178,94,255)",
          "rgba(169,206,225,255)",
          "rgba(24,119,178,255)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
   
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    
    },
  },
});

("rgba(254,193,7,255)");
("rgba(39,168,68,255)");

("rgba(252,255,0,255)");
("rgba(0,128,1,255)");


const stackedBarChart = document.getElementById("stackedBarChart").getContext("2d");

var myChart = new Chart(stackedBarChart, {
    
        type: 'bar',
        data: {
            
            labels: [
               "8am","9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm","7pm", "8pm", "9pm", "10pm", "11pm", "12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am"
              ],
            datasets: [
                
                // hoverBackgroundColor:[
                //     " rgba(65,105,226,255)",
                //     "rgba(175,34,34,255)",
                //     "rgba(59,179,113,255)",
                // ],
                {
                  label: "Hourly Production Count",
                  data: [57, 58, 56, 68, 70, 0, 58, 68, 68, 62, 64, 47, 0, 0, 0, 0, 0, 0, 0, 0, 46, 57, 34, 0],
                
                  borderColor: " rgba(65,105,226,255)",
                  backgroundColor: " rgba(65,105,226,255)",
                },
                {
                  label: "Hourly Production Time (mins)",
                  data: [22, 22, 24, 16, 14, 0, 22, 17, 16, 20, 19, 31, 60, 60, 60, 60, 60, 11, 0, 1, 21, 23, 14, 0 ],
              
                  borderColor: "rgba(175,34,34,255)",
                  backgroundColor: "rgba(175,34,34,255)",
                },
                {
                  label: "Hourly Idle time (mins)",
                  data: [37.6, 37.6, 35.8, 43.9, 43.9, 0, 38.3, 43.4, 43.8, 39.9, 41.1, 29, 0, 0, 0, 0, 0, 0, 0, 0.7, 29.9, 37.2, 20.6, 0],
             
                  borderColor: "rgba(59,179,113,255)",
                  backgroundColor: "rgba(59,179,113,255)",
                },
              ],
        },
        options: {
            
            scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  min: 0,
                  max: 160,
          
                  grid: {
                    display: true,
                  },
                },
              },
          plugins: {
            title: {
              display: true,
              text: 'Chart.js Bar Chart - Stacked'
            },
            legend: {
                display: true,
                position: "bottom",
              },
          },
          responsive: true,
         
        }
   
});