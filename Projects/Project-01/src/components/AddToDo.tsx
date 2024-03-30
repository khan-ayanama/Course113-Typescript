import { useState } from "react";
import { useTodos } from "../store/store";

const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const task = useTodos();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    task.handleAddToDo(todo);
    setTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddToDo;
