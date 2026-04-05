document.querySelector("#load-btn").addEventListener("click", async function () {
  const output = document.querySelector("#output");
  output.textContent = "Loading...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    output.textContent = `Demo weather status: ${data.title}`;
  } catch (error) {
    output.textContent = "Could not load data.";
  }
});
