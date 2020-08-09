setUpNavButtons = (data) => {
    // infected - active
    document.getElementById('active-delta').innerText = `Today: ${addDecimals(data.todayCases)}`
    document.getElementById('active-total').innerText = numbersFriendlyFormat(data.active)

    // deaths
    document.getElementById('deaths-delta').innerText = `Today: ${addDecimals(data.todayDeaths)}`
    document.getElementById('deaths-total').innerText = numbersFriendlyFormat(data.deaths)

    // recovered
    document.getElementById('recovered-delta').innerText = `Today: ${addDecimals(data.todayRecovered)}`
    document.getElementById('recovered-total').innerText = numbersFriendlyFormat(data.recovered)

    // total cases
    document.getElementById('cases-delta').innerText = `Today: ${addDecimals(data.cases)}`
    document.getElementById('cases-total').innerText = numbersFriendlyFormat(data.cases)
}