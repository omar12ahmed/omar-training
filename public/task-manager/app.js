const container = document.getElementById("listContainer");
let taskInput = document.getElementById("task-text");
const addTaskButton = document.getElementById("add-task");
const DeleteInput = document.getElementById("delete-text");
const taskDelete = document.getElementById("delete-button");
const toDo = document.getElementById("To-do");
const inProgress = document.getElementById("In-progress");
const completed = document.getElementById("Completed");
const taskItems = document.getElementsByClassName("card");

// create the shape of the task
// create an array of dummy tasks

taskItems = [
    {
        id: 0,
        title: "Work",
        subtitle: "Create a Task Manager App",
        text: "Create a task management App using HTML, CSS and Javascript",
        Status: "In-progress"
    },
    {
        id: 1,
        title: "Goal cards",
        subtitle: "Gym",
        text: "Establish a regular exercise routine and maintain a healthy lifestyle",
        Status: "To-do"
    },
    {
        id: 2,
        title: "Goal cards",
        subtitle: "Travel",
        text: "Travel to Australia before the end of 2023 and maybe travel to a new country twice in 2024",
        Status: "To-do"
    },
    {
        id: 3,
        title: "Work",
        subtitle: "Work-life",
        text: "Develop and maintain a healthy work-life balance",
        Status: "In-progress"
    }
];

function render() {
    taskItems.forEach((task) => {
        const html = `<div class="card"> id: ${task.id}, title: ${task.title}, subtitle: ${task.subtitle}, text: ${task.text}, status: ${task.Status} </div>`;
        const card = document.createRange().createContextualFragment(html);
        if (task.Status === "To-do") {
            toDo.appendChild(card);
        } else if (task.status === "In-progress") {
            inProgress.appendChild(card);
        } else {
            completed.appendChild(card);
        }
    });

    // taskItems.forEach((task) => {
    //     task.innerHTML = "";
    // });

    // taskItems.addEventListener("click", () => {
    //     console.log(`card ${task.id}`);
    // });
}

render();

// taskItems.forEach((task) => {
//     task.addEventListener("click", (event) => {
//         console.log("target:", event.target);
//         console.log("currentTarget:", event.currentTarget);
//     });
// });

// const taskContainer = document.querySelectorAll(".task-container");
// taskContainer.forEach(addContainerListeners);

// let dragged;
// taskItems = document.querySelectorAll(".draggable-element");
// taskItems.forEach((task) => {
//     task.addEventListener("drag", (event) => {
//         console.log("dragging");
//     });
// });

// for each task
//    - add event listener to "click"
//    - find all .task-containers
//    - find all .draggable-element
//           - add event listener to "drag"

/*
//create a new task when clicking on the add button
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
    } else {
        const textNode = document.createTextNode("task-text");
        taskItems.appendChild(textNode);
        taskInput.value = "";

        const cardContent = [
            "card 1 Content",
            "card 2 Content",
            "card 3 Content",
            "card 4 Content"
        ];
        const fragment = document.createDocumentFragment();
        for (const content of cardContent) {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = ` <div class="card-body">
          <p class="card-text">${content}</p>
          </div>`;
        }

        document.getElementById("card").appendChild(taskItems);
    }

    taskItems.textcontent = taskInput;
});

function addTask() {
    let input = document.getElementById("task-text");
    let task = input.value;
    input.value = "";
}

let dummyTask = ["Task 1", "Task 2", "Task 3", "Task 4"];

*/
