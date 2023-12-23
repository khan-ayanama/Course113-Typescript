# Typescript

## Typescript is not you think

Typescript only does static checking, it analyze as we type.

- Typescript transpile code into javascript.
- It is development tool ultimately it converts code into JS.

## Installing Typescript

To install TypeScript, you need to use npm, the Node.js package manager. Here are the steps to install TypeScript globally on your machine:

`Install Node.js and npm:`
If you don't have Node.js and npm installed, you can download and install them from the official website.

`Install TypeScript:`
Once you have Node.js and npm installed, you can install TypeScript globally using the following command:

```bash
    npm install -g typescript
```

The -g flag installs TypeScript globally, making it available as a command-line tool.

`Verify TypeScript Installation:`
To verify that TypeScript has been installed successfully, run the following command:

```bash
    tsc -v
```

This command should print the version of TypeScript installed.

Now you have TypeScript installed on your machine, Boss! You can start using TypeScript by creating .ts files, writing TypeScript code, and then compiling it to JavaScript using the tsc command.

For example, create a file named app.ts with the following content:

```typescript
// app.ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message: string = greet("Boss");
console.log(message);
```

Compile the TypeScript code to JavaScript by running:

```bash
    tsc app.ts
```

This will generate an app.js file that you can execute using Node.js:

```bash
    node app.js
```
