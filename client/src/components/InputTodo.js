import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("some text");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      // eslint-disable-next-line no-unused-vars
      const response = await fetch("/todos", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(description)
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
