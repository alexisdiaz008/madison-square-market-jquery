
var main = function(){
// when cart clicked anon function happens!
	$('.cart').on("click", function(){
		// $('.account .dropdown-menu, .help .dropdown-menu').hide();
		$('.dropdown-menu').not(".cart .dropdown-menu").hide(); //not says if we have something of this criteria, lets unselect that one, or NOT (THIS)
		$('.cart .dropdown-menu').toggle(); // 
		//commas indicate groupings, while spaces indicate css selector that are descendents of 
	});
	$('.account').on("click", function(){
		$('.cart .dropdown-menu, .help .dropdown-menu').hide();
		$('.account .dropdown-menu').toggle(); 
	});
	$('.help').on("click", function(){
		$('.account .dropdown-menu, .cart .dropdown-menu').hide();
		$('.help .dropdown-menu').toggle(); 
	}); 

};


$(document).ready(main);