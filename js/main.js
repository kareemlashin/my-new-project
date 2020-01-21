$(document).ready(function () {
    $("#loading").fadeOut(1000, function () {
        $("html,body").css({ overflow: "auto" })
    })
    AOS.init();

    $(".chose .chosex a").click(function () {
        let dataChose = $(this).attr("data-filter");
        if (dataChose == "all") {
            $(".filter").slideDown(1000);
        } else {
            $('.filter').not("." + dataChose).slideUp(1000);
            $('.filter').filter("." + dataChose).slideDown(1000);
        }
    })

    $(".chose .chosex").click(function () {
        $(this).addClass("activeX");
        $(".chose .chosex").not(this).removeClass('activeX');
    })



    var typed = new Typed('.element', {
        strings: [" Freelancer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
    $(".navbar  .nav-link").click(function () {
        let myHref = $(this).attr("href");
        $(this).addClass("active")
        $(".navbar  .nav-link").not(this).removeClass("active");
        $("body,html").animate({ scrollTop: $(myHref).offset().top + 30 + 'px' }, 1000)
    })

    let myProg = $("#ABOUT").offset().top;
    let myCountUp = $("#countUp").offset().top;
    let myProgress = $("#progress").offset().top;

    $(window).scroll(function () {
        let myWind = $(window).scrollTop();

        if (myWind > myProg - 50) {
            $("nav").addClass("bg-offset")
        } else {
            $("nav").removeClass("bg-offset")

        }
        if (myWind > myCountUp) {
            $('#bar4').barfiller({

                // color of bar
                barColor: '#FFC576',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });


            $('#bar2').barfiller({

                // color of bar
                barColor: '#FFC576',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });


            $('#bar3').barfiller({

                // color of bar
                barColor: '#FFC576',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });


            $('#bar1').barfiller({

                // color of bar
                barColor: '#FFC576',

                // shows a tooltip
                tooltip: false,

                // duration in ms
                duration: 1000,

                // re-animate on resize
                animateOnResize: false,

                // custom symbol
                symbol: "%"

            });
            function inc1() {
                let num1 = $("#oneCount").text();
                if (num1 < 500) {
                    num1++;
                    clearInterval(inc1)
                }
                $("#oneCount").text(num1)


            }
            function inc2() {
                let num2 = $("#twoCount").text();
                if (num2 < 250) {
                    num2++;
                    clearInterval(inc2)
                }
                $("#twoCount").text(num2)


            }
            function inc3() {
                let num3 = $("#threeCount").text();
                if (num3 < 300) {
                    num3++;
                    clearInterval(inc3)
                }
                $("#threeCount").text(num3)


            }

            function inc4() {
                let num4 = $("#fourCount").text();
                if (num4 < 1000) {
                    num4++;
                    clearInterval(inc4)
                }
                $("#fourCount").text(num4)


            }
            setInterval(inc3, 100);
            setInterval(inc2, 100);
            setInterval(inc1, 70);
            setInterval(inc4, 30);

        }
    })

})
