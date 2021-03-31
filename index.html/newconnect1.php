<?php

$user = 'marques';
$pass = 'arjun123';
$db_name = 'IBM AC922';
$host = 'localhost';
$name = $_POST['name'];
$Contact = $_POST['tel'];
$Email = $_POST['email'];
$OrganizationName = $_POST['Organizaton'];
$Website = $_POST['Enquiry'];

$conn = mysqli_connect($host, $user, $pass,$db_name);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
$sql = "INSERT INTO IC922 (Name,Contact,Email,Organization,Enquiry) VALUES ('$name','$Contact','$Email','$Organization','$Enquiry')";

if (mysqli_query($conn, $sql)) {
  echo "Thank You!! We'll reach you Shortly !";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>