// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1.  Print a nice output to the console, saying who ssage 
// is either "Mark's BMI is higherhas the higher BMI. The me than John's!" or "John's BMI is higher than Mark's!"
// 2.  Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 
var massM1 = 78
var heightM1 = 1.69
var massJ1 = 92
var heightJ1 = 1.95
var BMIM1 = massM1 / heightM1 ** 2
var BMIJ1 = massJ1 / heightJ1 ** 2
var markHigherBMI
if (BMIJ1 < BMIM1) console.log("Mark's BMI(" + BMIM1 + ") is higher than John's(" + BMIJ1 + ")!")
else console.log("John's BMI(" + BMIJ1 + ") is higher than Mark's(" + BMIM1 + ")!")

var massM2 = 95
var heightM2 = 1.888
var massJ2 = 85
var heightJ2 = 1.76
var BMIM2 = massM2 / heightM2 ** 2
var BMIJ2 = massJ2 / heightJ2 ** 2
if (BMIJ2 < BMIM2) console.log("Mark's BMI(" + BMIM2 + ") is higher than John's(" + BMIJ2 + ")!")
else console.log("John's BMI(" + BMIJ2 + ") is higher than Mark's(" + BMIM2 + ")!")