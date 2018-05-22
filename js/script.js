var widthDocument = $(window).width();
var scroll = $(window).scrollTop();

$(document).ready(function() {
    var fullPage;
    function initFullPage() {
        fullPage = $('#fullpage').fullpage({
            anchors: ['page1', 'page2', 'page3'],
            onLeave: function (index, nextIndex) {
                if (nextIndex > 1) {
                    $('.button-wrapper__item--button-three').addClass('header-hide');
                } else {
                    $('.button-wrapper__item--button-three').removeClass('header-hide');
                }

                if (nextIndex > 2) {
                    $('header').addClass('header-hide');
                } else {
                    $('header').removeClass('header-hide');
                }
                $('body').removeClass('init');
            }
        });
        var widthDocument = $(window).width();
        var widthContainer = $('.container').width();
    }

    if (widthDocument < 992) {
        if (widthDocument <= 320) {
            if (scroll >= $(document).height() - 3.72 * $(window).height()) {
                $('.button-wrapper__item--button-three').addClass('header-hide');
            } else {
                $('.button-wrapper__item--button-three').removeClass('header-hide');
            }

            if (scroll >= $(document).height() - 2.13 * $(window).height()) {
                $('header').addClass('header-hide');
            } else {
                $('header').removeClass('header-hide');
            }
        }

        if (widthDocument > 320 && widthDocument <= 375) {
            if (scroll >= $(document).height() - 3.3 * $(window).height()) {
                $('.button-wrapper__item--button-three').addClass('header-hide');
            } else {
                $('.button-wrapper__item--button-three').removeClass('header-hide');
            }

            if (scroll >= $(document).height() - 1.82 * $(window).height()) {
                $('header').addClass('header-hide');
            } else {
                $('header').removeClass('header-hide');
            }
        }

        if (widthDocument > 375 && widthDocument <= 414) {
            if (scroll >= $(document).height() - 3.16 * $(window).height()) {
                $('.button-wrapper__item--button-three').addClass('header-hide');
            } else {
                $('.button-wrapper__item--button-three').removeClass('header-hide');
            }

            if (scroll >= $(document).height() - 1.85 * $(window).height()) {
                $('header').addClass('header-hide');
            } else {
                $('header').removeClass('header-hide');
            }
        }

        if (widthDocument > 414 && widthDocument < 992) {
            if (scroll >= $(document).height() - 1.63 * $(window).height()) {
                $('.button-wrapper__item--button-three').addClass('header-hide');
            } else {
                $('.button-wrapper__item--button-three').removeClass('header-hide');
            }

            if (scroll >= $(document).height() - 1.05 * $(window).height()) {
                $('header').addClass('header-hide');
            } else {
                $('header').removeClass('header-hide');
            }
        }
    }

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        // var x = ($(document).height() - $(document).scrollTop()) / $(window).height();
        // console.log(x);

        if (widthDocument < 992) {
            if (widthDocument <= 320) {    
                if (scroll >= $(document).height() - 3.72 * $(window).height()) {
                    $('.button-wrapper__item--button-three').addClass('header-hide');
                } else {
                    $('.button-wrapper__item--button-three').removeClass('header-hide');
                }
    
                if (scroll >= $(document).height() - 2.13 * $(window).height()) {
                    $('header').addClass('header-hide');
                } else {
                    $('header').removeClass('header-hide');
                }
            }

            if (widthDocument > 320 && widthDocument <= 375) {    
                if (scroll >= $(document).height() - 3.3 * $(window).height()) {
                    $('.button-wrapper__item--button-three').addClass('header-hide');
                } else {
                    $('.button-wrapper__item--button-three').removeClass('header-hide');
                }
    
                if (scroll >= $(document).height() - 1.92 * $(window).height()) {
                    $('header').addClass('header-hide');
                } else {
                    $('header').removeClass('header-hide');
                }
            }

            if (widthDocument > 375 && widthDocument <= 414) {    
                if (scroll >= $(document).height() - 3.16 * $(window).height()) {
                    $('.button-wrapper__item--button-three').addClass('header-hide');
                } else {
                    $('.button-wrapper__item--button-three').removeClass('header-hide');
                }
    
                if (scroll >= $(document).height() - 1.85 * $(window).height()) {
                    $('header').addClass('header-hide');
                } else {
                    $('header').removeClass('header-hide');
                }
            }

            if (widthDocument > 414 && widthDocument < 992) {    
                if (scroll >= $(document).height() - 1.63 * $(window).height()) {
                    $('.button-wrapper__item--button-three').addClass('header-hide');
                } else {
                    $('.button-wrapper__item--button-three').removeClass('header-hide');
                }
    
                if (scroll >= $(document).height() - 1.05 * $(window).height()) {
                    $('header').addClass('header-hide');
                } else {
                    $('header').removeClass('header-hide');
                }
            }
        }
    });

    $(window).on('resize', function () {
        var widthContainer = $('.container').width();
        if (widthDocument > 992) {
            initFullPage();
        } else {
            $.fn.fullpage.destroy('all');
            fullPage = undefined;
        }
    });
    if (widthDocument > 992 && !fullPage) {
        initFullPage();
    }

    $('#contactForm').submit(function(e) {
        e.preventDefault();
        var form = e.target;
        var data = {
            name: $(form.name).val(),
            email: $(form.email).val(),
            phone: $(form.phone).val(),
        };
        $.post('https://formspree.io/Shenin@tochkarosy.com', data)
            .done(function() {
                $('#exampleModal').modal('show');
                // console.log('email.sent');
            });
    });
});

$(document).on('click', '#moveTo', function(){
    if (widthDocument > 992) {
        $.fn.fullpage.moveTo('page3');
    } else {
        if (widthDocument <= 320) {
            $("html, body").animate({scrollTop: $(document).height() - 2.02 * $(window).height()});
        }
        if (widthDocument > 320 && widthDocument <= 375) {
            $("html, body").animate({ scrollTop: $(document).height()-1.94*$(window).height() });
        }
        if (widthDocument > 375 && widthDocument <= 414) {
            $("html, body").animate({ scrollTop: $(document).height()-1.77*$(window).height() });
        }
        if (widthDocument > 414 && widthDocument < 992) {
            $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
        }
    }
});

$(document).on('click', '#moveTo-three', function(){
    if (widthDocument > 992) {
        $.fn.fullpage.moveTo('page2');
    } else {
        if (widthDocument <= 320) {
            $("html, body").animate({scrollTop: $(document).height() - 3.63 * $(window).height()});
        }
        if (widthDocument > 320 && widthDocument <= 375) {
            $("html, body").animate({ scrollTop: $(document).height()-3.24*$(window).height() });
        }
        if (widthDocument > 375 && widthDocument <= 414) {
            $("html, body").animate({ scrollTop: $(document).height()-3.08*$(window).height() });
        }
        if (widthDocument > 414 && widthDocument < 992) {
            $("html, body").animate({ scrollTop: $(document).height()-1.59*$(window).height() });
        }
    }
});

var map;

DG.then(function () {
    map = DG.map('map', {
        center: [55.03103649555158,82.915824718277],
        zoom: 16
    });
    var myIcon = DG.divIcon({className: 'my-div-icon'});
    var marker = DG.marker([55.032423069669996,82.912767], {icon: myIcon}).addTo(map);
    marker.bindLabel('Ждём вас здесь', { static: true });
});
