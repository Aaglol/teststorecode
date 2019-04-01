<?php
if ($_SERVER['HTTPS'] != "on") {
    $url = "https://". $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
    header("Location: $url");
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>OAuth2 Consumer App</title>
	<link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgo=">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<base href="/">
	<style>
		body {
			padding: 0 20px;
		}
		.login-btn {
			width: 360px;
			height: auto;
		}
	</style>
</head>
<body>
	<div id="container">
		<h1>List Your Products App</h1>
		<p>This is a third-party app that lists your products from your favorite e-commerce platform provider.</p>
		<h2>Active Integrations:</h2>
		<ul>
			<li id="mystore-login"></li>
		</ul>
	</div>
	<script src="https://s3-eu-west-1.amazonaws.com/mystore-api-auth-app/assets/jquery-3.1.0.min.js"></script>
	<script src="https://s3-eu-west-1.amazonaws.com/mystore-api-auth-app/assets/jquery-query-vars.js"></script>
	<script>
		var href, html;
		href  = 'https://auth.mystore.no/oauth/authorize';
		href += '?client_id=275'; // 1. set your client_id
		href += '&redirect_uri=https://mytest.rlavoll.no/callback.php'; // 2. set redirect_uri for your app
		href += '&response_type=code';
		href += '&scope=read:products read:orders read:customers'; // 3. set which scopes the token should be able to access
		html  = '<img class="login-btn" src="https://s3-eu-west-1.amazonaws.com/mystore-api-auth-app/assets/mystore-api-login-btn.jpg" alt="Login with Mystore.no" />';
		$('<a>', { href: href }).html(html).appendTo('#mystore-login');
	</script>
</body>
</html>