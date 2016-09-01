$(document).ready(function(){
	var acm = [
		'American Cheese Monkeys',
		'Amazingly Correct Maps',
	  'Awkward Corrupt Manatees',
		'Alien Chocolate Marbles',
		'Association for Calculating Men',
		'All Cheese Museum',
		'Animals Closing Markets',
		'Actual Cool Manerisms',
		'Apparent Chapstick Messes',
		'And Cheese Mac',
		'Angelo Can’t Meme',
		'Annabelle Crayon Monument',
		'Asians Crazy for Mark',
		'Air Creates Magic',
		'Actual Code is a Myth',
		'Amazing Colorful Megaphones',
		'Angelos Creates Megaphones',
		'Act Create Move',
		'Alive Correct Me',
		'Angel’s Copper Memoriam',
		'Alive Chocolate Mannequins',
		'Amazing Coding Memes',
	];
	$('.cuuuuuuuuuuuuuuuuuuuuuuuuuhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh').text(acm[Math.floor(Math.random()*acm.length)]);
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
