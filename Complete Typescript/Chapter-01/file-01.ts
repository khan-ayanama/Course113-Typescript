// Typescript is Javascript wrapper library
// Typescript Compiler
// Installation: npm i -g typescript
// Compiling Typescript: tsc file.ts

console.log("Hello World!!");

function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}`);
}

// Here it requires two arguments hence showing an error
greet("Ayan");

// Emitting with Errors
// Typescript will compile ts file whether there is an error or not, if you want to stop creating js file when there is an error
// tsc --noEmitOnError file.ts
