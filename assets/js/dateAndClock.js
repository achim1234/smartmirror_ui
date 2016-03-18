function showTime(){
	var divTime = document.getElementById("getTime");
	var time = new Date();

	var h = time.getHours();
	var m = time.getMinutes();
	var s = time.getSeconds();

	m = addZeroToSeconds(m);
	s = addZeroToSeconds(s);


	divTime.innerHTML = h + ":" + m + ":" + s;
	var t = setTimeout(showTime, 500);
}


function addZeroToSeconds(i){
	if(i < 10){
		i = "0" +i; //fügt eine Null vor einstelligen Minuten und Sekunden ein
	}
	return i;
}




function showDate(){
	var divDate = document.getElementById("getDate");
	var date = new Date();

	var d = date.getDate(); //ermittelt den Tag
	var m = date.getMonth();
	var y = date.getFullYear();

	m = m +1; //Monatszählung beginnt bei 0
	divDate.innerHTML = d + "." + m + "." + y;
	var t = setTimeout(showTime, 500);
}