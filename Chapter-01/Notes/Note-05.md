# Objects

In TypeScript, objects play a crucial role, and the language allows you to define and work with object types in a statically typed manner. Here's an overview of how objects are defined and used in TypeScript:

`Object Type Declaration:`
You can declare an object type by specifying the types of its properties:

```typescript
// Object type declaration
type Person = {
  name: string;
  age: number;
  isStudent?: boolean; // Optional property
};
```

In this example, Person is a type that represents an object with properties name of type string, age of type number, and an optional property isStudent of type boolean.

`Object Initialization:`
You can create objects of a specific type:

```typescript
// Object initialization
let john: Person = {
  name: "John",
  age: 25,
  isStudent: false,
};
```

`Readonly Properties:`
You can make properties readonly by using the readonly modifier:

```typescript
type Point = {
  readonly x: number;
  readonly y: number;
};

let p: Point = { x: 10, y: 20 };
// p.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.
```

`Object Methods:`
You can define methods within an object type:

```typescript
type Calculator = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};

let calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};
```

`Object Spread:`
You can use the object spread syntax to create a shallow copy of an object:

```typescript
let original = { a: 1, b: 2 };
let copy = { ...original, c: 3 };
// Now 'copy' is { a: 1, b: 2, c: 3 }
```

`Duck Typing:`
TypeScript uses a structural typing system, meaning that if an object has the expected properties, it's considered of the expected type, regardless of its declared type.

```typescript
    Copy code
    type Point2D = { x: number; y: number };
    type Point3D = { x: number; y: number; z: number };
    let point2D: Point2D = { x: 1, y: 2 };
    let point3D: Point3D = point2D; // No error, as Point2D is a subset of Point3D
```

These are some basics of working with objects in TypeScript. Object types provide a way to define the structure of objects, enforce type safety, and enhance code readability and maintainability.

## Functions with objects

`Function that Accepts an Object:`

```typescript
// Function that accepts an object parameter
function printPerson(person: { name: string; age: number }): void {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

// Usage
let john = { name: "John", age: 30 };
printPerson(john);
```

In this example, the printPerson function takes an object parameter with properties name and age. This enforces that the argument passed to the function should have the specified structure.

`Function that Returns an Object:`

```typescript
Copy code
    // Function that returns an object
    function createPerson(name: string, age: number): { name: string; age: number } {
        return { name, age };
    }

    // Usage
    let mary = createPerson("Mary", 25);
    console.log(mary); // Output: { name: 'Mary', age: 25 }
```

Here, the createPerson function takes individual parameters (name and age) and returns an object with properties name and age. The return type of the function specifies the structure of the returned object.

`Using Interfaces for Object Types:`
You can enhance code readability and reusability by using interfaces to define object types:

```typescript
// Interface for a person object
interface Person {
  name: string;
  age: number;
}

// Function that accepts a Person object
function printPerson(person: Person): void {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

// Function that returns a Person object
function createPerson(name: string, age: number): Person {
  return { name, age };
}

// Usage
let john: Person = createPerson("John", 30);
printPerson(john);
```

Using interfaces makes it easier to define and enforce consistent object structures throughout your codebase.

## Type Alias

```typescript
// Type alias for a string or number
type MyStringOrNumber = string | number;

// Type alias for a person object
type Person = {
  name: string;
  age: number;
};

// Type alias for a function type
type MathOperation = (a: number, b: number) => number;
```
