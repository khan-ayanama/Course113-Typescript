# Classes

classes provide a way to define blueprints for objects with properties and methods. Here's a basic overview of how you can create and use classes in TypeScript:

`Class Declaration:`

```typescript
class Person {
  // Properties
  name: string;
  age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  sayHello(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
```

`Creating Instances:`

```typescript
// Creating an instance of the Person class
const person1 = new Person("John Doe", 30);

// Accessing properties
console.log(person1.name); // Output: John Doe
console.log(person1.age); // Output: 30

// Calling a method
console.log(person1.sayHello()); // Output: Hello, my name is John Doe and I am 30 years old.
```

`Inheritance:`

```typescript
class Student extends Person {
  // Additional property
  studentId: number;

  // Constructor
  constructor(name: string, age: number, studentId: number) {
    super(name, age); // Call the constructor of the base class
    this.studentId = studentId;
  }

  // Override method
  sayHello(): string {
    return `Hello, I'm a student with ID ${
      this.studentId
    }. ${super.sayHello()}`;
  }
}
```

`Access Modifiers:`
In TypeScript, you can use access modifiers like public, private, and protected to control the visibility of class members:

```typescript
class Example {
  public publicVar: number; // Accessible from anywhere
  private privateVar: string; // Accessible only within the class
  protected protectedVar: boolean; // Accessible within the class and its subclasses

  constructor() {
    this.publicVar = 1;
    this.privateVar = "private";
    this.protectedVar = true;
  }
}
```

`Abstract Classes:`
You can also create abstract classes, which cannot be instantiated directly but can be used as a base class for other classes:

```typescript
abstract class Shape {
  abstract draw(): void; // Abstract method, must be implemented by subclasses
}

class Circle extends Shape {
  draw(): void {
    console.log("Drawing a circle");
  }
}

class Square extends Shape {
  draw(): void {
    console.log("Drawing a square");
  }
}
```
