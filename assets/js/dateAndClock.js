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

	//m = m +1; //Monatszählung beginnt bei 0

	var monthString = getMonthString(m);

	divDate.innerHTML = d + ". " + monthString + " " + y;
	var t = setTimeout(showTime, 500);
}






function getMonthString(monthNumber){
	//alert("getMOnthString aufgerufen!");
	//alert(monthNumber);
	var monthNames = new Array(12);

	monthNames[0] = "Januar";
	monthNames[1] = "Februar";
	monthNames[2] = "März";
	monthNames[3] = "April";
	monthNames[4] = "Mai";
	monthNames[5] = "Juni";
	monthNames[6] = "Juli";
	monthNames[7] = "August";
	monthNames[8] = "September";
	monthNames[9] = "Oktober";
	monthNames[10] = "November";
	monthNames[11] = "Dezember";

	return monthNames[monthNumber];

}