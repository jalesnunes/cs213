function country() {

    var x = document.getElementById("country");
    //var i = x.selectedIndex;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("display").innerHTML = this.responseText;
        }
    };

    var country = document.getElementById("country").value

    if (country == "Canada") {
        xhttp.open("GET", "files/canada.txt", true);
    } else if (country == "USA") {
        xhttp.open("GET", "files/usa.txt", true);
    } else if (country == "Mexico") {
        xhttp.open("GET", "files/mexico.txt", true);
    } else if (country == "Russia") {
        xhttp.open("GET", "files/russia.txt", true);
    }

    xhttp.send();

    //document.getElementById("display").innerHTML = x.options[i].text + ' was seleceted';
}

function retrieveData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var text = "";
            for (var i = 0; i < myObj.students.length; i++) {
                text += myObj.students[i].first + " " + myObj.students[i].last + "<br>" +
                        myObj.students[i].address.city + " " + myObj.students[i].address.state + " " + myObj.students[i].address.zip + "<br>" +
                        myObj.students[i].major + "<br>" +
                        myObj.students[i].gpa + "<br>" + "<br>";
            }
            document.getElementById("display2").innerHTML = text;
        }
    };

    var filename = document.getElementById("filename").value

    if (filename == "json.txt") {
        xhttp.open("GET", "files/json.txt", true);
    } else if (filename == "json1.txt") {
        xhttp.open("GET", "files/json1.txt", true);
    } else {
        alert(`The file ${filename} do not exit, enter a valid file name`)
    }

    xhttp.send();
    //document.getElementById("display2").innerHTML = "Button clicked";
}