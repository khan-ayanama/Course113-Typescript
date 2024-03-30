import { ReactNode, createContext, useContext, useState } from "react";

type ToDoProviderProps = {
  children: ReactNode;
};

type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type ToDoContext = {
  todos: Todo[];
  handleAddToDo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

const toDoContext = createContext<ToDoContext | null>(null);

export const ToDoProvider = ({ children }: ToDoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddToDo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      console.log(newTodos);
      return newTodos;
    });
  };

  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newTodos;
    });
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.filter((todo) => todo.id !== id);
      return newTodos;
    });
  };

  return (
    <toDoContext.Provider
      value={{ todos, handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo }}
    >
      {children}
    </toDoContext.Provider>
  );
};

export const useTodos = () => {
  const todosConsumer = useContext(toDoContext);
  if (!todosConsumer) {
    throw new Error("useTodos is outside of Provider");
  }
  return todosConsumer;
};
