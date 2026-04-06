import { screen } from "@testing-library/dom";

document.body.innerHTML = `<button>Save changes</button>`;

const button = screen.getByRole("button", { name: /save changes/i });
console.log(button.textContent);
