function initMap(circles, lat, lng, zoom, color, type) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        zoom: 1.5,
        center: [0, 20]
    });

    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.
    for (var country in circles) {
        // Add the circle for this city to the map.
        let circleSize

        if (type) {
            switch (type) {
                case 'active':
                    circleSize = circles[country].active
                    break;
                case 'deaths':
                    circleSize = circles[country].deaths
                    break;
                case 'recovered':
                    circleSize = circles[country].recovered
                    break;

                default:
                    circleSize = circles[country].total
                    break;
            }
        } else {
            circleSize = circles[country].total
        }
   
        var countryCircle = new MapboxCircle(circles[country].center, Math.sqrt(circleSize) * 1000, {
            strokeColor: color,
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillColor: color,
            fillOpacity: 0.25,
        }).addTo(map);


    }
}

buildCircles = (data, lat, lng, zoom, color, type) => {
    let circleData = []
    let passColor = ''
    let passType = ''

    console.log(type)

    if (!type) { passType = 'active' } else { passType = type }
    if (!color) { passColor = '#9945d7' } else { passColor = color }

    console.log(data, type);

    data.map((entry) => {
        let item = {}

        item['country'] = entry.country
        item['center'] = {
            "lat": entry.countryInfo.lat,
            "lng": entry.countryInfo.long
        }
        item['active'] = entry.active
        item['deaths'] = entry.deaths
        item['recovered'] = entry.recovered
        item['total'] = entry.cases

        circleData.push(item)
    })

    initMap(circleData, lat, lng, zoom, passColor, passType)
}