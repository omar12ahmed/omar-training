import { readFile } from "fs/promises";
import chalk from "chalk";
import { readdirSync, readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { join, extname } from "path";
import { DateTime } from "luxon";

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "../");
const tasksDir = join(__dirname, "tasks");

export const logTasks = async () => {
    console.log(chalk.bold("Tasks:"));
    const tasks = JSON.parse(
        await readFile(new URL("./tasks/tasks.json", import.meta.url))
    );

    for (const task of tasks) {
        console.log(
            `- ${
                task.completed ? chalk.greenBright("✔") : chalk.blue("x")
            } [#${String(task.id).padStart(2, "0")}] ${
                task.completed
                    ? chalk.strikethrough(`${task.title}: `)
                    : chalk.blue(chalk.bold(`${task.title}: `))
            }${
                task.completed
                    ? chalk.strikethrough(task.description)
                    : task.description
            }${task.completed ? ` (${task.dateCompleted})` : ""}`
        );
    }
    console.log();
};

export const runTasks = async () => {
    // Read the files in the tasks directory
    const taskFiles = readdirSync(tasksDir);

    // Filter for .mjs files and import/run each one
    const promises = [];

    taskFiles
        .filter((file) => extname(file) === ".mjs")
        .forEach(async (file) => {
            const filePath = join(tasksDir, file);
            promises.push(import(filePath).then((module) => module.run()));
        });

    await Promise.all(promises);
    console.log();
};

export function completeTask(taskId) {
    // Read the JSON file
    const filePath = join(__dirname, "tasks", "tasks.json");
    const tasks = JSON.parse(readFileSync(filePath, "utf-8"));

    // Find the task with the provided ID
    const taskToUpdate = tasks.find(
        (task) => task.id === taskId && task.completed === false
    );

    if (taskToUpdate) {
        // Update the task properties
        taskToUpdate.completed = true;
        taskToUpdate.dateCompleted = DateTime.now().toFormat("yyyy-MM-dd");
    }

    // Write the updated tasks back to the JSON file
    writeFileSync(filePath, JSON.stringify(tasks, null, 4));
}
