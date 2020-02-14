<?php session_start();
if(!isset($_SESSION['UserData']['Username'])){
	header("location:login.php");
	exit;
}
?>

Parfait ! Tu es connecté sur la page privée <a href="logout.php">Clique ici</a> pour te déconnecter.