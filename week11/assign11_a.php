<?php
$button = $_GET["button"];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../week08/style/main.css">
</head>

<body>

    <div class="container">
        <header>
            <h1> Apple World</h1>
        </header>
        <div class="content-home">
            <?php
            if ($button == "Confirm") {
                echo "<h1>Congratulations, your purchase is confirmed!</h1>";
            } else {
                echo "<h1>Purchase cancellation is confirmed</h1>";
            }
            ?>
        </div>
    </div>

</body>

</html>