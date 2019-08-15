const api = require('./api.js')
const ui = require('./ui.js')

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
    .t
}








module.exports = {
  onGetScores,
  onGetAScore
}
