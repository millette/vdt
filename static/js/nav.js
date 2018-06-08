'use strict'

// TODO: Reactify...
document.addEventListener('DOMContentLoaded', function () {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'))
  if (!$navbarBurgers.length) { return }
  $navbarBurgers.forEach(function ($el) {
    $el.addEventListener('click', function () {
      const target = $el.dataset.target
      const $target = document.getElementById(target)
      $el.classList.toggle('is-active')
      $target.classList.toggle('is-active')
    })
  })
})
