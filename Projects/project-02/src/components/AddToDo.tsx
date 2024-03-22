import { FormEvent, useState } from "react";

const AddToDo = () => {
  const [toDo, setToDo] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(toDo);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddToDo;
