# Data Structures

## Enums

Enums in TypeScript. Enums, short for enumerations, allow you to define a set of named numeric constants. This can make your code more readable and less error-prone by using meaningful names for values.

Here's a basic example of how you can use Enums in TypeScript:

```typescript
// Numeric Enum
enum Direction {
  North,
  South,
  East,
  West,
}

// Using the Enum
let myDirection: Direction = Direction.North;
console.log(myDirection); // Output: 0

// String Enum
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

// Using the String Enum
let myColor: Color = Color.Red;
console.log(myColor); // Output: "RED"
```

In the numeric enum, TypeScript assigns values automatically starting from 0. You can also manually assign values to enum members:

```typescript
enum Days {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
```

Enums can be useful when you have a set of related values that represent a finite set of possibilities, like days of the week, directions, colors, etc.

## Interface

An interface is a way to define the shape or structure of an object. It allows you to specify the names and types of the properties an object must have. Here's a basic example:

```typescript
// Defining an interface
interface Person {
  name: string;
  age: number;
}

// Using the interface to create an object
let myPerson: Person = {
  name: "John",
  age: 30,
};
```

In this example, the Person interface specifies that any object of type Person must have a name property of type string and an age property of type number.

You can also use optional properties in interfaces by adding a ? after the property name:

```typescript
interface Car {
  make: string;
  model: string;
  year?: number; // Optional property
}

let myCar: Car = {
  make: "Toyota",
  model: "Camry",
};
```

`Interfaces can also include methods:`

```typescript
interface Greeter {
  greet(): string;
}

class EnglishGreeter implements Greeter {
  greet() {
    return "Hello, World!";
  }
}
```

Interfaces provide a way to enforce a contract on the structure of objects or classes. They are particularly useful for ensuring that different parts of your codebase adhere to a consistent structure.

## Interface vs Types

`Declaration Merging:`
Interfaces support declaration merging. If you declare multiple interfaces with the same name, TypeScript will automatically merge them into a single interface definition.

```typescript
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

// Merged interface
// { brand: string; model: string; }
```

`Extending and Implementing:`
Interfaces can extend other interfaces, allowing you to create a new interface that inherits properties from an existing one.

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
```

Interfaces can be used for class implementation to enforce that a class has certain properties and methods.

```typescript
interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw() {
    // Implementation
  }
}
```

`Type Aliases:`
Union Types, Intersection Types, and Tuple Labels:

Type aliases support union types, intersection types, and tuple labels, providing more flexibility in creating complex types.

```typescript
type Status = "success" | "error";
type Point = { x: number; y: number };
type Person = { name: string; age: number };
```

`Template Literal Types:`
Type aliases support template literal types, enabling the creation of string literal types based on template patterns.

```typescript
type Greeting = `Hello, ${string}!`;
```

`Mapped Types:`
Type aliases can be used to create mapped types, allowing you to transform the properties of an existing type.

```typescript
type Optional<T> = { [K in keyof T]?: T[K] };
```

`Readonly Properties:`
Type aliases can be used to create types with readonly properties.

```typescript
type Point = { readonly x: number; readonly y: number };
```

`Choosing Between Interfaces and Type Aliases:`
Use interfaces when you need declaration merging, want to extend or implement, or when you're working with instances of classes.

Use type aliases for more complex types, union types, intersection types, and when you need features like template literal types or mapped types.
