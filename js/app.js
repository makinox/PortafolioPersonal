'use strict'

let faded = () => {
  $('.overlay').fadeToggle(200)
  $('nav').toggleClass('visible')
  $('body').toggleClass('rueda')
  $('.button a').toggleClass('btn-open').toggleClass('btn-close')
}

$(document).ready(() => {
  $('.button a').click(faded)
  $('.overlay a').click(faded)
})
