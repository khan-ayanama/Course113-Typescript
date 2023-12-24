# Setting up Typescript

Setting up TypeScript for an HTML/JS project involves a few steps. TypeScript requires a configuration file (tsconfig.json) to specify compiler options and project settings. Here's a simple guide:

`Install TypeScript:`
You can install TypeScript globally using npm (Node Package Manager). Open your terminal and run:

```bash
npm install -g typescript
```

`Initialize TypeScript Configuration:`
In your project directory, create a tsconfig.json file. You can do this manually or use the TypeScript compiler's initialization command:

```bash
tsc --init
```

This command generates a basic tsconfig.json file. You can customize it according to your project needs.

`Configure tsconfig.json:`
Open the tsconfig.json file and make sure it includes at least the following options:

```json
{
  "compilerOptions": {
    "target": "es5",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```

`"target":` "es5": Specifies the ECMAScript target version. You can choose a different version if needed.
`"outDir":` "./dist": Specifies the output directory for compiled JavaScript files.
`"rootDir":` "./src": Specifies the root directory of your TypeScript source files.
`"strict":` true: Enables strict type-checking options.

`Create Project Structure:`
Organize your project with directories for source code, HTML, and any other assets. For example:

```bash
/your-project
  /src
    app.ts
  index.html
  tsconfig.json
```

`Write TypeScript Code:`
Write your TypeScript code in the src directory. For example, create an app.ts file:

```typescript
// app.ts
function greet(name: string) {
  return `Hello, ${name}!`;
}

const result = greet("World");
console.log(result);
```

`Compile TypeScript:`
Run the TypeScript compiler to convert your TypeScript code to JavaScript. In your terminal, navigate to the project root directory and run:

`Include JavaScript in HTML:`
In your HTML file (index.html), include the compiled JavaScript file:

```html
<!-- index.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TypeScript HTML Project</title>
  </head>
  <body>
    <script src="./dist/app.js"></script>
  </body>
</html>
```

## typescript commands

`Initialize tsconfig.json:`
To create a basic tsconfig.json file, you can use the following command:

```bash
tsc --init
```

This command generates a default tsconfig.json file in your project directory. You can then modify this file to customize the TypeScript compiler settings for your project.

`Compile TypeScript Files:`
To manually compile TypeScript files, you can run:

```bash
tsc
```

This command compiles all TypeScript files in the project based on the settings in tsconfig.json. It generates JavaScript files in the specified outDir.

`Compile Specific TypeScript File:`
To compile a specific TypeScript file, you can specify the filename:

```bash
tsc filename.ts
```

`Watch Mode:`
To enable watch mode and automatically recompile files on changes, use the --watch option:

```bash
tsc --watch
```

This command starts the TypeScript compiler in watch mode, monitoring your TypeScript files for changes and recompiling them automatically.

`Check for TypeScript Version:`
To check the installed TypeScript version, you can use:

```bash
tsc --version
```

`Transpile without tsconfig.json:`
You can use --target and other options directly without a tsconfig.json file. For example:

```bash
tsc --target es5 file1.ts file2.ts
```

This command compiles file1.ts and file2.ts to ES5 without using a tsconfig.json file.

`Generate Declaration Files (.d.ts):`
To generate declaration files (.d.ts files) alongside your JavaScript output, use the --declaration option:

```bash
tsc --declaration
```

Declaration files are useful for providing type information to consumers of your TypeScript code.

`Help and Options:`
To see all available options and commands, you can use:

```bash
tsc --help
```
