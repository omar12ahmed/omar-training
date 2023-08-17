const container = document.getElementById("listContainer");
const titleInput = document.getElementById("taskTitle");
let subtitleInput = document.getElementById("SubtitleInput");

const addTaskButton = document.getElementById("add-task");
const DeleteInput = document.getElementById("delete-text");
const taskDelete = document.getElementById("delete-button");
const toDo = document.getElementById("To-do");
const inProgress = document.getElementById("In-progress");
const completed = document.getElementById("Completed");
// const taskItems = document.getElementsByClassName("card");

// create the shape of the task
// create an array of dummy tasks

taskItems = [
    {
        id: 0,
        title: "Work",
        subtitle: "Create a Task Manager App",
        text: "Create a task management App using HTML, CSS and Javascript",
        status: "In-progress"
    },
    {
        id: 1,
        title: "Goal cards",
        subtitle: "Gym",
        text: "Establish a regular exercise routine and maintain a healthy lifestyle",
        status: "To-do"
    },
    {
        id: 2,
        title: "Goal cards",
        subtitle: "Travel",
        text: "Travel to Australia before the end of 2023 and maybe travel to a new country twice in 2024",
        status: "To-do"
    },
    {
        id: 3,
        title: "Work",
        subtitle: "Work-life",
        text: "Develop and maintain a healthy work-life balance",
        status: "In-progress"
    }
];

// create a function to add a task to the array

/*function form(e) {
    if (e.preventDefault) e.preventDefault();
    return false;

    if (form.attachEvent) {
        form.attachEvent("submit");
    } else {
        form.addEventListener("submit");
    }
}*/

function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    // getting title
    // getting subtitle
    // getting text

    console.log(e);

    let form = document.getElementById("my-form");
    const addTaskButton = document.getElementById("add-task");
    const formData = new FormData(form, addTaskButton);

    // create a task
    const task = {
        id: taskItems.length,
        title: formData.get("title"),
        subtitle: formData.get("subtitle"),
        text: formData.get("text"),
        status: "To-do"
    };

    // add task to taskItems
    taskItems.push(task);

    // rerender
    render();
}

// delete

let form = document.getElementById("my-form");
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}
function render() {
    document.getElementById("To-do").innerHTML = "";
    document.getElementById("In-progress").innerHTML = "";
    document.getElementById("Completed").innerHTML = "";

    taskItems.forEach((task) => {
        const html = `<div class="card"> id: ${task.id}, title: ${task.title}, subtitle: ${task.subtitle}, text: ${task.text}, status: ${task.status} </div>`;
        const card = document.createRange().createContextualFragment(html);
        if (task.status === "To-do") {
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
