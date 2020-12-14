<?php

$x = $_REQUEST["x"];

$data = file_get_contents('../data/assign13.json');

if(empty($data)) 
{
    $json_arr = array();
}
else
{
    $json_arr = json_decode($data, true);
}

array_push($json_arr, json_decode($x, true));
file_put_contents('../data/assign13.json', json_encode($json_arr));

?>