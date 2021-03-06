'use strict'

// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')
// events handler

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#create-game').on('submit', authEvents.onCreateGame)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.column').on('click', authEvents.onClick)
  $('#game-stats').on('click', authEvents.onGameStats)
  $('#create-game').hide()
  $('#showgrid').hide()
  $('#change-password').hide()
  $('#end').hide()
  $('#sign-out').hide()
  $('#game-stats').hide()
})
