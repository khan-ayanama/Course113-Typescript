# Typescript with React

## useState Hook

`Normally variable infer value automatically from typescript`

```tsx
import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const hanldeLogin = () => {
    setIsLoggedIn(true);
  };
  const hanldeLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={hanldeLogin}>Login</button>
      <button onClick={hanldeLogout}>Logout</button>
      <div>User is {isLoggedIn ? "Logged In" : "Logged Out"}</div>
    </div>
  );
};
```

`Future Value of useState where you need to define the type`

```tsx
import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const hanldeLogin = () => {
    setUser({
      name: "Ayan",
      email: "ayan@gmail.com",
    });
  };
  const hanldeLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={hanldeLogin}>Login</button>
      <button onClick={hanldeLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
```

`When you're sure there will be user and it's value will not be null`

```tsx
import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const hanldeLogin = () => {
    setUser({
      name: "Ayan",
      email: "ayan@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={hanldeLogin}>Login</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
```

## useReducerHook

```tsx
import { useReducer } from "react";

const intialState = { count: 0 };

type CounterAction = {
  type: string;
  payload: number;
};

type CounterState = {
  count: number;
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
    </div>
  );
};
```

`More Strict Action Type in useReducer`

```tsx
import { useReducer } from "react";

const intialState = { count: 0 };

// Here is the more strictier version of Type
type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;
type CounterState = {
  count: number;
};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return intialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
```
