// Example of sending a token in an Authorization header.
fetch("/api/profile", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
