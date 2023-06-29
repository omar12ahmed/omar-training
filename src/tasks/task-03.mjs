import assert from "assert";
import { completeTask } from "../utils.mjs";

export const run = async () => {
    // Loops & Maths
    // When given an array of numbers, print the sum of all the numbers
    //
    // I have provided a function declatation called sumArray which takes
    // an array of numbers and returns the sum of all the numbers in the
    // array. Write the body of the function.
    //
    // When you are ready to run the tests, change the value of
    // runTests to true. If all the tests pass, the task will mark
    // itself as completed

    // TESTS:
    const runTests = false;
    if (runTests) {
        assert.strictEqual(sumArray([1, 1]), 2);
        assert.strictEqual(sumArray([1, 5, 10]), 16);

        completeTask(3);
    }
};

function sumArray(numberArray) {
    //! WRITE YOUR FUNCTION HERE!
}
