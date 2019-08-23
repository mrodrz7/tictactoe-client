const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
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
}

const signOutSuccess = function (data) {
  console.log('signed out success: store.user is', store.user)
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
  store.game = null
  store.gameOver = false
  store.playerOne = 'X'
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const createGameSuccess = function (data) {
  store.game = data.game
  console.log(data.game)
  $('.column').text('')
  $('#showgrid').show()
  $('#winner').text('')
  $('#message').text('')
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
  console.log(data.game)
}

const onFailedMove = function () {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const changePasswordSuccess = function () {
  $('#message').text('Changed Password Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const changePasswordFailure = function () {
  $('#message').text('Error changing password')
  $('#message').removeClass()
  $('#message').addClass('failure')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  createGameSuccess,
  createGameFailure,
  onSuccessfulMove,
  onFailedMove,
  changePasswordSuccess,
  changePasswordFailure
}
