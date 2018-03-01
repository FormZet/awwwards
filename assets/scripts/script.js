$(document).ready(function() {
	let backgrounds = [
		'bg1.jpg',
		'bg2.jpg',
		'bg3.gif'
	];
	$('#particles-js').css({
		'background-image':'url(assets/images/' + backgrounds[Math.floor(Math.random() *(3-0) + 0)] + ')'
 	})
		$('.nav-toggler').click(function(){
		$('.mobile-nav').toggleClass('-is-open');
		$('.block1').toggleClass('-invisible');
		$('.block2').toggleClass('-turn');
		$('.block3').toggleClass('-invisible');
	})
		setTimeout(function(){
			$('.section-main h1').addClass('-animated');
			$('.section-main h2').addClass('-animated');
		}, 1000);
});