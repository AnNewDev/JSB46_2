const tasks = [];
function createTask(title) {
  const newTask = {
    id: Date.now(),
    title,
    completed: false,
  };
  tasks.push(newTask);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = `${task.title} - ${task.completed ? 'Hoàn thành' : 'Chưa hoàn thành'}`;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

const newTaskInput = document.getElementById('newTaskInput');
newTaskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    createTask(newTaskInput.value);
    newTaskInput.value = '';
  }
});