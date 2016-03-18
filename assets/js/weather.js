
function showWeather(){
	gettingWeatherJSON();
}

function gettingWeatherJSON(){

		var url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22sacramento%2C%20ca%22)&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        
        $.getJSON(url, function(jsonWeather){
            //alert("getting jason aufgerufen");
           //var data = JSON.stringify(jsonWeather.query);

            var title = JSON.stringify(jsonWeather.query.results.channel.item.title);
            var weatherText = JSON.stringify(jsonWeather.query.results.channel.item.forecast[0].text);
            var currentTemperature = JSON.stringify(jsonWeather.query.results.channel.item.condition.temp);
            var maxTemperature = JSON.stringify(jsonWeather.query.results.channel.item.forecast[0].high);
            var minTemperature = JSON.stringify(jsonWeather.query.results.channel.item.forecast[0].low);
            

            var showTitle = document.getElementById("title");
            var showWeather = document.getElementById("weather");
            var showCurrentTemperature = document.getElementById("currentTemperature");
            var showMaxTemperature = document.getElementById("maxTemperature");
            var showMinTemperature = document.getElementById("minTemperature");

            showTitle.innerHTML = title;
            showWeather.innerHTML = weatherText;
            showCurrentTemperature.innerHTML = currentTemperature;
            showMaxTemperature.innerHTML = maxTemperature;
            showMinTemperature.innerHTML = minTemperature;



            /*alert("Titel: " + title);	
            alert("Wetter: " + weatherText);
            alert("Aktuelle Temperatur: " + currentTemperature);
            alert("Maximale Temperatur: " + maxTemperature);
            alert("Minimale Temperatur: " + minTemperature);
            */
        });

}




