<?php

$apiKey = "pb8pcbtg488mp7xyprf3mq77";
$apiEndpoint = "http://api.crunchbase.com/v/1/search.js?query=recent&entity=company&api_key=". $apiKey;

echo file_get_contents($apiEndpoint);