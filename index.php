<?php
$day = date("l");
$date = date('m/d/Y');
if (isset($_POST['get_day'])){
	$date = $_POST['date'];
	$day = date("l", strtotime($date));
}

?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
	<br>
	<form action="" method="POST" class="form" style="width: 400px;height: 400px;position: relative;left: 0;right: 0;margin: auto;margin-top: 15px">
		<b>
			<?php 
			echo $day;
		?></b>
		<hr>
		<input class="form-control col-12" type="date" name="date" value="<?php echo $date;?>"><br><br>
		<button class="btn btn-primary form-control col-12" name="get_day" type="submit">Get day</button>
	</form>
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>
</html>