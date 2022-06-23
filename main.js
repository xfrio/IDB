const { Chart } = require("chart.js")

const ctx = document.getElementById("myChart")
const names = ['noviembre', 'diciembre', 'marzo', 'abril', 'mayo']
const ages = ['5%', '10%', '20%', '40%', '60%']

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'edad',
            data: ages,
            backgroundColor: [
                'rgba(255, 99, 132, 0,2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1.5
        }]
    }
})
