const fs = require("fs");
const filePath = "./task.json";
const command = process.argv[2];
const argument = process.argv[3];

const loadTask = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTask = (tasks) => {
  const dataJSON = JSON.stringify(tasks, null, 2);
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (taskDescription) => {
  const tasks = loadTask();
  tasks.push({ task: taskDescription });
  saveTask(tasks);
  console.log(`"${taskDescription}" is saved`);
};

const listTasks = () => {
  const tasks = loadTask();
  tasks.forEach((t, index) => console.log(`${index + 1}. ${t.task}`));
};

const removeTask = (index) => {
  const tasks = loadTask();
  if (index < 1 || index > tasks.length) {
    console.log("Invalid task number.");
    return;
  }
  const removed = tasks.splice(index - 1, 1);
  saveTask(tasks);
  console.log(`Removed: "${removed[0].task}"`);
};

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("No command found");
}
