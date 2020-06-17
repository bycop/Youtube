<?php
	if($_POST){
		$nom = $_POST['Nom'];
		$message = $_POST['Message'];
		$list = fopen('commentlist.php', 'a');
		fwrite($list, 'Nom : <b><i>' . $nom . "</b></i> <br />Commentaire : <b><i>" . $message . "</b></i><hr>");
		fclose($list);
	}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Post a comment</title>
	<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/Contact-Form-Clean.css">
</head>
<body>
	<div class="contact-clean">
		<form method="post">
			<h2 class="text-center">Leave a comment</h2>
			<div class="form-group"><input class="form-control" type="text" name="Nom" placeholder="Name" required></div>
			<div class="form-group"><textarea class="form-control" rows="14" name=Message placeholder="Comment" required></textarea></div>
			<div class="form-group"><button class="btn btn-primary" type=submit>Post</button></div>
		</form>
	</div>
	<div class="text-center">
		<h1>Users comments</h1>
		<hr>
		<?php
		include "commentlist.php";
		?>
	</div>

</body>
</html>

<script>
	if( window.history.replaceState){
		window.history.replaceState( null, null, window.location.href);

	}
</script>