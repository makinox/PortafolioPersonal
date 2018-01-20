'use strict'

let faded = () => {
  $('.overlay').fadeToggle(400)
  $('nav').toggleClass('visible')
  $('body').toggleClass('rueda')
  $('#cuerpo').toggleClass('gaus')
  $('.button a').toggleClass('btn-open').toggleClass('btn-close')
}

$(document).ready(() => {
  $('.button a').click(faded)
  $('.overlay a').click(faded)
})
