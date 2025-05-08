const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');
const themeToggle = document.getElementById('themeToggle');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(text) {
  const li = document.createElement('li');
  li.className = 'task';

  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.className = 'text';
  span.textContent = text;

  checkbox.addEventListener('change', () => {
    li.classList.toggle('done', checkbox.checked);
  });

  label.appendChild(checkbox);
  label.appendChild(span);

  const actions = document.createElement('div');
  actions.className = 'actions';

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.onclick = () => taskList.removeChild(li);

  actions.appendChild(deleteBtn);

  li.appendChild(label);
  li.appendChild(actions);
  taskList.appendChild(li);
}

// Toggle dark mode
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
