'use strict'

let faded = () => {
  $('.overlay').fadeToggle(500)
  $('nav').toggleClass('visible')
  // $('body').toggleClass('rueda')
  $('#cuerpo').toggleClass('gaus')
  $('.button i').toggleClass('btn-open').toggleClass('btn-close')
}

$(document).ready(() => {
  $('.button i').click(faded)
  $('.overlay a').click(faded)
})
