<?php
if ($_SERVER['HTTPS'] != "on") {
    $url = "https://". $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
    header("Location: $url");
    exit;
}
?>

<!DOCTYPE html>
<html lang="nor">
<head>
	<meta charset="utf-8">
	<title>Robin Test</title>
	<link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgo=">
	<link rel="stylesheet" href="layout.css">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<base href="http://mytest.rlavoll.no/">
	<script src="https://s3-eu-west-1.amazonaws.com/mystore-api-auth-app/assets/jquery-3.1.0.min.js"></script>
	<script src="https://s3-eu-west-1.amazonaws.com/mystore-api-auth-app/assets/jquery-query-vars.js"></script>
   	<script src="https://mytest.rlavoll.no/myStoreJS.js"></script>

	<style>
.createorder{
	display:none;
}
.orders-card{
	display:inline-block;
	padding:15px;
	border:1px solid #000;
	margin-right:15px;
	vertical-align: center;
}

.product-card {
	display:inline-block;
	padding:15px;
	border:1px solid #000;
	margin-right:15px;
	vertical-align: center;
}

.input-error{
	box-shadow:0 0 5px red;
}
.errormessage{
	color:red;
}
</style>
<script>

$(document).ready(function() {
		  
		  $("#btn").click(function() {
			 $("#ordersMain").show();
			 $("#createorder").hide();
			 $("#productsMain").hide();
			 GetOrders();
		  });

		  $("#btn2").click(function() {
		  	 $("#productsMain").show();
			 $("#createorder").hide();
			 $("#ordersMain").hide();
			 GetProducts();
		  });

		   $("#btn3").click(function() {
		     $("#createorder").show();
		     $("#productsMain").hide();
			 $("#ordersMain").hide();
		  });
});
</script>
</head>
<body>

<div class ="header">
  <h1>Velkommen til denne butikken</h1>
   <p>Prosjekt av Robin Lavoll</p>
  	<p id="successmessage" class="successmessage"></p>
	<p id="errormessage" class="errormessage"></p>
</div>

<div class="topnav">
      <a id="btn" class="btn">Ordrer</a>
      <a id="btn2" class="btn2">Produkter</a>
	  <a id="btn3" class="bt3">Lag ny ordre</a>
</div>


<div class="row">
  <div class="column">
  <h1><b>Ordrer</b></h1>
	<div id="ordersMain" class="ordersMain">
	</div>
  </div>

  <div class="column">
   <h1><b>Produkter</b></h1>
	<div id="productsMain" class="productsMain">
	</div>
  </div>

  <div class="column">
    <h1><b>Lag ny ordre</b></h1>
	<div id="createorder" class= "createorder">
	<form id="sendForm">
    <h2><b>Contact information</b></h2>
	<br>
	<h3>Customer:</h3>
    
	<p>
      <label for="customer_address_name">
        <span>Name: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text"  id="customer_address_name" name="customer_address_name">
    </p>
	
	<p>
      <label for="customer_address_city">
        <span>City:: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text"  id="customer_address_city" name="customer_address_city">
    </p>

	<p>
      <label for="customer_address_address">
        <span>Address: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text"  id="customer_address_address" name=".customer_address_address">
    </p>

	<p>
      <label for="customer_address_country">
        <span>Country: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text"  id="customer_address_country" name="customer_address_country">
    </p>

	<p>
      <label for="customer_address_email">
        <span>E-mail: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="email" id="customer_address_email" name="customer_address_email">
    </p>

	<p>
      <label for="customer_address_phone">
        <span>Number: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="number" id="customer_address_phone" name="customer_address_phone">
    </p>

	<h1>Shipping: </h1>
	<p>
      <label for="shipping_address_name">
        <span>Name: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text" id="shipping_address_name" name="shipping_address_name">
    </p>

	<p>
      <label for="shipping_address_city">
        <span>City: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text" id="shipping_address_city" name="shipping_address_city">
    </p>

	<p>
      <label for="shipping_address_address">
        <span>Address: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text" id="shipping_address_address" name="shipping_address_address">
    </p>

	<p>
      <label for="shipping_address_country">
        <span>Country: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text" id="shipping_address_country" name="shipping_address_country">
    </p>

	<h1>Billing: </h1>	

	<p>
      <label for="billing_address_name">
        <span>Name: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text" id="billing_address_name" name="billing_address_name">
    </p>

	<p>
      <label for="billing_address_city">
        <span>City: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text" id="billing_address_city" name="billing_address_city">
    </p>

	<p>
      <label for="billing_address_address">
        <span>Address: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text" id="billing_address_address" name="billing_address_address" >
    </p>

	<p>
      <label for="billing_address_country">
        <span>Country: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text" id="billing_address_country" name="billing_address_country">
    </p>

	<h1>Other: </h1>

	<p>
      <label for="currency">
        <span>Currency: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text" id="currency" name="currency">
    </p>

	<p>
      <label for="customer_id">
        <span>Customer id: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="number" id="customer_id" name="customer_id">
    </p>

	<p>
      <label for="order_status_id">
        <span>Order-status: </span>
        <strong><abbr title="required">*number</abbr></strong>
      </label>
      <input type="number" id="order_status_id" name="order_status_id">
    </p>

	<p> <button id="submit_order" type="submit_order">Submit order</button> </p>
  </form>
 </div>
</div>

<script>

	$("#submit_order").click(function(submit_order) {
    submit_order.preventDefault();
	runData();

	});
	
    function runData(){

			var customer_address_name = $("#customer_address_name").val();
			var customer_address_city = $("#customer_address_city").val();
			var customer_address_address = $("#customer_address_address").val();
			var customer_address_country = $("#customer_address_country").val();
			var customer_address_phone = $("#customer_address_phone").val();
			var customer_address_email = $("#customer_address_email").val();
			var shipping_address_name = $("#shipping_address_name").val();
			var shipping_address_city = $("#shipping_address_city").val();
			var shipping_address_address = $("#shipping_address_address").val();
			var shipping_address_country = $("#shipping_address_country").val();
			var billing_address_name = $("#billing_address_name").val();
			var billing_address_city = $("#billing_address_city").val();
			var billing_address_address = $("#billing_address_address").val();
			var billing_address_country = $("#billing_address_country").val();
			var currency = $("#currency").val();
			var created_at = '2019-03-29 01:01:01';
			var updated_at = '2019-03-29 01:01:01';
			var customerid = $("#customer_id").val();
			var orders="";
			var formData = JSON.stringify({
			data:{
			type: orders,
			attributes:{
			customer_address_name: customer_address_name, 
			customer_address_city: customer_address_city, 
			customer_address_address: customer_address_address, 
			customer_address_country: customer_address_country, 
			customer_address_phone: customer_address_phone, 
			customer_address_email: customer_address_email, 
			shipping_address_name: shipping_address_name, 
			shipping_address_city: shipping_address_city, 
			shipping_address_address: shipping_address_address, 
			shipping_address_country: shipping_address_country, 
			billing_address_name: billing_address_name, 
			billing_address_city: billing_address_city, 
			billing_address_address: billing_address_address, 
			billing_address_country: billing_address_country, 
			currency: currency, 
			created_at: created_at, 
			updated_at: updated_at
			},
			relationships:{
				customer:{
					data:{
						type: 'customers',
						id: customerid
					}
				},
				'order-status':{
					data:{
						type: 'order-status',
						id: 2
					}
				}
			}
		}
	});


    $.ajax({
	url: 'https://api.mystore.no/shops/kvalyaskio/orders',
	headers: {
		'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJmMDQwMzRjNjdjMTE4ZTI1ODM5Njg4NjkzNzljMGUyY2FlMTI1YTc0ODUzZWMwZTQzOWM4ZjUyYjYxMDgyYmM4NDA4YzJkNWUzOTBhODBhIn0.eyJhdWQiOiIxIiwianRpIjoiMmYwNDAzNGM2N2MxMThlMjU4Mzk2ODg2OTM3OWMwZTJjYWUxMjVhNzQ4NTNlYzBlNDM5YzhmNTJiNjEwODJiYzg0MDhjMmQ1ZTM5MGE4MGEiLCJpYXQiOjE1NTM3MjM4MDgsIm5iZiI6MTU1MzcyMzgwOCwiZXhwIjoxODY5MzQzMDA4LCJzdWIiOiJrdmFseWFza2lvXzciLCJzY29wZXMiOlsicmVhZDpwcm9kdWN0cyIsInJlYWQ6b3JkZXJzIiwicmVhZDpvcmRlci1wcm9kdWN0cyIsInJlYWQ6b3JkZXItcHJvZHVjdC1hdHRyaWJ1dGVzIiwicmVhZDpvcmRlci1zdGF0dXMiLCJyZWFkOm9yZGVyLXN0YXR1cy1oaXN0b3J5IiwicmVhZDpvcmRlci10b3RhbHMiLCJyZWFkOndlYmhvb2tzIiwicmVhZDpwcm9kdWN0LXRhZ3MiLCJyZWFkOnByb2R1Y3QtcHJvcGVydGllcyJdLCJub19teXN0b3JlX2hvc3RzIjpbImt2YWx5YXNraW8iXX0.mJ1qzeaNw4Sm0a5qh5qo2pMYznYEz8ShUqnTx-YtPL8wvnQmpeJ8DM_fhYTTDjSQYoxm34XySgMPS3h7tRvUrtUCWakY2aOSIQvRAlrbvZ0t1Qmucl51G29PQzjnbsHhqupbYVu44poUOjYgS3qRYvev-p_jFwO5pVsfNIOA1WBp6UoqRFABMtVt4dl3Gb-c6znEaEHPH1Q2OxTUjLpi76y8l_EBvhKwzyden1am8j_tI9xmzaZmkS6vcrDz5aVnm_DgMD2Qx1XpSoJ7B1AZWZeuBEW6Mwj7N5nYsGezai6-SWT1FQC9lELQZHThEbbOUY7xAv2ufz0_ha3gpywfzpFe4SBIG2I-60QMKi9wpM1q7p5sj3v8FnxFk9b6BxxmuD7kKqOKC4HS7ACye5KTQezn1usNH9YonuZnuIdrM8qe9ryyOlLn8c7yyA9H9bX7ymoPyMcQlSHBnljR0nfWY9v35w0PXB3VqdChR-2qQIu7Rvi8VA_4TmEsAox9Vg6jZfZpaum-fAOTpdncYme9aXWHy_qJhUzmVO0oSzQikwUv1yCRN8aY5mt0zdyIy4HrAPEyHvDEK8RuZJleuoQ5Uwi5wh657llL7sE43ZmJaM34G276Vu8mI-akDTULzIlyU5dllQz17-s0HYZjDBiJZ2UecmeW-GlylnytnRz40XU',
		'Content-Type':'application/vnd.api+json',
		'Accept': 'application/vnd.api+json',
		'Access-Control-Allow-Headers': 'Authorization'
	},
	method: 'POST',
	dataType: "application/vnd.api+json",
	data: formData,
	success: function(data) {
        successmessage = 'Din ordre er klar! ID: ' + data.id;
        $("#successmessage").text(successmessage);
		sendForm.clear();
    },
    error: function(data) {
        errormessage = 'Error - Did you miss a field?';
        $("#errormessage").text(errormessage);
	}
  });

}
</script>
</body>
</html>