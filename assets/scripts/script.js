$(document).ready(function() {
	let backgrounds = [
		'bg1.jpg',
		'bg2.jpg',
		'bg3.gif'
	];
   $(".owl-carousel").owlCarousel({
      items: 1,
      autoHeight: true
   });
	$('#particles-js').css({
		'background-image':'url(assets/images/' + backgrounds[Math.floor(Math.random() *(3-0) + 0)] + ')'
 	})		
		$('.nav-toggler').click(function() {
       if (modal.hasClass('-active'))    {
            showHideModal();
         }
		$('.mobile-nav').toggleClass('-open');
		$('.block1').toggleClass('-invisible');
		$('.block2').toggleClass('-turn');
		$('.block3').toggleClass('-invisible');
	})
		setTimeout(function(){
			$('.section-main h1').addClass('-animated');
			$('.section-main h2').addClass('-animated');
		}, 1000);

let modalToggler = $('.js-modal-toggler'),
      modal = $('.modal'),
      mobileNav = $('.mobile-nav'),
      modalElems = [
         '.js-icon-call',
         '.js-icon-mail',
         '.js-icon-vk',
         '.js-icon-git',
         '.modal-map',
         '.modal-toggler'
      ];

   modalToggler.click(function ($event) {
      if (mobileNav.hasClass('-open')) {
         mobileNav.removeClass('-open');
      }
      event.preventDefault();
      showHideModal();
   })
   function showHideModal(){
      modal.toggleClass("-active");
      for (let i = 0; i < modalElems.length; i++){
         let delay =  i * 400;   
         setTimeout(function(){
            $(modalElems[i]).toggleClass('-active');
         }, 400 + delay)
      }
   }
});