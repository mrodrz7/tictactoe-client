curl "https://tic-tac-toe-wdi-production.herokuapp.com" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"

echo
