$(document).ready(function() {

	$("#header").load("header.html");
	
	$("#footer").load("footer.html");

	var owl_carousel_home = $('.owl-carousel-home').owlCarousel({
		margin: 10,
		loop: true,
		autoplay: true,
		dots: false,
		responsive: {
			420: {
				items: 1
			},
			769: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	$('.owl-carousel-home-left').on('click', function (event) {
		event.preventDefault();

		owl_carousel_home.trigger('prev.owl.carousel');

	});

	$('.owl-carousel-home-right').on('click', function (event) {
		event.preventDefault();

		owl_carousel_home.trigger('next.owl.carousel');

	});

	var owl_carousel_services = $('.owl-carousel-services').owlCarousel({
		items: 3,
		margin: 40,
		loop: true,
		dots: false,
		autoWidth: true,
		responsive: {
			420: {
				items: 1
			},
			600: {
				items: 2
			},
			960: {
				items: 3
			}
		}
	});

	$('.owl-carousel-services-left').on('click', function (event) {
		event.preventDefault();

		owl_carousel_services.trigger('prev.owl.carousel');

	});

	$('.owl-carousel-services-right').on('click', function (event) {
		event.preventDefault();

		owl_carousel_services.trigger('next.owl.carousel');

	});

	$('.owl-carousel-economic-indicators').owlCarousel({
		items: 6,
		margin: 20,
		loop: true,
		autoplay: true,
		dots: false,
		autoWidth: true,
		responsive: {
			420: {
				items: 1
			},
			600: {
				items: 2
			},
			960: {
				items: 3
			}
		}
	});

	$('.owl-carousel-landing-feature').owlCarousel({
		items: 1,
		margin: 0,
		loop: true,
		dots: false,
		autoplay: true
	});

	$('.section_home_comments').on('click', '.content-image', function (event) {
		event.preventDefault();

		var item = $(this).data("item");

		$(".section_home_comments .content-image").removeClass('active');
		$(this).addClass('active');

		$(".section_home_comments .content-info").hide();
		$(".section_home_comments .content-info.item-"+item).fadeIn();

	});

	/*$(document).on('submit', '#form-contact', function (event) {
		event.preventDefault();

		$('#form-contact .btn-primary').addClass('disabled');

		$.ajax({
			cache: false,
			type: $(this).attr("method"),
			url: $(this).attr("action"),
			data: $(this).serialize(),
			success: function (data) {

				$('#form-contact .btn-primary').removeClass('disabled');

				if (data) {

					$('.alert').hide();
					$('.alert-success').fadeIn();

					$("#form-contact")[0].reset();

				} else {

					$('.alert').hide();
					$('.alert-danger').fadeIn();

				}

				setTimeout(function () { $('.alert').hide(); }, 5000);
			}
		});

	});*/

	$(document).on('submit', '#form-newsletter', function (event) {
        event.preventDefault();

        $('#form-newsletter .btn-primary').addClass('disabled');

        $.ajax({
            cache: false,
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
            success: function (data) {

                $('#form-newsletter .btn-primary').removeClass('disabled');

                if (data) {

                    $('.alert').hide();
                    $('.alert-success').fadeIn();

                    $("#form-newsletter")[0].reset();

                } else {

                    $('.alert').hide();
                    $('.alert-danger').fadeIn();

                }

                setTimeout(function () { $('.alert').hide(); }, 5000);
            }
        });

    });

	$("[data-dinaanim]").each(function () {

		var $this = $(this);

		$this.addClass("dinaAnim-invisible");

		if ($(window).width() > 767) {

			$this.appear(function () {

				var delay = ($this.data("dinadelay") ? $this.data("dinadelay") : 1);

				if (delay > 1) $this.css("animation-delay", delay + "ms");

				$this.addClass("dinaAnim-animated");
				$this.addClass('dinaAnim-' + $this.data("dinaanim"));

				setTimeout(function () {

					$this.addClass("dinaAnim-visible");

				}, delay);

			}, { accX: 0, accY: -150 });

		} else {

			$this.animate({ opacity: 1 }, 300, 'easeInOutQuad', function () { });
		}
	});

});