function runAjax()
{
    var obj, dbParam, xmlhttp, myObj, x, txt = "";
    obj = { "limit":10 };
    dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            myObj = JSON.parse(this.responseText);

            txt += "<table border='1'>";
            txt += "<thead>";
            txt += "<tr style='height: 48px;'>";
            txt += "<td style='width: 127px; height: 48px;'>";
            txt += "<p style='text-align: center;'>";
            txt += "<strong>Filename</strong>";
            txt += "</p>";
            txt += "</td>";
            txt += "<td style='width: 127px; height: 48px;'>";
            txt += "<p style='text-align: center;'>";
            txt += "<strong>Type</strong>";
            txt += "</p>";
            txt += "</td>";
            txt += "<td style='width: 127px; height: 48px;'>";
            txt += "<p style='text-align: center;'>";
            txt += "<strong>CWD</strong>";
            txt += "</p>";
            txt += "</td>";
            txt += "<td style='width: 127px; height: 48px;'>";
            txt += "<p style='text-align: center;'>";
            txt += "<strong>Action</strong>";
            txt += "</p>";
            txt += "</td>";
            txt += "</tr>";
            txt += "</thead>";
            txt += "<thody>";
            for (x in myObj)
            {
                txt += "<tr style='height: 48px;'>";
                txt += "<td style='height: 48px; text-align: center;' width='114'><p>" + myObj[x].fileName + "</p></td>";
                txt += "<td>" + myObj[x].fileType + "</td>";
                txt += "<td>" + myObj[x].cwd + "</td>";
                if(myObj[x].fileType == "file")
                {
                    txt += "<td><input id='files' type='button' value='Click to display' onclick=newDoc('" + myObj[x].fileName + "')></input></td>";
                }
                else
                {
                    txt += "<td></td>";
                }
                txt += "</tr>";

                
            }
            txt += "</table>";
            txt += "</thody>";

            document.getElementById("table_dir").innerHTML = txt;
        }
    };
    xmlhttp.open("GET", "assign10.php?x=" + dbParam, true);
    xmlhttp.send();
}


function newDoc(doc) 
{
    window.location.assign(doc)
}