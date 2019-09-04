const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#create-game').show()
  $('#sign-out').show()
  $('#game-stats').show()
  $('form').trigger('reset')
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  store.user = null
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#create-game').hide()
  $('#showgrid').hide()
  $('#change-password').hide()
  $('#end').hide()
  $('.column').text('')
  $('#winner').text('')
  $('#game-stats').hide()
  $('#sign-out').hide()
  $('form').trigger('reset')
  store.game = null
  store.gameOver = false
  store.playerOne = 'X'
}

const signOutFailure = function () {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const createGameSuccess = function (data) {
  store.game = data.game
  $('.column').text('')
  $('#showgrid').show()
  $('#winner').text('')
  $('#message').text('')
  $('#change-password').hide()
  store.gameOver = false
  store.playerOne = 'X'
  store.gridArray = ['', '', '', '', '', '', '', '', '']
}

const createGameFailure = function () {
  $('#message').text('Error creating game')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onSuccessfulMove = function (data) {
  store.game = data.game
}

const onFailedMove = function () {
  $('#message').text('Failed to submit move')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const changePasswordSuccess = function () {
  $('#message').text('Changed Password Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Error changing password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const gameInfo = function (responseData) {
  const numGames = responseData.games.length

  $('#message').text('Number of games played = ' + numGames)
  $('#message').removeClass()
  $('#message').addClass('success')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  onSuccessfulMove,
  onFailedMove,
  changePasswordSuccess,
  changePasswordFailure,
  gameInfo
}
