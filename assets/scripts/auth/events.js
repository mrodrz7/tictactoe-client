const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  // get form data
  const data = getFormFields(event.target)
  // make the api call
  api.signUp(data)
    .then(function (data) {
      ui.signUpSuccess(data)
    })
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onGameStats = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.gameStats(data.game)
    .then(ui.gameInfo)
}
// Game Events below
// playerOne can be reassigned
store.gridArray = ['', '', '', '', '', '', '', '', '']

// const winOptions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 4, 8],
//   [2, 4, 6],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8]
// ]

store.playerOne = 'X'

const changePlayer = function () {
  if (store.playerOne === 'X') {
    store.playerOne = 'O'
    $('#message').text(store.playerOne + "'s turn")
  } else if (store.playerOne === 'O') {
    store.playerOne = 'X'
    $('#message').text(store.playerOne + "'s turn")
  }
}

const onClick = function () {
  event.preventDefault()
  if ($(this).text() === '' && !store.gameOver) {
    $(this).text(store.playerOne) // this element specifically
    const currentIndex = $(this).attr('id')
    store.gridArray[currentIndex] = store.playerOne
    winner()
    api.makeMove(store.playerOne, currentIndex)
      .then(ui.onSuccessfulMove)
      .catch(ui.onFailedMove)
    if (!store.gameOver) {
      changePlayer()
    }
  }
}

const winner = function () {
  if ((store.gridArray[0] && store.gridArray[0] === store.gridArray[1] && store.gridArray[0] === store.gridArray[2]) ||
      (store.gridArray[3] && store.gridArray[3] === store.gridArray[4] && store.gridArray[3] === store.gridArray[5]) ||
      (store.gridArray[6] && store.gridArray[6] === store.gridArray[7] && store.gridArray[6] === store.gridArray[8]) ||
      (store.gridArray[0] && store.gridArray[0] === store.gridArray[3] && store.gridArray[0] === store.gridArray[6]) ||
      (store.gridArray[1] && store.gridArray[1] === store.gridArray[4] && store.gridArray[1] === store.gridArray[7]) ||
      (store.gridArray[2] && store.gridArray[2] === store.gridArray[5] && store.gridArray[2] === store.gridArray[8]) ||
      (store.gridArray[0] && store.gridArray[0] === store.gridArray[4] && store.gridArray[0] === store.gridArray[8]) ||
      (store.gridArray[2] && store.gridArray[2] === store.gridArray[4] && store.gridArray[2] === store.gridArray[6])
  ) {
    $('#winner').text(store.playerOne + ' is the winner! Click LETS PLAY to try again!')
    store.gameOver = true
    $('#winner').css('color', 'green')
    $('#message').text('')
  } else if (!store.gridArray.some(function (item) {
    return item === ''
  })) {
    $('#winner').text('Draw! Click LETS PLAY to try again!')
    $('#winner').css('color', 'blue')
    store.gameOver = true
    $('#message').text('')
  }
}
/*
const onGetScores = function () {
  api.index()
    .then(ui.onScoresSuccess)
    .catch(ui.onScoresFailure)
}

const onGetAScore = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.show(formData)
}
*/

module.exports = {
  // onGetScores,
  // onGetAScore,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onClick,
  onCreateGame,
  onGameStats
}
