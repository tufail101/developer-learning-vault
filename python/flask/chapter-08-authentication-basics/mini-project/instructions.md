# Instructions — Protected Notes Page

1. Create a Flask app file such as `app.py`.
2. Set `app.secret_key` near the top so session data can work.
3. Add a public `/` route that explains how to test the app.
4. Add a `/login` route that stores `session["user_id"] = 1`.
5. Add a `/notes` route that checks the session before showing private content.
6. If `user_id` is missing, redirect the user to `/login`.
7. If `user_id` exists, return a message like `"These are your private notes."`
8. Add a `/logout` route that removes `user_id` from the session.
9. Test the full flow in order: `/notes`, `/login`, `/notes`, `/logout`, `/notes`.

## Suggested Build Order

1. Build the public `/` route first so the server is easy to test.
2. Add `/login` and confirm it stores a value in the session.
3. Add `/notes` and make it block access when logged out.
4. Add `/logout` last and make sure it really clears access.

## What To Check While You Build

1. Visiting `/notes` before login should not show the private content.
2. Visiting `/notes` after login should work.
3. Visiting `/notes` after logout should fail again.
