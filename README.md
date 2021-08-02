# Embedded Web iFrame Demo

1) Pull this repo down
2) Turn on Embedded mode on an account and add a `settings_embedded_redirect_url` (it can be https://google.com to test)
3) [Request one-time access sign_in_token](https://developers.workbright.com/reference#request-one-time-access-token) for a staff member in that account
4) Use the token provided to update index.html `iframe` with a new `src` URL via [sign that staff member in with the token](https://developers.workbright.com/reference#signing-in-with-token)
5) Load index.html to view the staff member was signed in successfully
