

(function ($) {
    "use strict";

    //--------------------------------------------------
    // Preloader
    //--------------------------------------------------
    $(window).on('load', function () {
      $('bookings').css('cursor', 'none');

        $('.preloader').fadeOut('slow');
        RevealLoad();
        startAnim();
        $('.preloader').removeClass()
        function handleSubmit(event) {
          event.preventDefault();

          const data = new FormData(event.target);

          const name = data.get('name');
          const date = data.get('datetime');

          console.log({ name,date });

          $.post("/bookings",
              {
                 name,
                 date
               }
              ,
        function(data, status){
          console.log("Data: " + data + "\nStatus: " + status);
        });

        }
        //
        // const form = document.getElementById('scheduleform');
        // form.addEventListener('submit', handleSubmit);

      })


    //--------------------------------------------------
    // Animation Start
    //--------------------------------------------------
    function startAnim() {
        TweenMax.from('.logo', 1, {
            y: '100',
            autoAlpha: 0,
            delay: '.3',
            ease: Power4.easeInOut,
        })
        TweenMax.from('.toggle-btn', 1, {
            y: '100',
            delay: '.3',
            autoAlpha: 0,
            ease: Power4.easeInOut,
        })
        TweenMax.from('.bg-right', 1, {
            x: 100,
            ease: Power4.easeInOut,
            delay: '.3',
        })
        TweenMax.from('.bg-about', 1, {
            x: 100,
            ease: Power4.easeInOut,
            delay: '.3',
        })

        TweenMax.from('.scr', 1, {
            y: '100',
            ease: Power4.easeInOut,
            autoAlpha: 0,
        })

        TweenMax.from('.scrolls', 1, {
            y: '100',
            delay: 1,
            ease: Power4.easeInOut,
            autoAlpha: 0,
        })


        TweenMax.to('.menu', 0, {
            autoAlpha: 0,
        })


    }


    //--------------------------------------------------
    // Parralax
    //--------------------------------------------------
    var headermove = $('#headmove').get(0);
    var parallaxInstance = new Parallax(headermove, {
        relativeInput: true,
        scalarX: 14,
        hoverOnly: false,
    });


    //--------------------------------------------------
    // Web Load
    //--------------------------------------------------
    function RevealLoad() {
        var loadTL = new TimelineMax();
        var block1 = $('.block-1');
        var block2 = $('.block-2');
        var logo = $('.logo-load');

        loadTL
            .to(block1, 0.5, {
                height: '0',
                delay: '0'
            })
            .to(block2, 0.5, {
                height: '0',
            })
            .to(logo, 0, {
                autoAlpha: 0,
                delay: '-0.4',
            })

        loadTL.play();
    }

    function HideLoad() {
        var loadTL = new TimelineMax();
        var block1 = $('.block-1');
        var block2 = $('.block-2');
        var logo = $('.logo-load');

        loadTL
            .to(block1, 0.5, {
                height: '100%',
                delay: '0'
            })
            .to(block2, 0.5, {
                height: '100%',
            })
            .to(logo, 0, {
                autoAlpha: 1,
                delay: '-0.5'
            })

        loadTL.play();
    }

    $('.load-spiral').on('click', function (e) {
        e.preventDefault();
        setTimeout(function (url) {
            window.location = url
        }, 1000, this.href);
        HideLoad();
    });


    //--------------------------------------------------
    // Animation on navbar scrolling background
    //--------------------------------------------------
    var wind = $(window);

    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop();

        if (bodyScroll > 300) {

            TweenMax.to('.scr', .125, {
                autoAlpha: 0,
                y: '100',

            })

            TweenMax.to('.scrolls', .125, {
                autoAlpha: 0,
                y: '100',

            })


        } else {
            TweenMax.to('.scr', .25, {
                autoAlpha: 1,
                y: '00',

            })

            TweenMax.to('.scrolls', .125, {
                autoAlpha: 1,
                y: '0',

            })

        }
    });


    $('.img-folio').on('mouseenter', function () {
        TweenMax.to(this, 0.2, {
            y: '-30',
        })
    });

    $('.img-folio').on('mouseleave', function () {
        TweenMax.to(this, 0.2, {
            y: '1',
        })
    });


    luxy.init({
        wrapper: '#spiral',
        wrapperSpeed: '0.07',
    });

    //--------------------------------------------------
    // Cursor
    //--------------------------------------------------

    var isMobile = false;
    if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('html').addClass('touch');
        isMobile = true;
    } else {
        $('html').addClass('no-touch');
        isMobile = false;
    }

    var isMacLike = /(Mac)/i.test(navigator.platform);

    var cursor = {
        delay: 8,
        _x: 0,
        _y: 0,
        endX: (window.innerWidth / 2),
        endY: (window.innerHeight / 2),
        cursorVisible: true,
        cursorEnlarged: false,
        $cursor: document.querySelector('.cursor'),
        $cursor1: document.querySelector('.cursor1'),

        init: function () {
            $('body').css('cursor', 'none');

            // Set up element sizes
            this.cursorSize = this.$cursor.offsetWidth;
            this.cursor1Size = this.$cursor1.offsetWidth;

            this.setupEventListeners();
            this.animateDotOutline();
            this.cursorDrag();
            this.cursorExplore();
            this.cursorZoom();
            this.cursorNext();
            this.cursorPrev();
        },

        setupEventListeners: function () {
            var self = this;

            // Anchor hovering
            Array.prototype.slice.call(document.querySelectorAll('  .zoom-cursor, .hover-target')).forEach(function (el) {
                el.addEventListener('mouseover', function () {
                    self.cursorEnlarged = true;
                    self.toggleCursorSize();
                });
                el.addEventListener('mouseout', function () {
                    self.cursorEnlarged = false;
                    self.toggleCursorSize();
                });
            });

            document.addEventListener('mousemove', function (e) {
                // Show the cursor
                self.cursorVisible = true;
                self.toggleCursorVisibility();

                // Position the dot
                self.endX = e.clientX;
                self.endY = e.clientY;
                self.$cursor.style.top = self.endY + 'px';
                self.$cursor.style.left = self.endX + 'px';
            });

            // Hide/show cursor
            document.addEventListener('mouseenter', function (e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$cursor.style.opacity = 1;
                self.$cursor1.style.opacity = 1;
            });

            document.addEventListener('mouseleave', function (e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$cursor.style.opacity = 0;
                self.$cursor1.style.opacity = 0;
            });
        },

        animateDotOutline: function () {
            var self = this;

            self._x += (self.endX - self._x) / self.delay;
            self._y += (self.endY - self._y) / self.delay;
            self.$cursor1.style.top = self._y + 'px';
            self.$cursor1.style.left = self._x + 'px';

            requestAnimationFrame(this.animateDotOutline.bind(self));
        },

        toggleCursorSize: function () {
            var self = this;

            if (self.cursorEnlarged) {
                self.$cursor1.classList.add('expand');
            } else {
                self.$cursor1.classList.remove('expand');
            }
        },

        toggleCursorVisibility: function () {
            var self = this;

            if (self.cursorVisible) {
                self.$cursor.style.opacity = 1;
                self.$cursor1.style.opacity = 1;
            } else {
                self.$cursor.style.opacity = 0;
                self.$cursor1.style.opacity = 0;
            }
        },

        cursorDrag: function () {
            var self = this;
            $('.cursorDrag').on('mouseenter', function () {
                self.$cursor1.classList.add('drag', 'expand');
            });
            $('.cursorDrag').on('mouseleave', function () {
                self.$cursor1.classList.remove('drag', 'expand');
            });
        },

        cursorExplore: function () {
            var self = this;
            $('.cursorExplore').on('mouseenter', function () {
                self.$cursor1.classList.add('explore');
            });
            $('.cursorExplore').on('mouseleave', function () {
                self.$cursor1.classList.remove('explore');
            });
        },

        cursorZoom: function () {
            var self = this;
            $('.cursorZoom').on('mouseenter', function () {
                self.$cursor1.classList.add('zoom');
            });
            $('.cursorZoom').on('mouseleave', function () {
                self.$cursor1.classList.remove('zoom');
            });
        },

        cursorNext: function () {
            var self = this;
            $('.cursorNext').on('mouseenter', function () {
                self.$cursor1.classList.add('next');
            });
            $('.cursorNext').on('mouseleave', function () {
                self.$cursor1.classList.remove('next');
            });
        },

        cursorPrev: function () {
            var self = this;
            $('.cursorPrev').on('mouseenter', function () {
                self.$cursor1.classList.add('prev');
            });
            $('.cursorPrev').on('mouseleave', function () {
                self.$cursor1.classList.remove('prev');
            });
        }
    }

    if (!isMobile) {
        cursor.init(); //Init custom cursor
    }




    //--------------------------------------------------
    // Work detail slider
    //--------------------------------------------------
    workSlider();

    function workSlider() {
        var workSlide = $('.work-slider .owl-carousel');
        workSlide.owlCarousel({
            loop: true,
            margin: 30,
            mouseDrag: false,
            autoplay: false,
            center: false,
            dots: false,
            dragEndSpeed: 700,
            smartSpeed: 2000,
            responsiveClass: true,
            autoplayHoverPause: true,
            autoplayTimeout: 9000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                600: {
                    items: 1,
                    margin: 0,
                },
                1000: {
                    items: 1,
                    margin: 0,
                }
            }
        });

        $('.right-over-next').on("click", function () {
            workSlide.trigger('next.owl.carousel');
        })
        $('.right-over-prev').on("click", function () {
            workSlide.trigger('prev.owl.carousel');
        })
    }

    //--------------------------------------------------
    // Toggle Menu
    //--------------------------------------------------
    var t1 = new TimelineMax({
        paused: true
    });
    t1.to(".one", 0.2, {
        y: 9,
        autoAlpha: 0,
        ease: Expo.easeInOut
    });
    t1.to(".two", 0.2, {
        ease: Expo.easeInOut,
        delay: -1
    });
    t1.to(".tre", 0.2, {
        y: -9,
        autoAlpha: 0,
        ease: Expo.easeInOut,
        delay: -1
    });
    t1.to(".over-all", .25, {
        autoAlpha: 1,
        ease: Expo.easeOut,
    })
    t1.to(".bg-nav", .25, {
        autoAlpha: 1,
        ease: Power4.easeOut,
        delay: -1
    })


    t1.to(".menu", .25, {
        autoAlpha: 1,
        ease: Expo.easeOut,
        delay: -1
    })

    t1.staggerFrom(".menu ul li", 0.75, {
        y: 50,
        opacity: 0,
        ease: Power4.easeInOut,
    }, '0.1', '-0.01');


    t1.reverse();

    $('.toggle-btn').on("click", function () {
        t1.reversed(!t1.reversed()); //toggles the orientation
    })


    //--------------------------------------------------
    // Magnetic
    //--------------------------------------------------

    $(document).on('mousemove', function (e) {
        $('.magnetic').each(function () {
            if (!isMobile) {
                magnetic(this, e); //Init effect magnetic
            }
        });
    });

    function magnetic(el, e) {
        var mX = e.pageX,
            mY = e.pageY;
        const obj = $(el);

        const customDist = 20 * obj.data('dist') || 80,
            centerX = obj.offset().left + obj.width() / 2,
            centerY = obj.offset().top + obj.height() / 2;

        var deltaX = Math.floor((centerX - mX)) * -.4,
            deltaY = Math.floor((centerY - mY)) * -.4;

        var distance = calcDistance(obj, mX, mY);

        if (distance < customDist) {
            TweenMax.to(obj, .4, {
                y: deltaY,
                x: deltaX
            });
        } else {
            TweenMax.to(obj, .4, {
                y: 0,
                x: 0
            });
        }
    }

    function calcDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
    }


    //--------------------------------------------------
    // POPPUP
    //--------------------------------------------------

    $(document).ready(function() {




		var id = '#pcont';

		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();

		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});

		//transition effect
		$('#mask').fadeIn(500);
		$('#mask').fadeTo("slow",0.9);

		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();

		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);

		//transition effect
		$(id).fadeIn(2000);

	//if close button is clicked
	$('.pcontent .pclose').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();

		$('#mask').fadeOut();
		$('.pcontainer').fadeOut();
	});

	//if mask is clicked
	$('#mask').click(function () {
		$(this).fadeOut();
		$('.pcontainer').fadeOut();
	});

//
// -------------------
// DATETIME datepicker
// --------------------



});



    //--------------------------------------------------
    // Zoom Image
    //--------------------------------------------------

    mediumZoom(document.querySelectorAll('.cover'), {
        background: '#000',
    })

    var workSlide = new Swiper('.swiper-container', {

        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },
        loop: false,
        centeredSlides: false,
        speed: 900,
        spaceBetween: 0,
        mousewheel: true,

    });

    workSlide.on('slideChange', function () {
        TweenMax.to('.text-1', 0.3, {
            y: '80',

        })
        TweenMax.to('.text-2', 0.3, {
            y: '80',

        })



    });

    workSlide.on('slideChangeTransitionEnd', function () {
        TweenMax.to('.text-1', 0.3, {
            y: '0',

        })
        TweenMax.to('.text-2', 0.3, {
            y: '0',

        })

    });

    var toggler = $('.menu__toggler');
    var menu = $('.menus');
    toggler.on("click", function () {
        toggler.toggleClass('activez');
        menu.toggleClass('activez');
    });

    TweenMax.from('.reviewbg-right', 1, {
        x: 100,
        ease: Power4.easeInOut,
        delay: '.3',
    })
    var reviewmove = $('#reviewmove').get(0);
     if (window.location.pathname.includes("booking")) {
       var parallaxInstance = new Parallax(reviewmove, {
           relativeInput: true,
           scalarX: 14,
           hoverOnly: false,
       });
     }



//
// PACKAGE BUILDER
// -------------------------------

    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    $(".next").click(function(){
    	if(animating) return false;
    	animating = true;

      // console.log("Click ran");

      next_fs = $(this).parent().next();

      // console.log(this.id);
      if (this.id == "evtn") {
        let noButton = $('input[name=toggle]:checked', '#psbook').val();
        // console.log(noButton);
        if (noButton == "no") {
          next_fs = $(this).parent().next().next().next();
          $("#eventloc").attr('id', 'loc');
          $("#eventlocationfs").attr('id', 'locationfs');

        } else {
          // $(this).parent().next().next().next().next().attr('id', 'eventloc');
          $("#loc").attr('id', 'eventloc');
          $("#locationfs").attr('id', 'eventlocationfs');
        }
      }

      if (this.id == "event") {
        next_fs = $(this).parent().next().next();
         if ($(".event-log").text() == "") {
           animating = false;
           $(".errorTwo").text("Please choose a date & time.");
           // console.log("AIDS");
           return false;

         }
      }

      if (this.id == "photoshootEdit") {
        if ($(".event-logb").text() == "") {
          animating = false;
          $(".errorThree").text("Please choose a date & time.");
          // console.log("AIDS");
          return false;

        }
      }

      if (this.id == "personald") {

        const emailValue = $('#emailf').val();

        if (emailValue == "" || ! validateEmail(emailValue) ) {


            // console.log('Bad Email Addi');
            $(".error").text("Please enter valid email.");
                    // $(".bookedh").text("You're almost there... please enter a valid email address ");
                    // $(".bookedh").css("color", "red");
                    // $("#bookedprev").attr('id', 'emailret');
                    // $("#personald").attr('id', 'personalde');
                    // $("#emailret").attr("value", "Back to Email");
            animating = false;
            return false;

        }
      }

      if (this.id == "personalde") {

          next_fs = $(this).parent().next().next().next().next().next().next().next().next();

      }

      if (this.id == "billing") {
        next_fs = $(this).parent().next().next();
      }




      if (this.id == "locnext") {
        // console.log("1");
        if ($(this).parent().attr('id') == "eventlocationfs"){
          next_fs = $(this).parent().next().next();
          // console.log("2");
        }
      }



    	current_fs = $(this).parent();


    	//activate next step on progressbar using the index of next_fs
      if ($(this).parent().attr('id') == "progressMove") {
         $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
      } else if ($(this).parent().attr('id') == "progressMoveTwo") {
        $("#progressbar li").eq(2).addClass("active");
      }

    	//show the next fieldset
    	next_fs.show();
    	//hide the current fieldset with style
    	current_fs.animate({opacity: 0}, {
    		step: function(now, mx) {
    			//as the opacity of current_fs reduces to 0 - stored in "now"
    			//1. scale current_fs down to 80%
    			scale = 1 - (1 - now) * 0.2;
    			//2. bring next_fs from the right(50%)
    			left = (now * 50)+"%";
    			//3. increase opacity of next_fs to 1 as it moves in
    			opacity = 1 - now;
    			current_fs.css({
            'transform': 'scale('+scale+')',
            'position': 'absolute'
          });
    			next_fs.css({'left': left, 'opacity': opacity});
    		},
    		duration: 800,
    		complete: function(){
    			current_fs.hide();
    			animating = false;
    		},
    		//this comes from the custom easing plugin
    		easing: 'easeInOutBack'
    	});
    });

    $(".previous").click(function(){
    	if(animating) return false;
    	animating = true;

    	current_fs = $(this).parent();
    	previous_fs = $(this).parent().prev();

      if (this.id == "noevent") {
        previous_fs = $(this).parent().prev().prev().prev();
      }

      if (this.id == "ebilling") {
        previous_fs = $(this).parent().prev().prev();
      }




      if (this.id == "eventloc") {
        previous_fs = $(this).parent().prev().prev();

      }

      if (this.id == "bookedprev") {
        if ($(this).parent().prev().prev().prev().attr('id') == 'locationfs'){
          previous_fs = $(this).parent().prev().prev();
        }
      }

      if (this.id == "emailret") {
        previous_fs = $(this).parent().prev().prev().prev().prev().prev().prev().prev().prev();

      }



    	//de-activate current step on progressbar
      if ($(this).parent().attr('id') == "progressMove") {
         $("#progressbar li").eq(1).removeClass("active");
      } else if ($(this).parent().attr('id') == "progressMoveTwo") {
        $("#progressbar li").eq(2).removeClass("active");
      }
    	//show the previous fieldset
    	previous_fs.show();
    	//hide the current fieldset with style
    	current_fs.animate({opacity: 0}, {
    		step: function(now, mx) {
    			//as the opacity of current_fs reduces to 0 - stored in "now"
    			//1. scale previous_fs from 80% to 100%
    			scale = 0.8 + (1 - now) * 0.2;
    			//2. take current_fs to the right(50%) - from 0%
    			left = ((1-now) * 50)+"%";
    			//3. increase opacity of previous_fs to 1 as it moves in
    			opacity = 1 - now;
    			current_fs.css({'left': left});
    			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
    		},
    		duration: 800,
    		complete: function(){
    			current_fs.hide();
    			animating = false;
    		},
    		//this comes from the custom easing plugin
    		easing: 'easeInOutBack'
    	});
    });

    // $(".submit").click(function(){
    // 	 return false;
    // })



    $(".inb").click(function() {
  $("inb").addClass('inba');
});

$('#submitForm').on('click', (e) => {
  event.preventDefault();
  event.stopPropagation();
  // console.log(event);
  const values = getFormDetails();
  // if (! validateEmail(values.email)) {
  //   console.log('Bad Email Addi');
  //           $(".bookedh").text("You're almost there... please enter a valid email address ");
  //           $(".bookedh").css("color", "red");
  //           $("#bookedprev").attr('id', 'emailret');
  //           $("#personald").attr('id', 'personalde');
  //           $("#emailret").attr("value", "Back to Email");
  //   return false;
  // }
  values.photoshootLengh = (values.shoothrs*200 + values.shootmins*50) || 0;
  values.retouchPrice = photoshootRetouchType[values.digiret];
  values.photosPrice = values.digiph*10;
  values.peoplePrice = values.ppl*20;
  values.photoshootTotal = values.photoshootLengh + values.retouchPrice + values.photosPrice + values.peoplePrice + 85;
  values.eventLength = (values.eventhrs*100 + values.eventmins*25) || 0;
  values.eventTotal = values.eventLength + 185;
  // Post req
  $.post("/api/schedulerequest", values, function(data,status){
    console.log(data, status);
    // Clear vals &  reset form
    // $('#psbook')[0].reset();
    // $('.event-logb').contents().remove();
    // $('.event-log').contents().remove();
    location.reload();
  });
});

$('#submitContact').on('click', (e) => {
  event.preventDefault();
  event.stopPropagation();
  // console.log(event);
  const values = getContactDetails();
  if (! validateEmail(values.email) || values.email == "") {
    // console.log('Bad Email Addi');
    $(".error").text("Please enter valid email.");
    return false;
  }

  if ($('#message').text() == "") {
      $(".error").text("Please enter message.");
    return false;
  }

  // Post req
  $.post("/api/schedulerequest", values, function(data,status){
    console.log(data, status);

    // Clear vals &  reset form
    // $('#psbook')[0].reset();
    // $('.event-logb').contents().remove();
    // $('.event-log').contents().remove();
    location.reload();
  });
});

$("#locnext").click(function() {
  const values = getFormDetails();
  if (values.photoDateTime != undefined) {
    const photoshootLengh = (values.shoothrs*200 + values.shootmins*50) || 0;
    const retouchPrice = photoshootRetouchType[values.digiret];
    const photosPrice = values.digiph*10;
    const peoplePrice = values.ppl*20;
    const photoshootTotal = photoshootLengh + retouchPrice + photosPrice + peoplePrice + 85;
    // console.log(photoshootLengh);
    // console.log(retouchPrice);
    // console.log(photosPrice);
    // console.log(peoplePrice);
    // console.log(photoshootTotal);
    $("#photoshootLenghhtml").text('$' + photoshootLengh + '.00');
    $("#retouchPricehtml").text('$' + retouchPrice + '.00');
    $("#photosPricehtml").text('$' + photosPrice + '.00');
    $("#peoplePricehtml").text('$' + peoplePrice + '.00');
    $("#photoshootTotalhtml").text('$' + photoshootTotal + '.00');
  }
   if (values.eventDateTime != undefined) {
    const eventLength = (values.eventhrs*100 + values.eventmins*25) || 0;
    const eventTotal = eventLength + 185;
    $("#eventLengthhtml").text('$' + eventLength + '.00');
    $("#eventTotalhtml").text('$' + eventTotal + '.00');
  }
});

$("#photoshootEdit").click(function() {
  $('.event-log').contents().remove();
});

$("#event").click(function() {
  $('.event-logb').contents().remove();
});

$('#homem').on("click", function () {
  window.location.href = "index.html";
})

$('#documentation').on("click", function () {
  window.location.href = "documentation.html";
})



$('#workm').on("click", function () {
  window.location.href = "portfolio.html";
})

$('#bookingsm').on("click", function () {
  window.location.href = "bookings.html";
})

$('#helpm').on("click", function () {
  window.location.href = "help.html";
})

$('#copye').on("click", function () {
  const str = "dwithersphotography@gmail.com"
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
})

$('#copyp').on("click", function () {
  const str = "9706409527"
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
})



})(jQuery);

function validateEmail($email) {
 var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
 return emailReg.test( $email );
}



const photoshootRetouchType = {
  None: 0,
  Basic: 25,
  Advanced: 50,
}

function getFormDetails() {
  // get all the inputs into an array.
  var $inputs = $('#psbook :input');

  // not sure if you wanted this, but I thought I'd add it.
  // get an associative array of just the values.
  var values = {};
  $inputs.each(function() {
      values[this.name] = $(this).val();
  });
  let $selectFields = $('select');
  // console.log($selectFields);

  for (var i = 0; i < $selectFields.length; i++) {
    let field = $selectFields[i]
    values[field.id] = field.value;
  }

  const $eventLog = document.querySelector('.event-log');
  const $eventLogb = document.querySelector('.event-logb');

  // console.log($eventLog);
  // console.log($eventLogb);
 if ($eventLog.innerHTML != '') {
   values.eventDateTime = $eventLog.innerHTML
 } else if ($eventLogb != '') {
   values.photoDateTime = $eventLogb.innerHTML
 } else {
   values.DateTime = "N/A"
 }

  // console.log(values);
  return values;
}

function getContactDetails() {
  // get all the inputs into an array.
  var $inputs = $('#contact :input');

  // not sure if you wanted this, but I thought I'd add it.
  // get an associative array of just the values.
  var values = {};
  $inputs.each(function() {
      values[this.name] = $(this).val();
  });

  //
  // console.log(values);
  return values;
}




if (window.location.pathname.includes("booking")) {
    let simplepickerb = new SimplePicker({
      zIndex: 10
    });



    const $buttonb = document.querySelector('#pickerb');
    const $eventLogb = document.querySelector('.event-logb');
    $buttonb.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      simplepickerb.open();
    });

    // $eventLog.innerHTML += '\n\n';
    simplepickerb.on('submit', (date, readableDate) => {
      $eventLogb.innerHTML = readableDate;
      // console.log('simplepickerb submit');
    });


    let simplepicker = new SimplePicker({
      zIndex: 10
    });



    const $button = document.querySelector('#pickera');
    const $eventLog = document.querySelector('.event-log');
    $button.addEventListener('click', (e) => {
      // e.stopPropagation();
      e.preventDefault();
      simplepicker.open();
    });

    // $eventLog.innerHTML += '\n\n';
    simplepicker.on('submit', (date, readableDate) => {
      $eventLog.innerHTML = readableDate + '\n';
      // console.log('simplepicker submit');
    });
}
