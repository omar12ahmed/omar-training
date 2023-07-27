import assert from "assert";
import chalk from "chalk";
import { completeTask } from "../utils.mjs";

export const run = async () => {
    // Lesson 1 Ecercises (Javascript Basics)
    // JavaScript Full Course (2023) - Beginner to Pro - Part 1 exercises.
    //
    // 1c. Using math, calculate 10 + 5 (assign it to 'a')
    // 1d. Calculate 20-5 (assing it to 'b')
    // 1e. Calculate 2+2-5 (assign it to 'c')
    // 1i. Your bank account has $100, you pay for lunch and dinner and then earn you salary. Update your balance to reflect this.

    let balance = 100;
    const lunch = 20;
    const dinner = 50;
    const salary = 200;

    //! DO YOUR WORK HERE
    const a = ; // 1c
    const b = ; // 1d
    const c = ; // 1e

    balance = ;

    console.log("a (10 + 5):", a);
    console.log("b (20 - 5):", b);
    console.log("c (2 + 2 - 5):", c);
    console.log("balance:", balance);

    // TESTS:
    const runTests = false;
    if (runTests) {
        try {
            assert.strictEqual(a, 15);
            assert.strictEqual(b, 15);
            assert.strictEqual(c, -1);
            assert.strictEqual(balance, 230);
            completeTask(6);
        } catch (e) {
            console.log(`\n${chalk.red(chalk.bold("Tests failed!"))}\n`)
        }
    }
};