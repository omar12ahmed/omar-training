import assert from "assert";
import { completeTask } from "../utils.mjs";

export const run = async () => {
    // ITTT
    // If this then that... This is a task to start looking at conditional statements. If you don't know what that is, look it up!
    //
    // I have provided a function called is_odd which expects
    // a number. Write the body of the function which returns
    // true if the number is odd and false if the number is even.
    //
    // When you are ready to run the tests, change the value of
    // runTests to true. If all the tests pass, the task will mark
    // itself as completed

    // TESTS:
    const runTests = false;
    if (runTests) {
        assert.strictEqual(is_odd(1), true);
        assert.strictEqual(is_odd(2), false);
        assert.strictEqual(is_odd(3), true);
        assert.strictEqual(is_odd("Potato"), false);

        completeTask(2);
    }
};

function is_odd(number) {
    //! WRITE YOUR FUNCTION HERE!
}
