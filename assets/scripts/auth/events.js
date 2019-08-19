const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log(event)
  // get form data
  const data = getFormFields(event.target)
  console.log('sign up data is', data)
  // make the api call
  api.signUp(data)
    .then(function (data) {
      ui.signUpSuccess(data)
    })
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('submitted sign-in!')

  const data = getFormFields(event.target)
  console.log('sign in data is', data)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.onSignInFailure)
}

// Game Events below
// playerOne can be reassigned
const gridArray = ['', '', '', '', '', '', '', '', '']

const winOptions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]

let playerOne = 'X'

const changePlayer = function () {
  if (playerOne === 'X') {
    playerOne = 'O'
  } else if (playerOne === 'O') {
    playerOne = 'X'
  }
}

const onClick = function () {
  event.preventDefault()
  if ($(this).text() === '' && !store.gameOver) {
    $(this).text(playerOne) // this element specifically
    const currentIndex = $(this).attr('id')
    gridArray[currentIndex] = playerOne
    console.log(gridArray)
    winner()
    changePlayer()
  }
}

const winner = function () {
  if ((gridArray[0] && gridArray[0] === gridArray[1] && gridArray[0] === gridArray[2]) ||
      (gridArray[3] && gridArray[3] === gridArray[4] && gridArray[3] === gridArray[5]) ||
      (gridArray[6] && gridArray[6] === gridArray[7] && gridArray[6] === gridArray[8]) ||
      (gridArray[0] && gridArray[0] === gridArray[3] && gridArray[0] === gridArray[6]) ||
      (gridArray[1] && gridArray[1] === gridArray[4] && gridArray[1] === gridArray[7]) ||
      (gridArray[2] && gridArray[2] === gridArray[5] && gridArray[2] === gridArray[8]) ||
      (gridArray[0] && gridArray[0] === gridArray[4] && gridArray[0] === gridArray[8]) ||
      (gridArray[2] && gridArray[2] === gridArray[4] && gridArray[2] === gridArray[6])
  ) {
    console.log(playerOne + ' is the winner!')
    store.gameOver = true
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
  onClick
}
