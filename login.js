const usernameForm = document.querySelector("#username");
const usernameInput = document.querySelector("#username input:first-child");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
function submitUsername(event) {
  event.preventDefault();
  usernameForm.classList.add(HIDDEN_CLASS);
  const username = usernameInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  showGreeting(username);
}

function showGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `${username}'s Today`;
}

const getUsername = localStorage.getItem(USERNAME_KEY);

if (getUsername === null) {
  usernameForm.classList.remove(HIDDEN_CLASS);
  usernameForm.addEventListener("submit", submitUsername);
} else {
  showGreeting(getUsername);
}
