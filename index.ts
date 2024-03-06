// Create a function that takes two parameters of different types and returns their sum. Add appropriate type annotations.

function sum(a: string, b: number) {
  return a + b;
}

let add = sum('3', 3);
// console.log(add);

// Define an interface for a Person with properties like name (string), age (number), and email (string). Then, create an object of type Person and ensure it adheres to the interface.

interface Person {
  name: string;
  age: number;
  email: string;
}

let adi: Person = { name: 'adi', age: 18, email: 'random@gmail.com' };

// Write a generic function that takes an array of any type and returns the first element of the array.

function getElement(a: number[]): number {
  return a[0];
}

let arr = [1, 23, 4, 5, 2, 7];

let ele = getElement(arr);
// console.log(ele);

// Implement a generic class called Stack that operates on a stack data structure. It should have methods like push, pop, and isEmpty

class Stack {
  top: number = -1;
  stack: number[] = [];

  push(a: number): void {
    this.stack.push(a);
  }

  pop() {
    this.stack.pop();
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}

let myStack = new Stack();

myStack.push(4);
myStack.pop();

// Create an interface for a Shape with a method area that calculates the area of the shape. Implement this interface for classes representing different shapes like Circle and Rectangle.

// Define an enum for different days of the week. Write a function that takes a day of the week as an argument and returns a message based on whether it's a weekday or weekend

enum DAYS {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function getDays(a: DAYS): string {
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

// Union experiment

type Validity = 'Invalid' | 'Valid';

// Generics

function genericFunction<T>(num: T): T {
  return num;
}

let str = genericFunction<string>('Hello');
let num = genericFunction<number>(8);

// Tuples

let tuple1: [number, string] = [2, 'three'];

// Creating a hookn in normal Js

function useState(num1: number, num2: number, num3: number): number[] {
  return [num1, num2, num3];
}

const [hello, setHello] = useState(0, 0, 0);
console.log(hello);
console.log(setHello);

let arr2 = ['tree', 'leaves', 'poo'];

arr2.map((ele) => {
  return `${ele}`;
});

function twoReturn(something: number) {
  if (something > 0) {
    return 'hello';
  }

  return false;
}
