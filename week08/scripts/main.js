function reset()
{
    
}
function iMac()
{
    var total = 0;
    var item_5 = document.getElementById("item_5").checked;
    var quantity_5 = document.getElementById("quantity_5").value;

    if(item_5 == true){
        total = quantity_5 * 1798.32;
    }
   return total;
}

function mac()
{
    var total = 0;
    var item_4 = document.getElementById("item_4").checked;
    var quantity_4 = document.getElementById("quantity_4").value;

    if(item_4== true){
        total = quantity_4 * 1569.98;
    }
   return total;

}

function tv()
{
    var total = 0;
    var item_3 = document.getElementById("item_3").checked;
    var quantity_3 = document.getElementById("quantity_3").value;

    if(item_3== true){
        total = quantity_3 * 636.98;
    }
   return total;
}

function watch()
{
    var total = 0;
    var item_2 = document.getElementById("item_2").checked;
    var quantity_2 = document.getElementById("quantity_2").value;

    if(item_2== true){
        total = quantity_2 * 298.63;
    }
   return total;
}

function ipad()
{
    var total = 0;
    var item_1 = document.getElementById("item_1").checked;
    var quantity_1 = document.getElementById("quantity_1").value;

    if(item_1== true){
        total = quantity_1 * 1123.56;
    }
   return total;
}

function iphone()
{
    var total = 0;
    var item_0 = document.getElementById("item_0").checked;
    var quantity_0 = document.getElementById("quantity_0").value;

    if(item_0 == true){
        total = quantity_0 * 997.54;
    }
   return total;
}

function total()
{
    var total = 0;

    var totalIphone = iphone();
    var totalIpad = ipad();
    var totalWatch = watch();
    var totalTV = tv();
    var macpro = mac();
    var imac = iMac();

    total = totalIphone + totalIpad + totalWatch + totalTV + macpro + imac;
    

    document.getElementById("total").value = total.toFixed(2);
}