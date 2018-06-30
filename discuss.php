<?php
	error_reporting(E_ALL);
	$data = $_POST['messageData'];
	$post = $data['post'];
	$by = $data['by'];
	$date = $data['date'];
	$line = array($date, $by, $post);
	$f = fopen('discussion.csv', 'a');
	fputcsv($f, $line);
	fclose($f);
	echo $date . "," . $by . "," . $post;
?>