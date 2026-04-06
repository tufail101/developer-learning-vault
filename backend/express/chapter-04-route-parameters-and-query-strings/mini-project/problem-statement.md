# Mini Project — Product Lookup Route

## What To Build
Create a product lookup endpoint that can read both the product ID and optional view settings from the URL.

## What It Should Do
- Use a route like `/products/:id`
- Read the product ID from the path
- Read one optional query like `view=full` or `currency=inr`
- Return both values in a JSON response

## What You Must Use
- `req.params`
- `req.query`
- a route path with `:id`

## Stretch Goal
Add one default query value when the user does not provide it.
