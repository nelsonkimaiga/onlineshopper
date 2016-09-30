$(document).ready(function(){
	$.getJSON('feed.json')
	.done(function(data){
		// Define wine bottle Variables.
		var allBooks = [];
		var x = 0;
		$.each(data.books, function(key, value){
			x++;
			allBooks.push(
				"<div class='col-sm-12 col-md-8 col-lg-4 products'>" +
				"<h3>"+ value.title +"</h3>"
				+"<img class='bottles' src='"+ data.books[key].imageUrl +"'>"
				+"<p id='"+ x +"'>$"+ value.price + ".00</p>"
				+"<input type='button' class='"+ x +" btn btn-success' value='Add to Cart'>"
				+ "</div>"
				);
		});

	 	var emptyCart = document.createElement("input");
	 	emptyCart.setAttribute("class", "btn btn-danger empty");
	 	emptyCart.setAttribute("type", "button");
	 	emptyCart.setAttribute("value", "Empty Cart");
	 	var empty = document.getElementById("empty");
	 	empty.appendChild(emptyCart);
		$("#books").html(allBooks);

		// Cart functionality
		$('#empty').hide();
		var myCart = 0;
		var price = 0;
		var cartContent = document.getElementById("cartContent");
		var cartValue = document.getElementById("cartValue");

		var priceArr = [];
		cartContent.innerHTML = myCart;
		cartValue.innerHTML = "$ " + price + ".00";

		$(".0").click(function(){
			var item = document.getElementById(0).innerHTML;
			priceArr.push(parseFloat(item.substring(1,item.length)));
			price = priceArr.reduce(function(prev, current){return prev + current })
			$('#empty').fadeIn(300);
			myCart = priceArr.length;
			cartContent.innerHTML = myCart;
			cartValue.innerHTML = "$ " + price + ".00";
		});
		$(".1").click(function(){
			var item = document.getElementById(1).innerHTML;
			priceArr.push(parseFloat(item.substring(1,item.length)));
			price = priceArr.reduce(function(prev, current){return prev + current })
			$('#empty').fadeIn(300);
			myCart = priceArr.length;
			cartContent.innerHTML = myCart;
			cartValue.innerHTML = "$ " + price + ".00";
		});
		$(".2").click(function(){
			var item = document.getElementById(2).innerHTML;
			priceArr.push(parseFloat(item.substring(1,item.length)));
			price = priceArr.reduce(function(prev, current){return prev + current })
			$('#empty').fadeIn(300);
			myCart = priceArr.length;
			cartContent.innerHTML = myCart;
			cartValue.innerHTML = "$ " + price + ".00";
		});
		$(".3").click(function(){
			var item = document.getElementById(3).innerHTML;
			priceArr.push(parseFloat(item.substring(1,item.length)));
			price = priceArr.reduce(function(prev, current){return prev + current })
			$('#empty').fadeIn(300);
			myCart = priceArr.length;
			cartContent.innerHTML = myCart;
			cartValue.innerHTML = "$ " + price + ".00";
		});

		// empty cart
		$("#empty").click(function(){
			myCart = 0;
			price = 0;
			priceArr = [];
			cartContent.innerHTML = myCart;
			cartValue.innerHTML = "$ " + price + ".00";
			$("#empty").fadeOut(400);
		}) 
	})
	.fail(function(error){
		console.log("error" + error)
	})
	.always(function(){
		console.log("finished")
	});
})