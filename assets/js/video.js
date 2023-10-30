addBanner("../images/banner1.jpg", "../images/banner2.jpg");
	var numBanner = 4; 



	// Thư viện chạy carousel
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		items: 1.5,
		margin: 100,
		center: true,
		loop: true,
		smartSpeed: 450,
		autoplay: true,
		autoplayTimeout: 3500
	});