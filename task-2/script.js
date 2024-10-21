let tasks = []
const taskInput = document.getElementById('task-input')
const addTaskBtn = document.getElementById('add-task-btn')
const taskList = document.getElementById('task-list')
const clearTasksBtn = document.getElementById('clear-tasks-btn')
const savedTasks = JSON.parse(localStorage.getItem('tasks'))

if (savedTasks) {
  tasks = savedTasks
  renderTasks()
}

addTasksBtn.addEventListener('click', function() {
  const task = taskInput.value
  if (task) {
    tasks.push(task)
    taskInput.value = ''
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderTasks()
  }
})

clearTasksBtn.addEventListener("click", function() {
  localStorage.clear()
  tasks = []
  renderTasks(tasks)
})

function renderTasks(tasks) {
  taskList.innerHTML = ""
  tasks.forEach((task, index) => {
      const taskItem = document.createElement("li")
      taskItem.innerHTML = `
          <span>${task}</span>
          <button onclick="deleteTask(${index})">Delete</button>
      `
      taskList.appendChild(taskItem)
  })
}

function deleteTask(index) {
  tasks.splice(index, 1)
  localStorage.setItem("tasks", JSON.stringify(tasks))
  renderTasks(tasks)
}
