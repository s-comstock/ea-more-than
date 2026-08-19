/*--------------------
Everyone Active More Than Custom JavaScript Compile
--------------------*/

/* Import functions */
slater_import('/project/20830/page/64021.js') // Import accordion.js
slater_import('/project/20830/page/63265.js') // Import bunny-background.js
slater_import('/project/20830/page/64072.js') // Import bunny-lightbox.js
slater_import('/project/20830/page/64073.js') // Import bunny-player.js
slater_import('/project/20830/page/63727.js') // Import horizontal-scroll.js
slater_import('/project/20830/page/64125.js') // Import media-setup.js
slater_import('/project/20830/page/63791.js') // Import navbar.js
slater_import('/project/20830/page/63753.js') // Import lenis-smooth-scroll.js
slater_import('/project/20830/page/45264.js') // Import splide-swiper.js
slater_import('/project/20830/page/64127.js') // Import sticky-steps.js

/* Initialize after Webflow finishes loading */
window.Webflow ||= [];
window.Webflow.push(() => {

  initBunnyPlayerBackground()
  initBunnyLightboxPlayer()
  initBunnyPlayer()
  initMediaSetup()
  initIntro()
  initAccordion()
  initHorizontalScroll()
  initNavbar()
  initSplideSwiper()
  initStickyStepsBasic()
  initSmoothScroll()

})
