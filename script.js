let tasks = []
function addTask() {
  let taskInput = document.getElementById("addTask")
  let taskValue = taskInput.value
  // checking if input is empty or not
  if (taskValue.trim() !== "") {
    // add the task
    tasks.push({
      text: taskValue,
      completed : false
    })
    taskInput.value = ""
    updateTodoList()
  } 
}

function updateTodoList() {
  const todoList = document.getElementById("todoItems")
  // clearing existing todo list
  todoItems.innerHTML = ""
  tasks.forEach((task) => {
    let listItem = document.createElement('li')
    listItem.textContent = task.text
    listItem.className = task.completed ? 'completed' : ""
    listItem.onclick = function () {
      toogleCompleted(task)
    };
    todoList.appendChild(listItem)
  })
  // function to calculate todos, completed
  updateAggregrate()
}

function toogleCompleted(task) {
  task.completed = !task.completed
  updateTodoList()
}

function updateAggregrate() {
  let totalTasks = document.getElementById('totalTask')
  let completedTasks = document.getElementById('completedTask')
  let total = tasks.length
  let completed = tasks.reduce((acc, task) => { 
    return task.completed ? acc + 1 : acc
  },0)
  totalTasks.textContent = total
  completedTasks.textContent = completed
}

function filterTasks()
{
  let searchInput = document.getElementById('searchTask')
  let searchValue = searchInput.value.toLowerCase()

  let filteredTasks = tasks.filter((task) => {
    return task.text.toLowerCase().includes(searchValue)
  })

  // update todolist with filteredTask
  updateTodoListWithFilteredTasks(filteredTasks)
}

function updateTodoListWithFilteredTasks(filteredTasks) {
  let todoList = document.getElementById('todoItems')

  todoList.innerHTML = ""
  
  filteredTasks.forEach((task) => { 
    let listItem = document.createElement("li");
    listItem.textContent = task.text;
    listItem.className = task.completed ? "completed" : "";
    listItem.onclick = function () {
      toogleCompleted(task);
    };
    todoList.appendChild(listItem);
  })
  updateAggregrate()
}