import assert from "assert";
import { completeTask } from "../utils.mjs";

export const run = async () => {
    // ITTT
    // If this then that... This is a task to start looking at conditional statements. If you don't know what that is, look it up!
    //
    // I have provided a function called isOdd which expects
    // a number. Write the body of the function which returns
    // true if the number is odd and false if the number is even.
    //
    // When you are ready to run the tests, change the value of
    // runTests to true. If all the tests pass, the task will mark
    // itself as completed

    console.log(isOdd(42));

    // TESTS:
    const runTests = false;
    if (runTests) {
        assert.strictEqual(isOdd(1), true);
        assert.strictEqual(isOdd(2), false);
        assert.strictEqual(isOdd(3), true);
        assert.strictEqual(isOdd("Potato"), false);

        completeTask(2);
    }
};

function isOdd(number) {
    //! WRITE YOUR FUNCTION HERE!
    if (number % 2 === 1) {
        return true;
    } else {
        return false;
    }
}
