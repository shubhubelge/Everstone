

define([
  'jquery',
  'owl',
  'methods'
], function($, eve) {
  'use strict';
  var $ = $;
  // var methods = require("./methods.js");
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
  if ($('#valuesCarousel').length) {
    let valuesCarousel = $("#valuesCarousel").owlCarousel({
      margin:20,
      items: 1,
      dots:false,
      nav:true,
      navText: [$('.newsleft'), $('.newsright')],
      // autoHeight:true,
      // autoplay: true,
      autoplayTimeout: 5000,
      loop:true,
      smartSpeed: 2000,
      // responsive:{
      //   0:{
      //       items:1,
      //       // nav:true
      //   },
      //   992:{
      //     items:3,
      //     // nav:true
      //   },
      // }
    })
  };
  
  if ($('#lineageCarousel').length) {
    let lineageCarousel = $("#lineageCarousel").owlCarousel({
      margin:20,
      // items: 1,
      
      nav:false,
      // navText: [$('.newsleft'), $('.newsright')],
      // autoHeight:true,
      // autoplay: true,
      autoplayTimeout: 5000,
      loop:true,
      smartSpeed: 2000,
      responsive:{
        0:{
            items:1,
            dots: true,
            // nav:true
        },
        992:{
          items:3,
          dots: false,

          // nav:true
        },
      }
    })
  };
  if ($('.sectors-carousel').length) {
    let sectorsCarousel = $(".sectors-carousel").owlCarousel({
      margin:20,
      // items: 1,
      dots: false,
      nav:false,
      // navText: [$('.newsleft'), $('.newsright')],
      // autoHeight:true,
      // autoplay: true,
      autoplayTimeout: 5000,
      loop:true,
      smartSpeed: 2000,
      responsive:{
        0:{
            items:1.5,
           
            // nav:true
        },
        992:{
          items:3.5,
          // dots: false,

          // nav:true
        },
      }
    })
  };
  if ($('#awardsCarousel').length) {
    let awardsCarousel = $("#awardsCarousel").owlCarousel({
      margin:20,
      // items: 1,
      dots: true,
      nav:false,
      items:1,
      // navText: [$('.newsleft'), $('.newsright')],
      // autoHeight:true,
      // autoplay: true,
      autoplayTimeout: 5000,
      loop:true,
      smartSpeed: 2000,

    })
  };
  
  if ($('#mediaCarousel').length) {
    let mediaCarousel = $("#mediaCarousel").owlCarousel({
      margin:20,
      // items: 1,
      dots: false,
      nav:true,
      items:1,
      navText: [$('.medialeft'), $('.mediaright')],
      // autoHeight:true,
      // autoplay: true,
      autoplayTimeout: 5000,
      loop:true,
      smartSpeed: 2000,

    })
  };
  $(".toggle_icon").click(function(){
    $('.mobile-menu').toggleClass('open')
  })
  $('.mobile-menu').click((e)=>{
    console.log("click")
    if (!$(e.target).closest('.link-cotainer').length){
      $(".mobile-menu").toggleClass('open')
    }
  });
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  };

    // console.log(eve)
    // const displayQuote = (id) => {
    //   console.log("click");
    //   methods.gotoId(id)
    // }
 
});

// console.log($)
let gotoId = (id) =>{
  // console.log($("#"+id).length)
  if($("#"+id).length === 1)
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#"+id).offset().top,
    }, 1000);
};
let gotoIdNav = (id) =>{
  // console.log($("#"+id).length)
  if($("#"+id).length === 1)
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#"+id).offset().top - 100,
    }, 1000);
};
function tabChange(tab){
  console.log("this");
  $('.tab-nav .link').removeClass('active');
  $('.tab-nav .'+tab).addClass('active');
  $('.content-section .tab-container').removeClass('active');
  $('.content-section #'+tab).addClass('active');
}


$(".form-control").on("keyup change", function (event) {
  // if($(this).parent().siblings('.invalid').length){
    $(this).parent().siblings('.invalid').hide()
    $(this).removeClass('error')
  // }
});
function submitData(e, formName){
  let valid = true;
  $("#"+formName+" :input[required]").each(function(){
    var input = $(this); 
    // console.log(input)
    if ($(this).is(':invalid') || !$(this).val()){
      valid = false;
      $(this).addClass('error').focus();
      $(this).parent().siblings('.invalid').show()
      // console.log(valid)
    }
  });
  if(valid) {
    console.log("form valid")
    // $('#mutiStepForm').popup('show');
    // $("#formCotainer").toggle();
  }
}

let toggleform = (value) =>{
  console.log("text => ", value)
  $(".cont-links-box").toggleClass("active")
  $(".form-container").toggleClass("active")
}
// $('#thankYou').popup('show');