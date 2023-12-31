import { useState } from "react";

export const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");
  const changeHandler = (e) => {
    e.preventDefault();
    setNewItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem)
    setNewItem("");
  };
  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item </label>
        <input type="text" id="item" value={newItem} onChange={changeHandler} />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};
