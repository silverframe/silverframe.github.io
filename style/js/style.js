    $(function(){
       $("#header-main").typed({
         strings: ["hello there", "@stefanie^500seah"],
         typeSpeed: 80,
         startDelay: 1000,

       });
    });

    var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
       triggerElement: "#about-me", // point of execution
       duration: ($(window).height() * 0.5) , // pin element for the window height - 1
       triggerHook: 0, // don't trigger until #about-me hits the top of the viewport
       reverse: true // allows the effect to trigger when scrolled in the reverse direction
      });
    var scene2 = new ScrollMagic.Scene({
       triggerElement: "#portfolio", // point of execution
       duration: ($(window).height() * 3), // pin element for the window height - 1
       triggerHook: 0, // don't trigger until #about-me hits the top of the viewport
       reverse: true // allows the effect to trigger when scrolled in the reverse direction
      });

    function addTheScenes() {
      scene1.setPin("#color-aboutme") // the element we want to pin
      .addTo(controller);
      scene2.setPin("#color-portfolio") // the element we want to pin
      .addTo(controller);
    }

    addTheScenes();

    $(window).on('resize', function() {
      if ($(document).width() < 970 ) {
        scene1.removePin(true);
        scene2.removePin(true);
        controller.removeScene([scene1, scene2]);
      } else {
        addTheScenes();
      }
    });
