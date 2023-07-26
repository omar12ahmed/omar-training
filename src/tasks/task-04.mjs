import assert from "assert";
import { completeTask } from "../utils.mjs";

export const run = async () => {
    // 8 Days a Week
    // Can you tell me if I should be working or not.
    //
    // Write a function called amIWorking which takes a day (Monday,
    // Tuesday, etc) and returns "at work" if it is a weekday and "at
    // home" if it is a weekend.
    //
    // When you are ready to run the tests, change the value of
    // runTests to true. If all the tests pass, the task will mark
    // itself as completed

    // TESTS:
    const runTests = true;
    if (runTests) {
        assert.strictEqual(amIWorking("Monday"), "at work");
        assert.strictEqual(amIWorking("Tuesday"), "at work");
        assert.strictEqual(amIWorking("Wednesday"), "at work");
        assert.strictEqual(amIWorking("Thursday"), "at work");
        assert.strictEqual(amIWorking("Friday"), "at work");
        assert.strictEqual(amIWorking("Saturday"), "at home");
        assert.strictEqual(amIWorking("Sunday"), "at home");

        completeTask(4);
    }
};
function amIWorking(day) {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const weekends = ["Saturday", "Sunday"];

    if (weekdays.includes(day)) {
        return "at work";
    } else if (weekends.includes(day)) {
        return "at home";
    }
}
console.log("Sunday");

//! DO YOUR WOKR HERE
