define([
  'jquery'
], function($) {
  'use strict';
  var methods = {};
  methods.gotoId = (id) =>{
    // console.log($("#"+id).length)
    if($("#"+id).length === 1)
      $([document.documentElement, document.body]).animate({
          scrollTop: $("#"+id).offset().top,
      }, 1000);
  };
  // methods.gotoId = function(){

  // };
  console.log(methods)
  return methods;
});