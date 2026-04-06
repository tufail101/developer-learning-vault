# Practice — Authentication Basics

## Exercise 1
Create a `/login` route that sets `session["user_id"] = 1`.
Return a message like `"Logged in"`.
Then create a `/whoami` route that says `"You are logged in"` only when that session value exists.

## Exercise 2
Create a `/dashboard` route.
If `user_id` is missing from the session, redirect the user to `/login`.
If it exists, show `"Welcome to your dashboard"`.

## Exercise 3
Add a `/logout` route that removes `user_id` from the session.
After logging out, visit `/dashboard` again and make sure you get redirected instead of seeing the private page.

## Done Checklist
- [ ] Visiting `/whoami` changes after I hit `/login`
- [ ] `/dashboard` redirects when I am logged out
- [ ] `/dashboard` loads only after the session value exists
- [ ] `/logout` removes the session marker and blocks dashboard access again
