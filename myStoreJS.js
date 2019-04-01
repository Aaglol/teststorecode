

function GetOrders(){
	startGetting();

		function startGetting() {
	
			$.ajax({
						url: 'https://api.mystore.no/shops/kvalyaskio/orders/' , 
						headers: {
							'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJmMDQwMzRjNjdjMTE4ZTI1ODM5Njg4NjkzNzljMGUyY2FlMTI1YTc0ODUzZWMwZTQzOWM4ZjUyYjYxMDgyYmM4NDA4YzJkNWUzOTBhODBhIn0.eyJhdWQiOiIxIiwianRpIjoiMmYwNDAzNGM2N2MxMThlMjU4Mzk2ODg2OTM3OWMwZTJjYWUxMjVhNzQ4NTNlYzBlNDM5YzhmNTJiNjEwODJiYzg0MDhjMmQ1ZTM5MGE4MGEiLCJpYXQiOjE1NTM3MjM4MDgsIm5iZiI6MTU1MzcyMzgwOCwiZXhwIjoxODY5MzQzMDA4LCJzdWIiOiJrdmFseWFza2lvXzciLCJzY29wZXMiOlsicmVhZDpwcm9kdWN0cyIsInJlYWQ6b3JkZXJzIiwicmVhZDpvcmRlci1wcm9kdWN0cyIsInJlYWQ6b3JkZXItcHJvZHVjdC1hdHRyaWJ1dGVzIiwicmVhZDpvcmRlci1zdGF0dXMiLCJyZWFkOm9yZGVyLXN0YXR1cy1oaXN0b3J5IiwicmVhZDpvcmRlci10b3RhbHMiLCJyZWFkOndlYmhvb2tzIiwicmVhZDpwcm9kdWN0LXRhZ3MiLCJyZWFkOnByb2R1Y3QtcHJvcGVydGllcyJdLCJub19teXN0b3JlX2hvc3RzIjpbImt2YWx5YXNraW8iXX0.mJ1qzeaNw4Sm0a5qh5qo2pMYznYEz8ShUqnTx-YtPL8wvnQmpeJ8DM_fhYTTDjSQYoxm34XySgMPS3h7tRvUrtUCWakY2aOSIQvRAlrbvZ0t1Qmucl51G29PQzjnbsHhqupbYVu44poUOjYgS3qRYvev-p_jFwO5pVsfNIOA1WBp6UoqRFABMtVt4dl3Gb-c6znEaEHPH1Q2OxTUjLpi76y8l_EBvhKwzyden1am8j_tI9xmzaZmkS6vcrDz5aVnm_DgMD2Qx1XpSoJ7B1AZWZeuBEW6Mwj7N5nYsGezai6-SWT1FQC9lELQZHThEbbOUY7xAv2ufz0_ha3gpywfzpFe4SBIG2I-60QMKi9wpM1q7p5sj3v8FnxFk9b6BxxmuD7kKqOKC4HS7ACye5KTQezn1usNH9YonuZnuIdrM8qe9ryyOlLn8c7yyA9H9bX7ymoPyMcQlSHBnljR0nfWY9v35w0PXB3VqdChR-2qQIu7Rvi8VA_4TmEsAox9Vg6jZfZpaum-fAOTpdncYme9aXWHy_qJhUzmVO0oSzQikwUv1yCRN8aY5mt0zdyIy4HrAPEyHvDEK8RuZJleuoQ5Uwi5wh657llL7sE43ZmJaM34G276Vu8mI-akDTULzIlyU5dllQz17-s0HYZjDBiJZ2UecmeW-GlylnytnRz40XU ',
							'Accept': 'application/vnd.api+json',
							'Content-Type': 'application/vnd.api+json',
							'Access-Control-Allow-Headers': 'Authorization'
						},
						success: onSuccess,
						error: onError
			})
		}

		function onError(){
			$('#ordersMain').html('i failed.');
		}
		

		function onSuccess(orderReturn) {

			for(var i=0; i<orderReturn.data.length; i++) {
				
			var order_dataintell = orderReturn.data[i].attributes;
			var order_customer_address_name = order_dataintell.customer_address_name;
			var order_customer_address_company = order_dataintell.customer_address_company;
			var order_customer_address_address =  order_dataintell.customer_address_address; 
			var order_customer_address_zipcode = order_dataintell.customer_address_zipcode; 
			var order_customer_address_state = order_dataintell.customer_address_state;  
			var order_customer_address_country = order_dataintell.customer_address_country; 
			var order_customer_address_phone = order_dataintell.customer_address_phone;
			var order_customer_address_email = order_dataintell.customer_address_email; 
			var order_shipping_address_name = order_dataintell.shipping_address_name;
			var order_shipping_address_company = order_dataintell.shipping_address_company; 
			var order_shipping_address_address = order_dataintell.shipping_address_address; 
			var order_shipping_address_region = order_dataintell.shipping_address_region; 
			var order_shipping_address_city = order_dataintell.shipping_address_city; 
			var order_shipping_address_zipcode = order_dataintell.shipping_address_zipcode;
			var order_shipping_address_state = order_dataintell.shipping_address_state; 
			var order_shipping_address_country = order_dataintell.shipping_address_country; 
			var order_billing_address_name = order_dataintell.billing_address_name; 
			var order_billing_address_company = order_dataintell.billing_address_company; 
			var order_billing_address_address = order_dataintell.billing_address_address;  
			var order_billing_address_region =  order_dataintell.billing_address_region; 
			var order_billing_address_city = order_dataintell.billing_address_city;
			var order_billing_address_zipcode = order_dataintell.billing_address_zipcode;
			var order_billing_address_state = order_dataintell.billing_address_state;
			var order_billing_address_country = order_dataintell.billing_address_country;
			var order_payment_method = order_dataintell.payment_method;
			var order_payment_module = order_dataintell.payment_module;
			var order_updated_at = order_dataintell.updated_at;
			var order_created_at = order_dataintell.created_at;
			var order_finished_at = order_dataintell.finished_at;
			var order_currency = order_dataintell.currency;
			var order_shipping_method = order_dataintell.shipping_method;
			var order_tracking_number = order_dataintell.tracking_number;
			}
			orderReturn.data.forEach(function (order_dataintell) {
							$('<div>', { class: 'orders-card' })
								.html(
								'<b>' + 'Personal details ' + '</b>' + '<br>' + '<br>' +
								'<b>' + 'Name: ' + '</b>' + order_customer_address_name + '<br>' +
								'<b>' + 'Company: ' + '</b>' + order_customer_address_company + '<br>' +
								'<b>' + 'Address: ' + '</b>' + order_customer_address_address + '<br>' +
								'<b>' + 'Zipcode: ' + '</b>' + order_customer_address_zipcode + '<br>' +
								'<b>' + 'State: ' + '</b>' + order_customer_address_state + '<br>' +
								'<b>' + 'Country: ' + '</b>' + order_customer_address_country + '<br>' +
								'<b>' + 'Phone: ' + '</b>' + order_customer_address_phone + '<br>' +
								'<b>' + 'Email: ' + '</b>' + order_customer_address_email + '<br>' +
								'<br>' + '<b>'  + 'Shipping details ' + '</b>' + '<br>' + '<br>' + 
								'<b>' + 'Name: ' + '</b>' + order_shipping_address_name + '<br>' +
								'<b>' + 'Company: ' + '</b>' + order_shipping_address_company + '<br>' +
								'<b>' + 'Address: ' + '</b>' + order_shipping_address_address + '<br>' +
								'<b>' + 'Region: ' + '</b>' + order_shipping_address_region + '<br>' +
								'<b>' + 'City: ' + '</b>' + order_shipping_address_city + '<br>' +
								'<b>' + 'Zipcode: ' + '</b>' + order_shipping_address_zipcode + '<br>' +
								'<b>' + 'State: ' + '</b>' + order_shipping_address_state + '<br>' +
								'<br>' + '<b>'  + 'Billing details ' + '</b>' + '<br>' + '<br>' + 
								'<b>' + 'Name: ' + '</b>' + order_billing_address_name + '<br>' +
								'<b>' + 'Address: ' + '</b>' + order_billing_address_address + '<br>' +
								'<b>' + 'Region: ' + '</b>' + order_billing_address_region + '<br>' +
								'<b>' + 'City: ' + '</b>' + order_billing_address_city + '<br>' +
								'<b>' + 'Zipcode: ' + '</b>' + order_billing_address_zipcode + '<br>' +
								'<b>' + 'State: ' + '</b>' + order_billing_address_state + '<br>' +
								'<b>' + 'Country: ' + '</b>' + order_billing_address_country + '<br>' +
								'<br>' + '<b>'  + 'Other ' + '</b>' + '</b>' + '<br>' + '<br>' + 
								'<b>' + 'Payment Method: ' + '</b>' + order_payment_method + '<br>' +
								'<b>' + 'Payment Module: ' + '</b>' + order_payment_module + '<br>' +
								'<b>' + 'Order Updated:' + '</b>' + order_updated_at + '<br>' +
								'<b>' + 'Order Created: ' + '</b>' + order_created_at + '<br>' +
								'<b>' + 'Finished: ' + '</b>' + order_finished_at + '<br>' +
								'<b>' + 'Currency: ' + '</b>' + order_currency + '<br>' +
								'<b>' + 'Shipping Method: ' + '</b>' + order_shipping_method + '<br>' +
								'<b>' + 'Tracking Number: ' + '</b>' + order_tracking_number + '<br>' 
							)
							.clone().appendTo('#ordersMain');
			});
		}
}

function GetProducts() {

		$.ajax({
					url: 'https://api.mystore.no/shops/kvalyaskio/products/' , 
					headers: {
						'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJmMDQwMzRjNjdjMTE4ZTI1ODM5Njg4NjkzNzljMGUyY2FlMTI1YTc0ODUzZWMwZTQzOWM4ZjUyYjYxMDgyYmM4NDA4YzJkNWUzOTBhODBhIn0.eyJhdWQiOiIxIiwianRpIjoiMmYwNDAzNGM2N2MxMThlMjU4Mzk2ODg2OTM3OWMwZTJjYWUxMjVhNzQ4NTNlYzBlNDM5YzhmNTJiNjEwODJiYzg0MDhjMmQ1ZTM5MGE4MGEiLCJpYXQiOjE1NTM3MjM4MDgsIm5iZiI6MTU1MzcyMzgwOCwiZXhwIjoxODY5MzQzMDA4LCJzdWIiOiJrdmFseWFza2lvXzciLCJzY29wZXMiOlsicmVhZDpwcm9kdWN0cyIsInJlYWQ6b3JkZXJzIiwicmVhZDpvcmRlci1wcm9kdWN0cyIsInJlYWQ6b3JkZXItcHJvZHVjdC1hdHRyaWJ1dGVzIiwicmVhZDpvcmRlci1zdGF0dXMiLCJyZWFkOm9yZGVyLXN0YXR1cy1oaXN0b3J5IiwicmVhZDpvcmRlci10b3RhbHMiLCJyZWFkOndlYmhvb2tzIiwicmVhZDpwcm9kdWN0LXRhZ3MiLCJyZWFkOnByb2R1Y3QtcHJvcGVydGllcyJdLCJub19teXN0b3JlX2hvc3RzIjpbImt2YWx5YXNraW8iXX0.mJ1qzeaNw4Sm0a5qh5qo2pMYznYEz8ShUqnTx-YtPL8wvnQmpeJ8DM_fhYTTDjSQYoxm34XySgMPS3h7tRvUrtUCWakY2aOSIQvRAlrbvZ0t1Qmucl51G29PQzjnbsHhqupbYVu44poUOjYgS3qRYvev-p_jFwO5pVsfNIOA1WBp6UoqRFABMtVt4dl3Gb-c6znEaEHPH1Q2OxTUjLpi76y8l_EBvhKwzyden1am8j_tI9xmzaZmkS6vcrDz5aVnm_DgMD2Qx1XpSoJ7B1AZWZeuBEW6Mwj7N5nYsGezai6-SWT1FQC9lELQZHThEbbOUY7xAv2ufz0_ha3gpywfzpFe4SBIG2I-60QMKi9wpM1q7p5sj3v8FnxFk9b6BxxmuD7kKqOKC4HS7ACye5KTQezn1usNH9YonuZnuIdrM8qe9ryyOlLn8c7yyA9H9bX7ymoPyMcQlSHBnljR0nfWY9v35w0PXB3VqdChR-2qQIu7Rvi8VA_4TmEsAox9Vg6jZfZpaum-fAOTpdncYme9aXWHy_qJhUzmVO0oSzQikwUv1yCRN8aY5mt0zdyIy4HrAPEyHvDEK8RuZJleuoQ5Uwi5wh657llL7sE43ZmJaM34G276Vu8mI-akDTULzIlyU5dllQz17-s0HYZjDBiJZ2UecmeW-GlylnytnRz40XU ',
						'Accept': 'application/vnd.api+json',
						'Content-Type': 'application/vnd.api+json',
						'Access-Control-Allow-Headers': 'Authorization'
					},
					success: onSuccess,
					error: onError
			})
		}

		function onError(){
			$('#productsMain').html('i failed.');
		}
		

		function onSuccess(jsonReturn) {
			
		for(var e=0; e<jsonReturn.links.length; e++) {
		var linksData = jsonReturn.links[e].links;
		var first = linksData.first;
		var last = linksData.last;
		var self = linksData.self;
			
		}

		for(var i=0; i<jsonReturn.data.length; i++) {
			
			var product_dataintell = jsonReturn.data[i].attributes;
			var product_id = product_dataintell.id;
			var product_name = product_dataintell.name.no;
			var product_slug = product_dataintell.slug.no;
			var product_description =  product_dataintell.description.no; 
			var product_meta_title = product_dataintell.meta_title; 
			var product_meta_keywords = product_dataintell.meta_keywords;  
			var product_description2 = product_dataintell.meta_description; 
			var product_viewd_count = product_dataintell.viewd_count;
			var product_price = product_dataintell.price; 
			var product_cost = product_dataintell.cost;
			var product_quantity = product_dataintell.quantity; 
			var product_sku = product_dataintell.sku; 
			var product_status = product_dataintell.status; 
			var product_weight = product_dataintell.weight; 
			var product_location = product_dataintell.location;
			var product_country_of_origin = product_dataintell.country_of_origin; 
			var product_ean = product_dataintell.ean; 
			var product_ordered_count = product_dataintell.ordered_count; 
			var product_manufacturer_sku = product_dataintell.manufacturer_sku; 
			var product_created_at = product_dataintell.created_at;  
			var product_updated_at =  product_dataintell.updated_at; 
			var product_button_type = product_dataintell.button_type;
			$overlay = $("<section class='product-card'><tr><p>"+product_slug+"</p></tr><tr><p>"+product_name+"</p></tr><tr><p>"+product_price+"</p></tr><tr><p>"+product_description+"</p></tr><tr><p><button name='btn_type' id='btn_type' class='btn_type'>"+product_button_type+"</p></tr></section>");
			$overlay.clone().appendTo(".productsMain");
		}
}

