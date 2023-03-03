const todolist = document.querySelector("#todo-form");
const todoInput = todolist.querySelector("input:first-child");
const showTodo = document.querySelector("#show-todo");

let todos = [];

function deleteTodoList(event) {
  const li = event.target.parentNode;
  li.remove();
}

function paintTodo(todo) {
  showTodo.classList.remove("hidden");
  const li = document.createElement("li");
  li.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodoList)
  span.innerText = todo;
  showTodo.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

function saveTodos(todo) {
  localStorage.setItem("todo", JSON.stringify(todos));
}

function handleTodoList(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";
  const newTodo = {
    text: todo,
    id: Date.now(),
  }
  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

todolist.addEventListener("submit", handleTodoList);

const savedTodo = localStorage.getItem("todo");

