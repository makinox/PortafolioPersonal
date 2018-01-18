'use strict'
$(document).ready(function(){
    $(".button a").click(function(){
        $(".overlay").fadeToggle(400)
        $("nav").toggleClass('visible')
        $(this).toggleClass('btn-open').toggleClass('btn-close')
    })
    $(".overlay a").click(function(){
      $(".overlay").fadeToggle(400)
      $("nav").toggleClass('visible')
      $(".button a").toggleClass('btn-open').toggleClass('btn-close')
    })
})
