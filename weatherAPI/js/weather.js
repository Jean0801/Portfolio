const url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-7EC08C0F-C5F2-478D-84D4-702FCF71511C';
const counties = ['臺北市', '新北市', '基隆市', '桃園市', '新竹縣', '新竹市', '苗栗縣', '臺中市', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '嘉義市', '臺南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '連江縣', '金門縣', '澎湖縣'];

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let weatherData = {};
        let locations = data['records']['location'];
        locations.forEach(function (location) {
            let locationName = location['locationName'];
            weatherData[locationName] = {};
            let weatherElements = location['weatherElement'];
            weatherElements.forEach(function (weatherElement) {
                let elementName = weatherElement['elementName'];
                let parameterName = weatherElement['time'][0]['parameter']['parameterName'];
                weatherData[locationName][elementName] = parameterName;
            });
        });

        // console.log(weatherData);

        /*    輸出畫面    */
        const containerElement = document.querySelector('.container');

        counties.forEach(function (county) {
            // console.log(county);
            // console.log(weatherData[county]);
            let rain = weatherData[county]['PoP']
            var wealthIcon
            if (rain >= 50) {
                wealthIcon = './img/rain.svg'
            } else if (rain >= 30) {
                wealthIcon = './img/cloud.svg'
            } else if (rain >= 20) {
                wealthIcon = './img/sun&cloud.svg'
            } else {
                wealthIcon = './img/sun.svg'
            }

            containerElement.innerHTML += `
                <div class="card" data-tilt>
                    <div class="img">
                        <img src="${wealthIcon}" alt="">
                    </div>
                    <div class="county-name">${county}</div>
                    <div class="wx">${weatherData[county]['Wx']}</div>
                    <div class="temperature">
                        <div class="max-t">${weatherData[county]['MaxT']}°C</div>｜
                        <div class="min-t">${weatherData[county]['MinT']}°C</div>
                    </div>
                    <div class="ci">${weatherData[county]['CI']}</div>
                    <div class="pop">降雨機率:${weatherData[county]['PoP']}%</div>
                </div>`;
        });
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"));

    });
