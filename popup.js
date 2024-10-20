document.addEventListener('DOMContentLoaded', () => 
{
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTask');
  const taskList = document.getElementById('taskList');

  // Add task to the list
  addTaskButton.addEventListener('click', () => 
  {
    if (taskInput.value.trim() !== "") 
    {
      const li = document.createElement('li');
      li.textContent = taskInput.value;
      taskList.appendChild(li);
      taskInput.value = ""; // Clear the input field
    }
  });
});
  