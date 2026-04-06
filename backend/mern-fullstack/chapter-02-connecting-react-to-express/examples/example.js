// React example
fetch("http://localhost:5000/api/hello")
  .then((response) => response.json())
  .then((data) => console.log(data));
