// Create a function that takes two parameters of different types and returns their sum. Add appropriate type annotations.
function sum(a, b) {
    return a + b;
}
var add = sum('3', 3);
var adi = { name: 'adi', age: 18, email: 'random@gmail.com' };
// Write a generic function that takes an array of any type and returns the first element of the array.
function getElement(a) {
    return a[0];
}
var arr = [1, 23, 4, 5, 2, 7];
var ele = getElement(arr);
// console.log(ele);
// Implement a generic class called Stack that operates on a stack data structure. It should have methods like push, pop, and isEmpty
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = -1;
        this.stack = [];
    }
    Stack.prototype.push = function (a) {
        this.stack.push(a);
    };
    Stack.prototype.pop = function () {
        this.stack.pop();
    };
    Stack.prototype.isEmpty = function () {
        return this.stack.length === 0;
    };
    return Stack;
}());
var myStack = new Stack();
myStack.push(4);
myStack.pop();
// Create an interface for a Shape with a method area that calculates the area of the shape. Implement this interface for classes representing different shapes like Circle and Rectangle.
// Define an enum for different days of the week. Write a function that takes a day of the week as an argument and returns a message based on whether it's a weekday or weekend
var DAYS;
(function (DAYS) {
    DAYS[DAYS["Sunday"] = 0] = "Sunday";
    DAYS[DAYS["Monday"] = 1] = "Monday";
    DAYS[DAYS["Tuesday"] = 2] = "Tuesday";
    DAYS[DAYS["Wednesday"] = 3] = "Wednesday";
    DAYS[DAYS["Thursday"] = 4] = "Thursday";
    DAYS[DAYS["Friday"] = 5] = "Friday";
    DAYS[DAYS["Saturday"] = 6] = "Saturday";
})(DAYS || (DAYS = {}));
function getDays(a) {
    switch (a) {
        case DAYS.Sunday:
        case DAYS.Saturday:
            return 'Weekend';
        case DAYS.Monday:
        case DAYS.Tuesday:
        case DAYS.Wednesday:
        case DAYS.Thursday:
        case DAYS.Friday:
            return 'Weekday';
        default:
            throw new Error('Invalid Day');
    }
}
console.log(getDays(DAYS.Sunday));
// Generics
function genericFunction(num) {
    return num;
}
var str = genericFunction('Hello');
var num = genericFunction(8);
// Tuples
var tuple1 = [2, 'three'];
// Creating a hookn in normal Js
function useState(num1, num2, num3) {
    return [num1, num2, num3];
}
var _a = useState(0, 0, 0), hello = _a[0], setHello = _a[1];
console.log(hello);
console.log(setHello);
