# Data Structures

## Arrays

In TypeScript, arrays can be defined using square brackets []. You can specify the type of elements the array should contain by adding the type annotation after the colon (:). Here are a few examples:

`Array of Numbers:`

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];
```

`Array of Strings:`

```typescript
const names: string[] = ["John", "Jane", "Doe"];
```

`Array of Mixed Types:`

```typescript
const mixed: (number | string)[] = [1, "two", 3, "four"];
```

Here, (number | string) is a union type, allowing the array to contain both numbers and strings.

`Array using the Array<T> syntax:`

```typescript
const animals: Array<string> = ["lion", "elephant", "zebra"];
```

The Array`<T>` syntax is an alternative way to define arrays, where T represents the type of elements in the array.

`Empty Array:`

```typescript
const emptyArray: number[] = [];
```

You can also declare an empty array and later assign values to it.

`Arrays with Readonly:`
You can use readonly to create arrays that cannot be modified after initialization:

```typescript
const readOnlyNumbers: readonly number[] = [1, 2, 3];
```

This is useful when you want to ensure that the array remains constant throughout its lifecycle.

Remember that TypeScript allows you to work with arrays in a type-safe manner, providing better code completion and catching potential errors during development.

## Union Type

In TypeScript, a union type allows a variable to have multiple types. It is denoted by the pipe (|) symbol between the types. Here's a simple example:

```typescript
// Union type
let myVariable: string | number;

// Assigning values
myVariable = "Hello, TypeScript!";
console.log(myVariable); // Output: Hello, TypeScript!

myVariable = 42;
console.log(myVariable); // Output: 42
```

In this example, myVariable can be either a string or a number. Union types are powerful when you need flexibility in the type of data a variable can hold.

You can also use union types with arrays, objects, or any other TypeScript types. Here are a few more examples:

`Union Type with Arrays:`

```typescript
// Union type with arrays
let myArray: (string | number)[] = ["apple", 3, "banana", 5];
```

`Union Type with Objects:`

```typescript
// Union type with objects
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number };

// Usage
let myShape: Shape;
myShape = { kind: "circle", radius: 5 };
myShape = { kind: "square", sideLength: 4 };
```

In the Shape type, it can represent either a circle or a square. The kind property is a literal type, and it helps narrow down the actual type when working with the variable.

Union types are particularly useful when you want a variable to accept multiple types but still maintain type safety

## Tuples

A tuple is a specific array type that allows you to express an array with a fixed number of elements, and each element can have its own type. Tuples are defined using square brackets [] and the types of individual elements are specified in order. Here's an example:

```typescript
// Tuple type
let employee: [string, number];

// Assigning values
employee = ["John Doe", 30];

// Accessing elements
const name: string = employee[0]; // "John Doe"
const age: number = employee[1]; // 30
```

In this example, employee is a tuple with two elements: a string representing the name and a number representing the age. The order and types of elements are fixed.

Tuples are useful when you want to ensure that an array has a specific length and each element has a predefined type. However, it's worth noting that accessing elements by index without considering the context might lead to confusion. TypeScript 4.0 introduced labeled tuples to address this:

```typescript
// Labeled Tuple type
let person: [name: string, age: number];

// Assigning values
person = ["John Doe", 30];

// Accessing elements using labels
const personName: string = person.name; // "John Doe"
const personAge: number = person.age; // 30
```

Labeled tuples improve code readability by allowing you to access elements using the specified labels.
