// Explicit Typing
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

greet("Ayan Khan", new Date());

// Typescript has the ability to rewrite the code from modern Ecmascript to older js code
