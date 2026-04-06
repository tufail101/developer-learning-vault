/*
  Chapter 17 example: Error Handling And Modules Deep Dive
  This file demonstrates throwing custom errors and handling them clearly.
  The module examples are shown as comments because they require multiple files.
*/

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function createAccount(username) {
  if (!username || username.trim().length < 3) {
    throw new ValidationError("Username must be at least 3 characters long.");
  }

  return { username };
}

try {
  console.log(createAccount("ash"));
  console.log(createAccount("a"));
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation problem:", error.message);
  } else {
    console.error("Unexpected problem:", error.message);
  }
}

/*
  Example ES module syntax:

  // utils.js
  export function formatPrice(price) {
    return `$${price}`;
  }

  // app.js
  import { formatPrice } from "./utils.js";
  console.log(formatPrice(19.99));
*/
