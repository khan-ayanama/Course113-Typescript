# React with Typescript

Files are defined as .ts or .tsx files.

## Typing Props

Here we use type object GreetProps which is the structure of props object.
`Suggestion:` When bulding application use type and when build packages use interface.
Basic Props:

```tsx
// App.tsx
import { Greet } from "./components/Greet";

function App() {
  return (
    <>
      <Greet name="Ayan Khan" messageCount={20} isLoggedIn={false} />
    </>
  );
}

export default App;

// Greet.tsx
type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name} You have ${props.messageCount} unread messages!!`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
```

## Object Props

```tsx
// App.tsx
import { Person } from "./components/Person";

function App() {
  const personName = {
    first: "Tony",
    last: "Stark",
  };
  return (
    <>
      <Person name={personName} />
    </>
  );
}

export default App;

// Person.tsx
type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: PersonProps) => {
  return (
    <div>
      <p>
        {props.name.first} {props.name.last}
      </p>
    </div>
  );
};
```

## Array Props

```tsx
// App.tsx
import { Hero } from "./components/Hero";

function App() {
  const nameList = [
    { first: "Tony", last: "Stark" },
    { first: "Steve", last: "Rogers" },
    { first: "Bruce", last: "Banner" },
  ];
  return (
    <>
      <Hero names={nameList} />
    </>
  );
}

export default App;

// Hero.tsx
type HeroListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const Hero = (props: HeroListProps) => {
  return (
    <div>
      {props.names.map((name) => (
        <li>
          {name.first} {name.last}
        </li>
      ))}
    </div>
  );
};
```

## Advance Data Types

### Props with options

```tsx
// App.tsx
import { Status } from "./components/Status";

function App() {
  return (
    <>
      <Status status="success" />
    </>
  );
}

export default App;

// Status.tsx
type StatusProps = {
  status: "loading" | "success" | "error";
};
export const Status = (props: StatusProps) => {
  let message;
  if (props.status == "loading") {
    message = "Loading...";
  } else if (props.status == "success") {
    message = "Data fetched Succesfully";
  } else if (props.status == "error") {
    message = "Error fetching Data";
  }
  return (
    <div>
      <h2>Staus:- {message}</h2>
    </div>
  );
};
```

### props of children type

```tsx
// App.tsx
import { Heading } from "./components/Heading";

function App() {
  return (
    <>
      <Heading>Placeholder Text</Heading>
    </>
  );
}

export default App;

// Heading.tsx
type HeadingProps = {
  children: string;
};
export const Heading = (props: HeadingProps) => {
  return (
    <div>
      <h3>{props.children}</h3>
    </div>
  );
};
```

### Props as React Component

Here we used `children: React.ReactNode;`

```tsx
// App.tsx
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";

function App() {
  return (
    <>
      <Oscar>
        <Heading>Oscar Issac is playing Moon Knight!!</Heading>
      </Oscar>
    </>
  );
}

export default App;

// Oscar.tsx
type OscarProps = {
  children: React.ReactNode;
};
export const Oscar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};
```

`Optional Props:`

Here we used `messageCount?: number;`

```tsx
// App.tsx
import { Greet } from "./components/Greet";

function App() {
  return (
    <>
      // Here message count is not passed
      <Greet name="Ayan Khan" isLoggedIn={false} />
    </>
  );
}

export default App;

// Greet.tsx
type GreetProps = {
  name: string;
  //   Here we made message count optional
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  // If messageCount prop is not passed then set it's value equal to zero
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name} You have ${props.messageCount} unread messages!!`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
```

## Event Props

### onClick

Here we used `React.MouseEvent<HTMLButtonElement>`

```tsx
// App.tsx
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
    </>
  );
}

export default App;

// Button.tsx
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={(event) => props.handleClick(event, 1)}>Button</button>
  );
};
```

### onChange

Here we used `React.ChangeEvent<HTMLInputElement>`

```tsx
// App.tsx
import { Input } from "./components/Input";

function App() {
  return (
    <>
      <Input value="" handleChange={(event) => console.log(event)} />
    </>
  );
}

export default App;

// Input.tsx
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return <input type="text" value={props.value} onChange={handleInputChange} />;
};
```

## Style Props

Here we use `React.CSSProperties`

```tsx
// App.tsx
import { Container } from "./components/Container";

function App() {
  return (
    <>
      <Container
        styles={{ border: "1px solid red", padding: "1rem", display: "flex" }}
      />
    </>
  );
}

export default App;

// Container.tsx
type ContainerProps = {
  styles: React.CSSProperties;
};
export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Container</div>;
};
```

`Tips`

- We can destructure props.
- We can import and export types.
- We can use types in more than one files.
