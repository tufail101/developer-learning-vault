const button = document.querySelector("#load-btn");
const userList = document.querySelector("#users");

async function loadUsers() {
  userList.innerHTML = "<li>Loading...</li>";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    userList.innerHTML = users
      .slice(0, 5)
      .map(function (user) {
        return `<li>${user.name}</li>`;
      })
      .join("");
  } catch (error) {
    userList.innerHTML = "<li>Something went wrong.</li>";
  }
}

button.addEventListener("click", loadUsers);
