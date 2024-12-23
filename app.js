const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
    const appid = '7f4cb96ed7569f5835e251bf7c6f0606';
    const query = req.body.city;
    const unit = req.body.unit;
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&q=${query}&units=${unit}`;
 
    https.get(url, (response) => {
        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const windSpeed = weatherData.wind.speed;
            const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
            
            let unitSymbol;
            let windUnit;
            if (unit === 'metric') {
                unitSymbol = 'Degree Celcius';
                windUnit = 'm/s';
            } else if (unit === 'imperial') {
                unitSymbol = 'Degree Fahrenheit';
                windUnit = 'miles/hour';
            } else {
                unitSymbol = 'Kelvin';
                windUnit = 'm/s';
            }

            // res.write(`<h1>The temperature in ${query} is ${temp} ${unitSymbol}.</h1>`);
            // res.write(`<h3>It's currently ${description}.<br> The wind is blowing at a speed of ${windSpeed} ${windUnit}</h3>`);
            // res.write(`<img src="${iconUrl}" alt="Weather icon">`);
            res.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Weather Result</title>
                    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
                </head>
                <body class="bg-success">
                    <div class="container mt-5">
                        <h1 class="text-center mb-4 text-white">Weather in ${query}</h1>
                        <div class="card bg-info">
                            <div class="card-body text-center text-body">
                                <h2 class="card-title">Temperature: ${temp} ${unitSymbol}</h2>
                                <p class="card-text">Description: ${description}</p>
                                <p class="card-text">Wind Speed: ${windSpeed} ${windUnit}</p>
                                <img src="${iconUrl}" alt="Weather icon" class="img-fluid">
                                <p><a href="/" class="btn btn-light mt-3 text-info">Go Back</a></p>
                            </div>
                        </div>
                    </div>
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                </body>
                </html>
            `);
            res.send();
        });
    });
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});