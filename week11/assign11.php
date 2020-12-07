<?php

$firtName = $_GET["first_name"];
$lastName = $_GET["last_name"];
$address = $_GET["address"];
$phone = $_GET["phone"];
$creditCard0 = $_GET["card"];
$expirationDay = $_GET["day"];
$expirationMonth = $_GET["month"];

//Iphone Variables
$iphone = iphone();
$iphoneQt = $_GET["quantity_0"];

//Ipad Variables
$ipad = ipad();
$ipadQt = $_GET["quantity_1"];

//Apple Watch variables
$watch = watch();
$watchQt = $_GET["quantity_2"];

//Apple TV variables
$tv = tv();
$tvQt = $_GET["quantity_3"];

//Macpro variables
$macpro = macpro();
$macproQt = $_GET["quantity_4"];

//Imac variables
$imac = imac();
$imacQt = $_GET["quantity_5"];

//Total
$purchaseTotal = $iphone + $ipad + $watch + $tv + $macpro + $imac;


function iphone()
{
    $total = 0;
    $item_0 = isset($_GET["item_0"]) ? $_GET["item_0"] : "";
    $quantity_0 =  $_GET["quantity_0"];

    if ($item_0 == true) {
        $total = $quantity_0 * 997.54;
    }
    return $total;
}

function ipad()
{
    $total = 0;
    $item_1 = isset($_GET["item_1"]) ? $_GET["item_1"] : "";
    $quantity_1 = $_GET["quantity_1"];

    if ($item_1 == true) {
        $total = $quantity_1 * 1123.56;
    }
    return $total;
}

function watch()
{
    $total = 0;
    $item_2 = isset($_GET["item_2"]) ? $_GET["item_2"] : "";
    $quantity_2 =  $_GET["quantity_2"];

    if ($item_2 == true) {
        $total = $quantity_2 * 298.63;
    }
    return $total;
}

function tv()
{
    $total = 0;
    $item_3 = isset($_GET["item_3"]) ? $_GET["item_3"] : "";
    $quantity_3 = $_GET["quantity_3"];

    if ($item_3 == true) {
        $total = $quantity_3 * 636.98;
    }
    return $total;
}

function macpro()
{
    $total = 0;
    $item_4 = isset($_GET["item_4"]) ? $_GET["item_4"] : "";
    $quantity_4 = $_GET["quantity_4"];

    if ($item_4 == true) {
        $total = $quantity_4 * 1569.98;
    }
    return $total;
}

function imac()
{
    $total = 0;
    $item_5 = isset($_GET["item_5"]) ? $_GET["item_5"] : "";
    $quantity_5 = $_GET["quantity_5"];

    if ($item_5 == true) {
        $total = $quantity_5 * 1798.32;
    }
    return $total;
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Purchase confirmation</title>
    <link rel="stylesheet" href="../week08/style/main.css">
</head>

<body>
    <div class="container">
        <header>
            <h1> Apple World</h1>
        </header>

        <div class="content-home">
            <hr>
            <h1>Please review your Order</h1>
            <hr>

            <form action="../week11/assign11_a.php" method="GET">
                <?php
                echo "<h2>Personal Information</h2>";
                echo "<h3>Name: $firtName $lastName</h3>";
                echo "<h3>Address: $address</h3>";
                echo "<h3>Phone: $phone</h3>";

                echo "<hr><h2>Itens Selected</h2>";
                if ($iphoneQt > 0) {
                    echo "<h3>$iphoneQt Iphone and the total is $ $iphone </h3>";
                }
                if ($ipadQt > 0) {
                    echo "<h3>$ipadQt Ipad and the total is $$ipad</h3>";
                }
                if ($watchQt > 0) {
                    echo "<h3>$watchQt Apple Watch and the total is $$watch</h3>";
                }
                if ($tvQt > 0) {
                    echo "<h3>$tvQt Apple TV and the total is $$tv</h3>";
                }
                if ($macproQt > 0) {
                    echo "<h3>$macproQt Macpro and the total is $$macpro</h3>";
                }
                if ($imacQt > 0) {
                    echo "<h3>$imacQt Imac and the total is $$imac</h3>";
                }

                echo "<hr>";

                echo "<h2>Payment Information</h2>";

                echo "<h3>Your puchase total: $$purchaseTotal</h3>";

                echo "<h3>Card Type: $creditCard0</h3>";

                echo "<h3>Card Expiration Date: $expirationDay/$expirationMonth</h3>"

                ?>
                <input name="button" id="submit" style="width: 255px;" type="submit" value="Confirm">
                <input name="button" id="reset" style="width: 255px;" type="submit" value="Cancel">
            </form>




        </div>

    </div>

</body>

</html>