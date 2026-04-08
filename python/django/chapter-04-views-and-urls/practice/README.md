# Practice — Views And Urls

## Exercise 1
Write a `home` view that returns a plain text response like `"Home page"`.
Then add a URL pattern that connects `/` to that view.

## Exercise 2
Write an `about` view that returns a different plain text response.
Add a URL pattern so `/about/` reaches it.

## Exercise 3
Write a `contact` view and connect it to `/contact/`.
Then write one sentence explaining what breaks if the view exists but the URL pattern does not.

## Done Checklist
- [ ] `/` returns the home response
- [ ] `/about/` returns a different response from `/`
- [ ] `/contact/` works only after I add both the view and the URL pattern
- [ ] I can explain that `urls.py` chooses the view and the view returns the response
