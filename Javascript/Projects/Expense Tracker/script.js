document.addEventListener("DOMContentLoaded", () => {
  const inputExpenseName = document.getElementById("title");
  const amount = document.getElementById("amount");
  const submitButton = document.getElementById("submit");
  const ul = document.getElementById("expense-list");
  const totalAmount = document.getElementById("total");
  const error = document.getElementById("error-message");

  const expenseArray = [];

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const textFormat = inputExpenseName.value.trim();
    const amountValue = Number(amount.value.trim());

    error.classList.add("hidden"); 

    if (textFormat === "") {
      error.textContent = `Expense name cannot be empty`;
      error.classList.remove("hidden");
      return;
    }

    if (!amountValue || amountValue < 0) {
      validAmount();
      return;
    }

    const expense = {
      id: Date.now(),
      expense: textFormat,
      amount: amountValue,
    };

    expenseArray.push(expense);
    renderTask(expense);

   
    inputExpenseName.value = "";
    amount.value = "";
  });

  function renderTask(expense) {
    const li = document.createElement("li");
    li.className =
      "flex justify-between items-center py-2 px-4 border-b bg-white rounded-xl";

    const span = document.createElement("span");
    span.className = "flex cursor-pointer";
    span.textContent = expense.expense;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className =
      "ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600";

    deleteButton.addEventListener("click", () => {
      const index = expenseArray.findIndex((t) => t.id === expense.id);
      if (index !== -1) {
        expenseArray.splice(index, 1); 
      }
      li.remove();
      updateTotal();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);
    ul.appendChild(li);

    updateTotal();
  }

  function validAmount() {
    error.textContent = `You have entered an invalid amount. Please enter a valid positive number.`;
    error.classList.remove("hidden");
  }

  function updateTotal() {
    const sum = expenseArray.reduce((acc, curr) => acc + curr.amount, 0);
    totalAmount.textContent = `$${sum}`;
  }
});
