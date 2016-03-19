
function showWeather(){
    //alert("showWeather aufgerufen");
	//gettingWeatherJSON();

    var yahoo = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    var yahoo2 = "http://weather.yahooapis.com/forecastrss?p=GMXX8438&u=c";
    var openWeather = "api.openweathermap.org/data/2.5/forecast?q=weingarten,de&APPID=c6831ebb9b3db6cde29c3e08edb49fa8";
    
    var linkWeingarten = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22weingarten%2Cde%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";



    $.get(linkWeingarten, function (response) {
        //alert("get aufgerufen");
        /* The JSON.stringify() method just takes the object and turns it back into text (aka, a string). 
        I'm only doing this here to show what the string looks like.*/

        // show the raw json
       // $('#getWeather').text(JSON.stringify(response));

        $('#cityName').text(JSON.stringify(response.query.results.channel.title));
        $('#currentTemperature').text(JSON.stringify(response.query.results.channel.item.condition.temp + " F"));
        $('#weatherDescription').text(JSON.stringify(response.query.results.channel.item.condition.text));





        /* Working with the 'response' object (not string) here, now we can access the different properties available. 
        (Look at jsoneditoronline.org to see the structure of the properties.) 
        text = '<b>Current Temperature: </b>' + response.main.temp + ' F<br/>';
        text += '<b>Weather Conditions: </b>' + response.weather[0].description + '<br/>';
        $('#parsed_json').append(text);*/

    });
}

/*


{
 "query": {
  "count": 1,
  "created": "2016-03-19T19:30:36Z",
  "lang": "de-DE",
  "results": {
       "channel": {
            "title": "Yahoo! Weather - Weingarten, DE",
            "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Weingarten__DE/*http://weather.yahoo.com/forecast/GMXX1479_f.html",
            "description": "Yahoo! Weather for Weingarten, DE",
            "language": "en-us",
            "lastBuildDate": "Sat, 19 Mar 2016 7:49 pm CET",
            "ttl": "60",
            "location": {
                 "city": "Weingarten",
                 "country": "Germany",
                 "region": "BW"
            },
            "units": {
                 "distance": "mi",
                 "pressure": "in",
                 "speed": "mph",
                 "temperature": "F"
            },
            "wind": {
                 "chill": "44",
                 "direction": "40",
                 "speed": "10"
            },
            "atmosphere": {
                 "humidity": "58",
                 "pressure": "30.03",
                 "rising": "0",
                 "visibility": "6.21"
            },
            "astronomy": {
                 "sunrise": "6:25 am",
                 "sunset": "6:34 pm"
            },
            "image": {
                 "title": "Yahoo! Weather",
                 "width": "142",
                 "height": "18",
                 "link": "http://weather.yahoo.com",
                 "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
            },
            "item": {
                 "title": "Conditions for Weingarten, DE at 7:49 pm CET",
                 "lat": "47.81",
                 "long": "9.64",
                 "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Weingarten__DE/*http://weather.yahoo.com/forecast/GMXX1479_f.html",
                 "pubDate": "Sat, 19 Mar 2016 7:49 pm CET",
                 "condition": {
                  "code": "33",
                  "date": "Sat, 19 Mar 2016 7:49 pm CET",
                  "temp": "48",
                  "text": "Fair"
                 },

                 "description": "\n<img src=\"http://l.yimg.com/a/i/us/we/52/33.gif\"/><br />\n<b>Current Conditions:</b><br />\nFair, 48 F<BR />\n<BR /><b>Forecast:</b><BR />\nSat - Clear. High: 54 Low: 34<br />\nSun - Partly Cloudy. High: 51 Low: 36<br />\nMon - Mostly Cloudy. High: 49 Low: 34<br />\nTue - Partly Cloudy. High: 51 Low: 34<br />\nWed - Mostly Cloudy. High: 49 Low: 32<br />\n<br />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Weingarten__DE/*http://weather.yahoo.com/forecast/GMXX1479_f.html\">Full Forecast at Yahoo! Weather</a><BR/><BR/>\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)<br/>\n",
                 "forecast": [
                  {
                       "code": "31",
                       "date": "19 Mar 2016",
                       "day": "Sat",
                       "high": "54",
                       "low": "34",
                       "text": "Clear"
                  },
                  {
                       "code": "30",
                       "date": "20 Mar 2016",
                       "day": "Sun",
                       "high": "51",
                       "low": "36",
                       "text": "Partly Cloudy"
                  },
                  {
                       "code": "28",
                       "date": "21 Mar 2016",
                       "day": "Mon",
                       "high": "49",
                       "low": "34",
                       "text": "Mostly Cloudy"
                  },
                  {
                       "code": "30",
                       "date": "22 Mar 2016",
                       "day": "Tue",
                       "high": "51",
                       "low": "34",
                       "text": "Partly Cloudy"
                  },
                  {
                       "code": "28",
                       "date": "23 Mar 2016",
                       "day": "Wed",
                       "high": "49",
                       "low": "32",
                       "text": "Mostly Cloudy"
                  }
                 ],
                 "guid": {
                      "isPermaLink": "false",
                      "content": "GMXX1479_2016_03_23_7_00_CET"
                 }
            }
       }
  }
 }
}
*/