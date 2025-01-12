// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).
// Your tasks:
// 1.  Store Mark's and John's mass and height in variables
// 2.  Calculate both their BMIs using the formula (you can even implement both 
// versions)
// 3.  Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.
// Test data:
// §  Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall.
// §  Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tall.
var massM1 = 78
var heightM1 = 1.69
var massJ1 = 92
var heightJ1 = 1.95
var BMIM1 = massM1 / heightM1 ** 2
var BMIJ1 = massJ1 / heightJ1 ** 2
var markHigherBMI
if (BMIJ1 < BMIM1) markHigherBMI = true
else markHigherBMI = false
console.log(BMIM1)
console.log(BMIJ1)
console.log(markHigherBMI)

var massM2 = 95
var heightM2 = 1.888
var massJ2 = 85
var heightJ2 = 1.76
var BMIM2 = massM2 / heightM2 ** 2
var BMIJ2 = massJ2 / heightJ2 ** 2
if (BMIJ2 < BMIM2) markHigherBMI = true
else markHigherBMI = false
console.log(BMIM2)
console.log(BMIJ2)
console.log(markHigherBMI)