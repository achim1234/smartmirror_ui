
function showWeather(){
	gettingWeatherJSON();
}

function gettingWeatherJSON(){

		var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        
        $.getJSON(url, function(jsonWeather){
            //alert("getting jason aufgerufen");
           //var data = JSON.stringify(jsonWeather.query);

            var title = JSON.stringify(jsonWeather.query.results.channel.item.title);
            var weatherText = JSON.stringify(jsonWeather.query.results.channel.item.forecast[0].text);
            var currentTemperature = JSON.stringify(jsonWeather.query.results.channel.item.condition.temp);
            var maxTemperature = JSON.stringify(jsonWeather.query.results.channel.item.forecast[0].high);
            var minTemperature = JSON.stringify(jsonWeather.query.results.channel.item.forecast[0].low);
            

            alert("Titel: " + title);	
            alert("Wetter: " + weatherText);
            alert("Aktuelle Temperatur: " + currentTemperature);
            alert("Maximale Temperatur: " + maxTemperature);
            alert("Minimale Temperatur: " + minTemperature);
        });

}




