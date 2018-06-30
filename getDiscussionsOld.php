<!DOCTYPE html>
<html>
<body>

<?php
$servername = "localhost";
$username = "tashfeet_admin";
$password = "admin123!";
$dbname = "tashfeet_DB_Feetball";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT * FROM discussions_old ORDER BY discussion_old_id DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
				echo "<article class='message'><div><p>";
				echo $row["text"]. "</p><span>". $row["user_name"]. " | ".  $row["created_on"];
				echo "</span></div></article>";

    }
} else {
    echo "0 results";
}

$conn->close();
?> 

</body>
</html>