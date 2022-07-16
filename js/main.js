

define([
  'jquery',
  'owl',
  // 'methods'
], function($) {
  'use strict';
  console.log("infule")
  if ($('#bannerCarousel').length) {
    let bannerCarousel = $("#bannerCarousel").owlCarousel({
      margin:10,
      items: 1,
      // autoHeight:true,
      // autoplay: true,
      autoplayTimeout: 5000,
      loop:true,
      smartSpeed: 2000,
    })
  };
  if ($('#newsCarousel').length) {
    let newsCarousel = $("#newsCarousel").owlCarousel({
      margin:20,
      // items: 3,
      dots:false,
      nav:true,
      navText: [$('.newsleft'), $('.newsright')],
      // autoHeight:true,
      // autoplay: true,
      autoplayTimeout: 5000,
      loop:true,
      smartSpeed: 2000,
      responsive:{
        0:{
            items:1,
            // nav:true
        },
        992:{
          items:3,
          // nav:true
        },
      }
    })
  };
  // let gotoId = (id) =>{
  //   console.log(id)
  // };

});
// function gotoId(id){
//   console.log(id)
// }
let gotoId = (id) =>{
  // console.log($("#"+id).length)
  if($("#"+id).length === 1)
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#"+id).offset().top,
    }, 1000);
};
