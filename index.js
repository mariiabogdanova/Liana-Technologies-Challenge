var a = 0;
$(window).scroll(function() {
  var oTop = $('#numbers').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
	$('#clients').animateNumber({ number: 3000, 'font-size': '50px' });
	$('#employees').animateNumber({ number: 180, 'font-size': '50px' });
	$('#users').animateNumber({ number: 10000, 'font-size': '50px' });
    a = 1;
  }
});









