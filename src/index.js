document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log('Loaded')
    const taskListForm = document.getElementById("create-task-form")
    taskListForm.addEventListener("submit", addTask)
});

const addTask = (event) => {
  event.preventDefault()
  const newTask = event.target.querySelector('#new-task-description').value
  const pTag = document.createElement('li')
  pTag.textContent = `${newTask} `
  // console.log(pTag)
  const task = document.getElementById('list')
  // console.log(task)
  task.appendChild(pTag)
  event.target.querySelector('#new-task-description').value = ""
  let btn = document.createElement('button')
  btn.addEventListener('click', removeTask)
  btn.textContent = '  x'
  pTag.appendChild(btn)
  // console.log(pTag)
}


function removeTask(event){
  event.target.parentNode.remove()
} 