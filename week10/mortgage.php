<?php
//Variables to receive from the form
$APR =      $_GET["apr"];
$term =     $_GET["term"];
$amount =   $_GET["amount"];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mortgage Calculator</title>
    <!-- styles -->
    <link rel="stylesheet" href="./style.css" />
</head>

<body>
    <header>
        <h2>Mortgage Calculator</h2>
    </header>
    <div class="clearfix">
        <section>
            <div class="row">
                <div class="col-4 col-s-9">
                    <h1>Results</h1>
                    <h3>
                        <?php
                        print "APR: $APR<br>";
                        print "Term: $term<br>";
                        print "Amount: $amount<br>";

                        $rate = (float)$APR / 100 / 12;
                        $totalTerm = $term * 12;
                        $mortgage = ($amount * ($rate * pow((1 + $rate), $totalTerm)) / (pow((1 + $rate), $totalTerm) - 1));
                        ?>
                    </h3>
                    <h3>Total mortgage =
                        <?php
                        $mortgageFinal = number_format($mortgage, 2, ".", "");
                        print "$mortgageFinal";
                        ?>
                    </h3>
                </div>
            </div>
        </section>
    </div>
</body>

</html>