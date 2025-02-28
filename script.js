//Init(Create) an empty array element called tasks
let tasks = [];

//Add an ON CLICK event listener to the "add task button" that calls a function
document.getElementById("addTaskBtn").addEventListener("click", function () {
  //Get value of input box and store it in a variable called taskInput
  let taskInput = document.getElementById("taskInput").value;

  //Check if taskInput has value or smth in it
  if (taskInput) {
    // Add the new tasks to the task array
    tasks.push(taskInput);

    //Clear the input field after adding the task
    document.getElementById("taskInput").value = "";

    //Call the function to update the task list display
    displayTasks();
  }
});

//A function that will display all tasks into lists
function displayTasks() {
  //Select the unordered list (tasklist) in the HTML
  let taskList = document.getElementById("taskList");

  //Clear the existing task list before updating it
  taskList.innerHTML = "";

  //Loop through every task in the array and create a list item
  tasks.forEach((task, index) => {
    // create a new <li> element for each task
    let li = document.createElement("li");

    //Add CSS classes for styling
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    li.innerHTML = `${task} <button class='btn btn-success btn-sm' onclick = 'removeTask(${index})'> √ </button>`;

    //Append  the new task to the task list
    taskList.appendChild(li);
  });
}

// Function to remove a task from the list when "√" button is clicked
function removeTask(index) {
  //Remove the task at the given index from the array
  tasks.splice(index, 1);
  //call the function to update the task list display
  displayTasks();
}

//Event listener for "Clear All Tasks" button
document.getElementById("clearTaskBtn").addEventListener("click", function () {
  //Empty the task array to remove all tasks
  tasks = [];
  //Call the function to update the task list display
  displayTasks();
});
