// pie chart
setUpPieChart = (data) => {
    // prepare data
    const chartData = [
        ['Category', 'Amount'],
        ['Active', data.active],
        ['Deaths', data.deaths],
        ['Recovered', data.recovered]
    ];

    drawPieChart(chartData)
}

// column chart
let columnChartData = []
setUpColumnChart = (data) => {
    let chartData = []

    chartData[0] = ['Date', 'Active', 'Deaths', 'Recovered']

    let i = 1
    for (const [key, value] of Object.entries(data.cases)) {
        chartData[i] = [key, value]
        i++
    }

    let j = 1
    for (const [key, value] of Object.entries(data.deaths)) {
        chartData[j].push(value)
        j++
    }

    let k = 1
    for (const [key, value] of Object.entries(data.recovered)) {
        chartData[k].push(value)
        k++
    }

    console.log(chartData)

    drawLineChart(chartData)
}

// found here: https://developers.google.com/chart/interactive/docs/gallery/piechart
drawPieChart = (chartData) => {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = google.visualization.arrayToDataTable(chartData);

        var options = {
            title: 'COVID-19 Status',
            titleTextStyle: {
                fontSize: 20
            },
            titleColor: '#fff',
            backgroundColor: '#282A2F',
            pieHole: 0.4,
            legend: {
                position: 'bottom',
                textStyle: {
                    color: '#fff'
                }
            },
            chartArea: {
                left: 20,
                top: 70,
                width: '100%',
                height: '65%'
            },
            colors: [
                '#ee5b58',
                '#757575',
                '#5DC83E'
            ]
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }
}

// found here: https://developers.google.com/chart/interactive/docs/gallery/linechart
drawLineChart = (chartData) => {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(chartData);

        var options = {
            title: 'COVID-19 Cases in the Past Month',
            titleColor: '#fff',
            titleTextStyle: {
                fontSize: 20
            },
            curveType: 'function',
            legend: {
                position: 'none'
            },
            backgroundColor: '#282A2F',
            hAxis: {
                title: 'Time',
                titleTextStyle: {
                    color: '#ffffff'
                },
                textColor: '#ffffff'
            },
            vAxis: {
                title: 'Deaths / Recovered / Cases',
                titleTextStyle: {
                    color: '#ffffff'
                },
                format: 'short',
                textColor: '#ffffff',
                gridlines: {
                    color: '#fff',
                    minSpacing: 20
                }
            },
            lineWidth: 5,
            chartArea: {
                left: 100,
                top: 70,
                width: '85%',
                height: '75%'
            },
            colors: [
                '#ee5b58',
                '#757575',
                '#5DC83E'
            ]
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
   }
}