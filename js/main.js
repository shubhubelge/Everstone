/**
   * Easy selector helper function
   */
 const select = (el, all = false) => {
  // console.log("in el")
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    console.log(el)
    if(el == '#!' || el == '#') return
    return document.querySelector(el)
  }
}
/**
 * Easy on scroll event listener 
 */
 const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener);
}
/**
 * Navbar links active state on scroll
 */
let navbarlinks = select('#top-menu .link', true)
const navbarlinksActive = () => {
 let position = window.scrollY + 200;
//  console.log(position-100)
 navbarlinks.forEach(navbarlink => {
  //  console.log(navbarlink)
   if (!navbarlink.hash) return
   let section = select(navbarlink.hash)
  //  console.log(section)
   if (!section) return
   if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
     navbarlink.classList.add('active-link')
   } else {
     navbarlink.classList.remove('active-link')
   }
 })
}
const scrollto = (el) => {
let header = select('.about-page-nav');
console.log(header)
if(header == null) return
let offset = header.offsetHeight

let elementPos = select(el).offsetTop;
console.log(elementPos)
console.log(offset)
window.scrollTo({
  top: elementPos - offset,
  behavior: 'smooth'
})
}
window.addEventListener('load', () => {
if (window.location.hash) {
  if (select(window.location.hash)) {
    scrollto(window.location.hash)
  }
}
});

$('#top-menu').on('click', '.link', function(e) {
if (select(this.hash)) {
  e.preventDefault()
  // console.log("click")
  // let navbar = select('#navbar')
  // if (navbar.classList.contains('navbar-mobile')) {
  //   navbar.classList.remove('navbar-mobile')
  //   let navbarToggle = select('.mobile-nav-toggle')
  //   navbarToggle.classList.toggle('bi-list')
  //   navbarToggle.classList.toggle('bi-x')
  // }
  scrollto(this.hash)
}
})
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)

// define([
//   'jquery',
//   'owl',
//   // 'methods'
// ], function($) {
//   'use strict';
  // var $ = $;
  // var methods = require("./methods.js");
  // console.log("infule")
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
  if ($('#mediaOwl').length) {
    let mediaOwl = $("#mediaOwl").owlCarousel({
      margin:20,
      // items: 3,
      dots:false,
      // nav:true,
      // navText: [$('.newsleft'), $('.newsright')],
      // // autoHeight:true,
      // autoplay: true,
      autoplayTimeout: 5000,
      loop:true,
      smartSpeed: 2000,
      responsive:{
        0:{
            items:1,
            nav:true,
            navText: [$('.newsleft'), $('.newsright')],
            // nav:true
        },
        992:{
          items:3,
          nav:false,
          navText: [],
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
          mouseDrag:false,

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
        },
        992:{
          items:3.5,
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
  if ($('#rsgCarousel').length) {
    let rsgCarousel = $("#rsgCarousel").owlCarousel({
      margin:20,
      // items: 1,
      dots: false,
      nav:false,
      
      autoplayTimeout: 5000,
      loop:true,
      smartSpeed: 2000,
      responsive:{
        0:{
            items:2,
        },
        992:{
          items:5,
        },
      }
    })
  };
  
  if ($('#brandLinkCarousel').length) {
    let brandLinkCarousel = $("#brandLinkCarousel").owlCarousel({
      margin:20,
      // items: 1,
      dots: false,
      nav:false,
      // items:5,
      autoplayTimeout: 5000,
      // loop:true,
      smartSpeed: 2000,
      responsive:{
        0:{
            items:2,
        },
        992:{
          items:5,
        },
      }
    })
  };
  $(".toggle_icon").click(function(){
    $('.mobile-menu').toggleClass('open')
  })
  $('.mobile-menu').click((e)=>{
    // console.log("click")
    if (!$(e.target).closest('.link-cotainer').length){
      $(".mobile-menu").toggleClass('open')
    }
  });
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      $('.acc-container .accordion').removeClass('active');
      $('.acc-container .panel').css("max-height", "")
      // panel.style.maxHeight = null;
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
 
// });

// console.log($)
let gotoId = (id) =>{
  // console.log($("#"+id).length)
  let heightOfNav = 0;
  if($('.about-page-nav').length){
    heightOfNav = $('.about-page-nav').height();
  }
  if($("#"+id).length === 1)
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#"+id).offset().top - heightOfNav,
    }, 1000);
};

// Cache selectors
// var topMenu = $("#top-menu"),
//   topMenuHeight = topMenu.outerHeight()+15,
//   // All list items
//   menuItems = topMenu.find("a"),
//   // Anchors corresponding to menu items
//   scrollItems = menuItems.map(function(){
//     var item = $($(this).attr("href"));
//     if (item.length) { return item; }
// });
// // console.log("topMenu")
// // console.log(topMenu)
// // console.log("menuItems")
// // console.log(menuItems)
// // console.log("scrollItems")
// // console.log(scrollItems)

// // Bind to scroll
// $(window).scroll(function(){
//   // Get container scroll position
//   var fromTop = $(this).scrollTop()+topMenuHeight;

//   // Get id of current scroll item
//   var cur = scrollItems.map(function(){
//     if ($(this).offset().top < fromTop)
//       return this;
//   });
//   // Get the id of the current element
//   cur = cur[cur.length-1];
//   var id = cur && cur.length ? cur[0].id : "";
//   // Set/remove active class
//   menuItems
//     .removeClass("active-link")
//     .end().filter("[href='#"+id+"']").addClass("active-link");
//     // console.log("menuItems")
//     // console.log(menuItems)
// });

// $(document).ready(function () {
//   $(document).on("scroll", onScroll);
  
//   //smoothscroll
//   $('#top-menu a[href^="#"]').on('click', function (e) {
//       e.preventDefault();
//       $(document).off("scroll");
      
//       $('a').each(function () {
//           $(this).removeClass('active-link');
//       })
//       $(this).addClass('active-link');
    
//       var target = this.hash,
//           menu = target;
//           console.log(target)
//       $target = $(target);
//       $('html, body').stop().animate({
//           'scrollTop': $target.offset().top - 200,
//       }, 500, 'swing', function () {
//           window.location.hash = target;
//           $(document).on("scroll", onScroll);
//       });
//   });
// });
// function onScroll(event){
//   console.log("in")
//   var scrollPos = $(document).scrollTop();
//   $('#top-menu a').each(function () {
//       var currLink = $(this);
//       var refElement = $(currLink.attr("href"));
//       if (refElement.position().top -100 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//           $('#top-menu a').removeClass("active-link");
//           currLink.addClass("active-link");
//       }
//       else{
//           currLink.removeClass("active-link");
//       }
//   });
// }

// let gotoIdNav = (id) =>{
//   // console.log($("#"+id).length)
//   if($("#"+id).length === 1){
//     let heightOfNav = $('.about-page-nav').height();
//     // let heightOfNavouter = $('.about-page-nav').outerHeight();
//     // let topMenu = $('#top-menu').outerHeight();
//     // console.log(heightOfNav, heightOfNavouter, topMenu)
//     $('.sub-navbar .link').removeClass('active-link')
//     $('.sub-navbar .'+id).addClass('active-link')
//     console.log("in scroll");
//     console.log($("#"+id).offset().top)
//     console.log($("#"+id).offset().top - heightOfNav)
//     // $([document.documentElement, document.body]).animate({
//     //     scrollTop: $("#"+id).offset().top,
//     // }, 1000);
//     $('html, body').animate({
//       scrollTop: $("#"+id).offset().top - 1000,
//     }, 2000);
//   }
    
// };
function tabChange(tab){
  // console.log("this");
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
  $(".cont-links-box").toggleClass("active")
  $(".form-container").toggleClass("active")
  $("#bookAptOne .col-input").removeClass("act");
  $(".col-input."+value).addClass("act");
}
// $('#thankYou').popup('show');

$(document).ready(function(){
  let scrollAmt = 800;
  // if($(window).width()<992){
  //   scrollAmt = 1400;
  // }
  $(window).scroll(function() {
    if ($(this).scrollTop() > scrollAmt) {
      $('.position-fix-btn').addClass('btn-show');
    } else {
      $('.position-fix-btn').removeClass('btn-show');

    }
  });
});
$(".nav-acc-link").click(() =>{
  $('.sub-list').toggleClass('sub-list-active')
})


$('.toggle-search').click(function (e) {
  // console.log("")
  e.preventDefault();
  $('.search-container').toggleClass('active')
})