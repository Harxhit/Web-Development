# 📝 What I've Learned in Building a Node.js CLI Task Manager

In this section, I learned the basics of building a **Command Line Interface (CLI)** application using **Node.js**. This was a great hands-on way to understand key concepts in both **JavaScript** and **Node.js**.

---

## 🚀 Key Concepts Learned

### 1. **CLI Basics**

- How to build a **Command Line Interface** tool that interacts with the user through terminal/command prompt.
- Processing **command-line arguments** using `process.argv`.
- Understanding how the program responds to commands entered in the terminal (like `add`, `list`, and `remove`).

### 2. **File System Operations with Node.js**

- Using the built-in **`fs` module** in Node.js to interact with files.
- **Reading from** and **writing to** files (in this case, `task.json`) for task persistence.
- Using **JSON** format to store and retrieve data from the file system.

### 3. **CRUD Operations (Create, Read, Update, Delete)**

- **Create**: Adding new tasks to the list stored in `task.json`.
- **Read**: Displaying all tasks to the user.
- **Delete**: Removing tasks by index from the task list.

### 4. **Error Handling**

- Using `try-catch` blocks to handle errors (like file not being found or invalid input) and ensure the program doesn’t crash unexpectedly.

### 5. **JavaScript Fundamentals**

- Working with **arrays** and **objects** to store tasks.
- Using methods like `forEach` to loop through the array of tasks and display them.
- Writing modular code using **functions** to keep the code clean and organized.

---

## 📂 Next Steps & Possible Improvements

1. **Advanced Features**:

   - Add more features such as editing tasks, setting task deadlines, or marking tasks as complete.

2. **Error Handling**:

   - Improve error handling to cover edge cases like invalid commands or malformed inputs.

3. **Third-Party Libraries**:

   - Use libraries like `yargs` or `commander` to parse command-line arguments more effectively.

4. **Persistent Data Storage**:
   - Consider using a database like **MongoDB** or **SQLite** for more scalable data storage.

---

## 💡 Conclusion

Building this simple **task manager CLI app** was a great way to learn how to work with **Node.js**, interact with the file system, and handle user input in the command line. This project also helped me solidify my understanding of basic **JavaScript** concepts and **CRUD operations**.

---

## 📄 Notes

- This project uses a simple `task.json` file to store the tasks.
- The commands available in the app are `add`, `list`, and `remove`.
