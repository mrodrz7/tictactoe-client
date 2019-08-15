'use strict'

// use require with a reference to bundle the file and use it in this file
const gameEvents = require('./game/events.js')


// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  // your JS code goes here
})
