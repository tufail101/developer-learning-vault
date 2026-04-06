// Example protected route request from the frontend.
async function loadPrivateData(token) {
  const response = await fetch("/api/private", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.json();
}
