const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran')
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess ran', store.user)
}

const signOutSuccess = function (data) {
  console.log('signed out success: store.user is', store.user)
  store.user = null
  $('#message').text('Signed out successfull!')
  $('#message').removeClass()
  $('#message').addClass('Success')
  console.error('signed out ran')
}

const createGameSuccess = function (data) {
  store.game = data.game
  console.log(data.game)
}

const onSuccessfulMove = function (data) {
  store.game = data.game
  console.log(data.game)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signOutSuccess,
  createGameSuccess,
  onSuccessfulMove
}
