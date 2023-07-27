import assert from "assert";
import { completeTask } from "../utils.mjs";

export const run = async () => {
    // Car Go Vroom!
    // Create a car object with a make, model, year, colour,
    // and an accelerator.
    //
    // I've given you a variable `car`, assign to that variable
    // an object with the following properties:
    // - make (string)
    // - model (string)
    // - year (number)
    // - colour (string)
    // - accelerate (function)
    // The accelerate function should return the string "Vroom!"
    //
    // When you are ready to run the tests, change the value of
    // runTests to true. If all the tests pass, the task will mark
    // itself as completed

    //! DO YOUR WORK HERE
    const car = {
        make: "Nissan",
        model: "Juke",
        year: 2018,
        colour: "blue",
        accelerate: function () {
            return "Vroom!";
        }
    };

    console.log(car.make);

    // TESTS:
    const runTests = true;
    if (runTests) {
        assert.strictEqual(checkCar(car), "Vroom!");
        assert.strictEqual(Object.keys(car).includes("make"), true);
        assert.strictEqual(Object.keys(car).includes("model"), true);
        assert.strictEqual(Object.keys(car).includes("year"), true);
        assert.strictEqual(Object.keys(car).includes("colour"), true);
        assert.strictEqual(typeof car.make, "string");
        assert.strictEqual(typeof car.model, "string");
        assert.strictEqual(typeof car.year, "number");
        assert.strictEqual(typeof car.colour, "string");
        assert.strictEqual(typeof car.accelerate, "function");

        completeTask(5);
    }
};

// Ignore this function, it's just to check your work
function checkCar(car) {
    return car.accelerate();
}
