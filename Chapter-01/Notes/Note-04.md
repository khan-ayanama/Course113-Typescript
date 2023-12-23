# Basics

## Type Inference

Type inference is a powerful feature that allows the compiler to automatically determine and assign types to variables based on their usage. This helps catch type-related errors during development without the need for explicit type annotations in many cases.

```typescript
// Variable 'message' is inferred as type string
let message = "Hello, Boss!";

// Variable 'count' is inferred as type number
let count = 42;

// Variable 'isSuccess' is inferred as type boolean
let isSuccess = true;

// Function parameter and return types are inferred
function add(x: number, y: number) {
  return x + y;
}

let result = add(5, 7); // 'result' is inferred as type number
```

## Any

When you use the any type, it essentially tells the TypeScript compiler to skip type checking for that particular variable or expression

```typescript
let dynamicValue: any = "This can be any type!";
console.log(dynamicValue);

dynamicValue = 42; // Now it's a number
console.log(dynamicValue);

dynamicValue = true; // Now it's a boolean
console.log(dynamicValue);

// You can call any method on an 'any' type without compilation errors
dynamicValue.someMethod();

// You can access any property on an 'any' type without compilation errors
console.log(dynamicValue.someProperty);
```

`Note:` Generally we shouldn't use any keyword as it is not any specific keyword, which really defies the logic of using typescript.

## Functions

Functions in TypeScript work similarly to JavaScript functions, but TypeScript allows you to add type annotations to parameters and return values, providing static type checking. Here's an overview of how you can work with functions in TypeScript:

`Function Declaration:`

```typescript
// Function with explicit type annotations for parameters and return type
function add(x: number, y: number): number {
  return x + y;
}

// Function without explicit return type (inferred by TypeScript)
function multiply(a: number, b: number) {
  return a * b;
}
```

`Optional and Default Parameters:`

```typescript
// Optional parameter denoted by '?'
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

// Default parameter value
function exponentiate(base: number, exponent: number = 2): number {
  return Math.pow(base, exponent);
}
```

`Rest Parameters:`

```typescript
// Rest parameters denoted by '...'
function sum(numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Using rest parameter
function sumRest(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
```

`Function Types:`

```typescript
// Function type declaration
type MathOperation = (a: number, b: number) => number;

// Function using the type
const addition: MathOperation = (x, y) => x + y;
const subtraction: MathOperation = (x, y) => x - y;
```

`Callback Functions:`

```typescript
// Callback function
function doSomethingAsync(callback: (result: string) => void) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const result = "Operation complete!";
    callback(result);
  }, 1000);
}

// Using the callback function
doSomethingAsync((result) => {
  console.log(result);
});
```

`Generics in Functions:`

```typescript
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Usage with explicit type
let resultString: string = identity("Hello, Boss!");

// Compiler infers the type
let resultNumber = identity(42);
```

These are just some basics of working with functions in TypeScript. Using types in functions enhances code readability, catches errors early in the development process, and makes your code more maintainable
