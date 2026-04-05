/* Project: Chat UI | Skills: sending messages, Enter key handling, timestamps, auto-scroll, fake async reply */

// Cache message UI parts so we can build and insert new messages cleanly.
const messageForm = document.querySelector("#message-form");
const messageInput = document.querySelector("#message-input");
const messages = document.querySelector("#messages");

function getCurrentTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function appendMessage(text, type) {
  const article = document.createElement("article");
  article.className = `message ${type}`;

  const body = document.createElement("p");
  body.textContent = text;

  const time = document.createElement("time");
  time.textContent = getCurrentTime();

  article.appendChild(body);
  article.appendChild(time);
  messages.appendChild(article);
  messages.scrollTop = messages.scrollHeight;
}

// Send a new message when the form is submitted by button click or Enter key.
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = messageInput.value.trim();
  if (!text) return;

  appendMessage(text, "sent");
  messageInput.value = "";

  // Simulate a reply so the chat feels alive for learners exploring the UI.
  setTimeout(function () {
    appendMessage("Nice. Send me the latest preview when you're ready.", "received");
  }, 1000);
});
