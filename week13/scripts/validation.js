 function checkPeformanceType(input) {
     var performanceTypeType = document.getElementById("performance_type").value
     console.log(performanceTypeType)
     var container = document.querySelector('.hide')
     var spanError = document.getElementById("error_0")

     if (performanceTypeType == "") {
         input.style.borderColor = "red"
         spanError.innerHTML = "This is not a valid Type"
     } else if (performanceTypeType == "duet") {
         input.style.borderColor = "green"
         container.style.display = 'block';
         spanError.innerHTML = ""
     } else if (performanceTypeType == "solo") {
         input.style.borderColor = "green"
         container.style.display = 'none';
         spanError.innerHTML = ""
     } else if (performanceTypeType == "concerto") {
         input.style.borderColor = "green"
         container.style.display = 'none';
         spanError.innerHTML = ""
     }

     return performanceTypeType
 }

 function checkBuilding(input) {

     var building = document.getElementById("location").value
     console.log(building)
     var spanError = document.getElementById("error_1")

     if (building == "") {
         input.style.borderColor = "red"
         spanError.innerHTML = "This is not a valid building"
     } else if (building == "snow") {
         input.style.borderColor = "green"
         spanError.innerHTML = ""
     } else if (building == "austin") {
         input.style.borderColor = "green"
         spanError.innerHTML = ""
     } else if (building == "jales") {
         input.style.borderColor = "green"
         spanError.innerHTML = ""
     }
 }

 function checkTimeSlot(input) {
     var timeSlot = document.getElementById("time_slot").value
     console.log([timeSlot])
     var spanError = document.getElementById("error_2")

     if (timeSlot == "") {
         input.style.borderColor = "red"
         spanError.innerHTML = "This is not a valid time slot"
     } else if (timeSlot == "8:00 AM") {
         input.style.borderColor = "green"
         spanError.innerHTML = ""
     } else if (timeSlot == "9:45 AM") {
         input.style.borderColor = "green"
         spanError.innerHTML = ""

     }
 }

 function checkSkill(input) {
     var skill = document.getElementById("skill").value
     console.log([skill])
     var spanError = document.getElementById("error_6")

     if (skill == "") {
         input.style.borderColor = "red"
         spanError.innerHTML = "This is not a valid skill"
     } else if (skill == "beginner") {
         input.style.borderColor = "green"
         spanError.innerHTML = ""
     } else if (skill == "intermediate") {
         input.style.borderColor = "green"
         spanError.innerHTML = ""
     } else if (skill == "pre-advanced") {
         input.style.borderColor = "green"
         spanError.innerHTML = ""
     } else if (skill == "advanced") {
         input.style.borderColor = "green"
         spanError.innerHTML = ""
     }
 }

 function checkInstrument(input) {
     var instrument = document.getElementById("instrument").value
     console.log([instrument])
     var spanError = document.getElementById("error_7")

     if (instrument == "") {
         input.style.borderColor = "red"
         spanError.innerHTML = "This is not a valid instrument"
     } else if (instrument == "piano") {
         input.style.borderColor = "green"
         spanError.innerHTML = ""
     } else if (instrument == "voice") {
         input.style.borderColor = "green"
         spanError.innerHTML = ""
     } else if (instrument == "string") {
         input.style.borderColor = "green"
         spanError.innerHTML = ""
     } else if (instrument == "organ") {
         input.style.borderColor = "green"
         spanError.innerHTML = ""
     } else if (instrument == "other") {
         input.style.borderColor = "green"
         spanError.innerHTML = ""
     }
 }

 function validateInput(input) {
     if (input.value != "") {
         input.style.borderColor = "green"
     }

 }

 function clear(input) {
     input.style.borderColor = "white"

 }

 function sendData() {
     var performanceType = document.getElementById("performance_type").value


     var building = document.getElementById("location").value


     var timeSlot = document.getElementById("time_slot").value

     var skill = document.getElementById("skill").value

     var instrument = document.getElementById("instrument").value

     var room = document.getElementById("room").value

     var fisrtName = document.getElementById("first_name").value

     var lastName = document.getElementById("last_name").value

     var studentId = document.getElementById("student_id").value

     //second person

     var fisrtName2 = document.getElementById("first_name_2").value

     var lastName2 = document.getElementById("last_name_2").value

     var studentId2 = document.getElementById("student_id_2").value

     var skill2 = document.getElementById("skill_2").value

     var instrument2 = document.getElementById("instrument_2").value


     //var all = performanceType +" "+ building  +" "+ timeSlot +" "+ skill +" "+ instrument +" "+ room +" "+ fisrtName +" "+ lastName +" "+ studentId +" "+ fisrtName2 +" "+ lastName2 +" "+ studentId2 +" "+ skill2 +" "+ instrument2
     //console.log("all: " + all)

     const toSend = {
         firstName: fisrtName,
         lastName: lastName,
         studentId: studentId,
         room: room,
         performanceType: performanceType,
         building: building,
         timeSlot: timeSlot,
         skill: skill,
         instrument: instrument,
         fisrtName2: fisrtName2,
         lastName2: lastName2,
         studentId2: studentId2,
         skill2: skill2,
         instrument2: instrument2

     };

     const jsonString = JSON.stringify(toSend)

     const xmlhttp = new XMLHttpRequest()


     xmlhttp.open("GET", "assign13.php?x=" + jsonString, true);
     xmlhttp.send();


     //console.log("all: " + jsonString)
 }

 function getFile() {
     var fileLocation = "../data/assign13.json"
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function () {
         if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            /*for(i = 0; i < myObj.length; i++) {
                document.getElementById("loaddoc").innerHTML = myObj[i].firstName + " "
                document.getElementById("loaddoc").innerHTML += myObj[i].lastName + " "
                document.getElementById("loaddoc").innerHTML += myObj[i].building + " room " + myObj[i].room + " "
                document.getElementById("loaddoc").innerHTML += myObj[i].timeSlot
                document.getElementById("loaddoc").innerHTML += myObj[i].
            }*/
            loadDoc(myObj)
         }
         //document.getElementById("loaddoc").innerHTML = firstName
     };
     xhttp.open("GET", fileLocation, true);
     xhttp.send();
 }

 function loadDoc(myObj) {
    var student = myObj;
    var studentContent = "";
    studentContent += "<table>";
    studentContent += "<thody>";

	for(i = 0; i < myObj.length; i++)
	{
        studentContent += "<tr style='height: 48px;'>";
    
        if(student[i].performanceType == "solo" || student[i].performanceType == "concerto") 
        {
            studentContent += "<td style='width: 127px; height: 48px; text-align: center;'>" + student[i].firstName + " " + student[i].lastName + "<br>" + "ID " + student[i].studentId + "</td>";
            studentContent += "<td style='width: 127px; height: 48px; text-align: center;'>" + student[i].building + "<br>" + "room " + student[i].room + "</td>";
            studentContent += "<td style='width: 127px; height: 48px; text-align: center;'>" + student[i].time_slot + "</td>";
            if(student[i].performanceType == "Solo")
            {
                studentContent += "<td style='width: 127px; height: 48px; text-align: center;'>" + student[i].performanceType;
            }
            else
            {
                studentContent += "<td style='width: 127px; height: 48px; text-align: center;'>" + student[i].performanceType;
            }
            studentContent += " for " + "<br>" + student[i].skill + " " + student[i].instrument+ "</td>";
        }
        else if(student[i].performanceType == "duet")
        {
            studentContent += "<td style='width: 127px; height: 48px; text-align: center;'>";
            studentContent += student[i].firstName + " " + student[i].lastName + "<br>" + "ID " + student[i].studentId_2;
            studentContent += "<br>" + "and" + "<br>";
            studentContent += student[i].firstName_2 + " " + student[i].lastName_2 + "<br>" + "ID " + student[i].studentId_2 + "</td>";
            studentContent += "<td style='width: 127px; height: 48px; text-align: center;'>" + student[i].building + "<br>" + "room " + student[i].room + "</td>";
            studentContent += "<td style='width: 127px; height: 48px; text-align: center;'>" + student[i].time_slot + "</td>";
            studentContent += "<td style='width: 127px; height: 48px; text-align: center;'>" + student[i].performanceType;
            studentContent += " for " + "<br>" + student[i].skill + " " + student[i].instrument + "</td>";
        }
    }
    studentContent += "</tr>";
    studentContent += "</thody>";

	document.getElementById("loaddoc").innerHTML = studentContent;
 }