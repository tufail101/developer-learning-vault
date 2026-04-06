# HTTP Networking

## HTTP Methods (`http-methods`)

Definition:
HTTP methods are request verbs that describe the action you want to perform on a resource, such as reading, creating, updating, or deleting it.

Analogy:
They are like action labels on a form: read, add, edit, or remove.

Code example:

```js
fetch("/api/posts", { method: "GET" });
fetch("/api/posts", { method: "POST" });
fetch("/api/posts/1", { method: "PUT" });
fetch("/api/posts/1", { method: "DELETE" });
```

Why this matters:
HTTP methods are the backbone of how frontends talk to servers. Knowing which method matches which action helps you read API docs and build requests correctly.

Learn more:
[chapter-08-async-fetch-api](../javascript/chapter-08-async-fetch-api/)

## Status Codes (`status-codes`)

Definition:
Status codes are numeric HTTP response codes that tell you whether a request succeeded, failed, or needs more action.

Analogy:
They are like delivery updates that say "arrived," "not found," or "server had a problem."

Code example:

```js
fetch("/api/profile")
  .then((response) => {
    console.log(response.status);
  });
```

Common examples:

- `200` means success
- `201` means created
- `404` means not found
- `500` means server error

Why this matters:
Status codes tell your app how to respond when something goes wrong or right. Good frontend code checks them so the UI can show the right success or error state.

Learn more:
[chapter-08-async-fetch-api](../javascript/chapter-08-async-fetch-api/)

## CORS (`cors`)

Definition:
CORS is a browser security rule that controls whether a webpage is allowed to request resources from a different origin.

Analogy:
It is like a building receptionist deciding whether visitors from another company are allowed through the door.

Code example:

```js
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .catch((error) => console.error("Request blocked or failed", error));
```

Why this matters:
CORS is one of the most common reasons API requests work in Postman but fail in the browser. Understanding it saves a lot of confusion when frontend apps start talking to different servers.

Learn more:
[chapter-08-async-fetch-api](../javascript/chapter-08-async-fetch-api/)
