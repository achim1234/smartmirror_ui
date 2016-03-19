
function showWeather(){
    //alert("showWeather aufgerufen");
	gettingWeatherJSON();
}










function gettingWeatherJSON(){
        

        var url = "api.openweathermap.org/data/2.5/forecast?q=weingarten,de&APPID=c6831ebb9b3db6cde29c3e08edb49fa8"; //koordinaten weingarten

        if (window.XMLHttpRequest){ // code for IE7+, Firefox, Chrome, Opera, Safari
            // create AJAX-Request-Object
            request = new XMLHttpRequest();
            
            // Kommunikation mit Server initialisieren
            request.open("GET", url, true);
            
            // Eventhandler registrieren, um auf asynchrone Antwort vom Server reagieren zu können
            request.onreadystatechange = weatherResponseFromOpenweather;
            
            // Anfrage senden
            request.send();     
    } else { // code for IE6, IE5, non AJAX compatible browsers
        alert("Browser unterstützt kein AJAX. IE7+, Firefox, Chrome, Opera, Safari oder ein anderer AJAX-fähriger Browser notwendig!");
    }   

}




function weatherResponseFromOpenweather(){
    //anfrage nur alle 10 min, sonst keine antwort

    if(request.readyState == 4){
        
        //var weatherData = request.responseText;
        //alert(request.responseText.city.name);
        //var cityName = JSON.parse(weatherData);
        alert(JSON.stringify(request.responseText));
        alert(JSON.parse(request.responseText));
        //alert(cityName);

       
    }







}
















       
        /*

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
            
        

}*/




