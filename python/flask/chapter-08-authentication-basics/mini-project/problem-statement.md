# Mini Project — Protected Notes Page

## What To Build
Build a small Flask app with a public home page, a fake login route, and one protected notes page.

## What It Should Do
- `GET /` should show a short welcome message with links or instructions for the other routes
- `GET /login` should simulate a login by storing `user_id` in the session
- `GET /notes` should only work when the session contains `user_id`
- if the user is not logged in, `GET /notes` should redirect to `/login`
- `GET /logout` should clear the session and log the user out

## What You Must Use
- Flask `session`
- `app.secret_key`
- at least one protected route
- `redirect()` or `url_for()` to send logged-out users to the login route

## Stretch Goal
Show a different home page message depending on whether the user is currently logged in.
