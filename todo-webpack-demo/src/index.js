// import './style.css';

console.log("Hello, Webpack!");


document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  if (todoInput.value.trim() !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = todoInput.value;
    
    // Add a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => newTask.remove());

    newTask.appendChild(removeBtn);
    todoList.appendChild(newTask);

    // Clear input
    todoInput.value = '';
  }
}
