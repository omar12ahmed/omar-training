import { completeTask } from "../utils.mjs";

export const run = () => {
    // It works!
    // Print "Hello World!" to the console.

    //! DO YOUR WORK HERE

    console.log("hello world!");

    // When you see "Hello World!" in the console, mark this task as complete by setting taskCompleted to true.
    const taskCompleted = true;
    if (taskCompleted) {
        completeTask(1);
    }
};
