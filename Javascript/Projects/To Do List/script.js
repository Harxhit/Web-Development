document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-button");
  const unorderedList = document.getElementById("task-list");

  let taskArray = JSON.parse(localStorage.getItem("tasks")) || [];

  taskArray.forEach((task) => renderTask(task));

  addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const task = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    taskArray.push(task);
    saveTask();
    renderTask(task);
    taskInput.value = "";
    console.log(taskText);
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center py-2 px-4 border-b bg-white rounded-xl";
    const span = document.createElement("span");
    span.className = "flex justify-between cursor-pointer";
    span.textContent = task.text;

    if (task.completed) {
      span.classList.toggle("line-through", "text-gray-300");
    }

    span.addEventListener("click", (e) => {
      task.completed = !task.completed;
      saveTask();

      span.classList.toggle("line-through");
      span.classList.toggle("text-gray-300");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className =
      "ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600";
    deleteButton.addEventListener("click", () => {
      taskArray = taskArray.filter((t) => t.id !== task.id);
      saveTask();
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);
    unorderedList.appendChild(li);
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  }
});
