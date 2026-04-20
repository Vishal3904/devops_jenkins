const add = require('./app.js')

if (add(5,6)===11) {
    console.log("Test Passed");
    process.exit(0);
} else {
    console.log("Test Failed");
    process.exit(1);
}