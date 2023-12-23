# Types in Typescript

In TypeScript, types play a crucial role in defining the shape and behavior of variables, functions, and other constructs in your code.

`Let's explore some of the fundamental types available in TypeScript:`

- Basic Types:
  a. Boolean:
  a boolean value, either true or false.

  ```typescript
  let isDone: boolean = false;
  ```

  b. Number:
  Represents numeric values, both integers and floating-point numbers.

  ```typescript
  let decimal: number = 6;
  let pi: number = 3.14;
  ```

  c. String:
  Represents textual data.

  ```typescript
  let firstName: string = "John";
  ```

- Array:
  Represents an array of values of a specific type.

```typescript
let numbers: number[] = [1, 2, 3];
let fruits: Array<string> = ["apple", "banana", "orange"];
```

- Tuple:
  Represents an array with a fixed number of elements, where each element may have a different type.

```typescript
let person: [string, number] = ["John", 25];
```

- Enum:
  A way to give more friendly names to sets of numeric values.

  ```typescript
  enum Color {
    Red,
    Green,
    Blue,
  }
  let myColor: Color = Color.Green;
  ```

- Any:
  Represents a variable for which you do not know or do not want to specify the type.

```typescript
let value: any = 5;
value = "Hello";
```

- Void:
  Represents the absence of a type, often used as the return type for functions that do not return a value.

```typescript
function logMessage(): void {
  console.log("This function does not return a value");
}
```

- Null and Undefined:
  TypeScript includes null and undefined as types, useful for representing the absence of a value.

```typescript
let nullValue: null = null;
let undefinedValue: undefined = undefined;
```

- Union Types:
  Allows a variable to have multiple types.

```typescript
let result: number | string;
result = 5;
result = "five";
```

- Type Assertions:
  Allows you to tell TypeScript that you are aware of the type of a value.

```typescript
let length: number = (someValue as string).length;
```

Object Types:
TypeScript allows you to define complex object types using interfaces or type aliases.

```typescript
interface Person {
  name: string;
  age: number;
}

let user: Person = {
  name: "John",
  age: 25,
};
```

These are some of the basic types in TypeScript. As your codebase grows, you may also create your own custom types using interfaces or type aliases to represent more complex structures.
