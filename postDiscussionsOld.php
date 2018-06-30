
application/x-httpd-php postDiscussionsOld.php ( HTML document text )
<!DOCTYPE html>
<html>
<body>

<?php
//set_include_path('/home/tashfeet/php/');
//include "Mail.php";
require_once "Mail.php";
$servername = "localhost";
$username = "tashfeet_admin";
$password = "admin123!";
$dbname = "tashfeet_DB_Feetball";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}


error_reporting(E_ALL);
$data = $_POST['messageData'];
$post = $data['post'];
$postType = $data['postType'];
$by = $data['by'];
//$post = mysqli_real_escape_string($conn, $_REQUEST['post']);
//$by = mysqli_real_escape_string($conn, $_REQUEST['by']);



// attempt insert query execution
$sql = "INSERT INTO discussions_old (user_name, text, post_type) VALUES ('$by','$post', '$postType')";
if(mysqli_query($conn, $sql)){
/*
		//Email Logic
		$to = "letsplay@feetball.nyc, kylespira@gamil.com";
		$from = "letsplay@feetball.nyc";
		$subject = "Message from Feetball Nyc - " . $postType;
		$headers = "From: letsplay@feetball.nyc";
		$txt = wordwrap($post,70);
		$txt = $txt."\r\n\r\n"."Love,"."\r\n".$by;
		//$txt = nl2br($txt);
		////Server Email
		//mail($to,$subject,$txt,$headers);
		////SMTP Email
		$host = "feetball.nyc";
		$port = "465";
		$username = "letsplay@feetball.nyc";
		$password = "Feetball123";
		$headers = array ('From' => $from,
			'To' => $to,
			'Subject' => $subject);
		$smtp = Mail::factory('smtp',
				array ('host' => $host,
				'auth' => true,
				'port' => $port,
				'username' => $username,
				'password' => $password));
		$mail = $smtp->send($to, $headers, $txt);
*/
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}

$conn = null;
?> 

</body>
</html>