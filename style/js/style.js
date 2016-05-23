 $(function(){
       $("#header-main").typed({
         strings: ["@stefanie^500seah"],
         typeSpeed: 50,
         startDelay: 1000,

       });
   });

   var controller = new ScrollMagic.Controller();

  //  var scene1 = new ScrollMagic.Scene({
  //    triggerElement: "#about-me", // point of execution
  //    duration: $(window).height(), // pin element for the window height - 1
  //    triggerHook: 0, // don't trigger until #about-me hits the top of the viewport
  //    reverse: true // allows the effect to trigger when scrolled in the reverse direction
  //  })
  //  .setPin("#color-aboutme") // the element we want to pin
  //  .addTo(controller);

   var scene2 = new ScrollMagic.Scene({
     triggerElement: "#portfolio", // point of execution
     duration: ($(window).height() *3), // pin element for the window height - 1
     triggerHook: 0, // don't trigger until #about-me hits the top of the viewport
     reverse: true // allows the effect to trigger when scrolled in the reverse direction
   })
   .setPin("#color-portfolio") // the element we want to pin
   .addTo(controller);
