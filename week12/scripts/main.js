function calcDistance() {
    var startCity = document.getElementById("startCity").value
    var startState = document.getElementById("startState").value
    var endCity = document.getElementById("endCity").value
    var endState = document.getElementById("endState").value

    var sCity = "startCity=" + startCity
    var sState = "&startState=" + startState
    var eCity = "&endCity=" + endCity
    var eState = "&endState=" + endState

    var queryString = sCity + sState + eCity + eState

    var myUrl = "/cgi-bin/cs213/mileageAjaxJSON" + "?" + queryString

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var startCity = " " + myObj.trip.startcity.charAt(0).toUpperCase() + myObj.trip.startcity.slice(1) + " - ";
            var startState = " " + myObj.trip.startstate.toUpperCase() + " ";
            var endCity = " " + myObj.trip.endcity.charAt(0).toUpperCase() + myObj.trip.endcity.slice(1) + " - ";
            var endState = " " + myObj.trip.endstate.toUpperCase() + " ";
            var miles = myObj.trip.miles;

            var text = "";
            for (i = 0; i < myObj.tmode.length; i++) {
                text += myObj.tmode[i] + ", ";
            }

            document.getElementById("result").innerHTML = "The distance between " + "<strong>" + startCity + startState + "</strong>" + "and" + "<strong>" + endCity + endState + "</strong>" + "is: " + miles + " miles and you can use these types of  transportation: " + text;

        }
    };
    xhttp.open("GET", myUrl, true);
    xhttp.send();
}