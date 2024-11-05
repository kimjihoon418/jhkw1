const lib = require("./jhkw1/lib");

const command = process.argv[2];
const numbers = process.argv.slice(3).map(Number);

let result;
switch (command) {
    case "avg":
        result = lib.avg(numbers);
        break;
    case "prime":
        result = lib.prime(numbers[0]);
        break;
    case "factorial":
        result = lib.factorial(numbers[0]);
        break;
    default:
        console.log("Invalid command");
        process.exit(1);
}

console.log(result);
