# Expected Features — Protected Notes Page

- The app sets `app.secret_key` before using the session
- The `/` route is public and explains how to test the app
- The `/login` route stores a login marker in the session
- The `/notes` route checks for `user_id` before showing private content
- Logged-out users are redirected away from `/notes`
- Logged-in users can open `/notes` successfully
- The `/logout` route clears the session
- After logout, the protected route stops working again
