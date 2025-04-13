// src/components/Content.js
import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button"; // Delete button
import EditButton from "./EditButton"; // Edit button
import Input from "./Input"; // Add new todo input

const Content = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn AI", completed: true },
    { id: 3, title: "Learn Angular", completed: false },
    { id: 4, title: "Learn Node", completed: true },
  ]);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const handleToggleComplete = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleSave = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, title: editText } : todo
      )
    );
    setEditId(null);
    setEditText("");
  };

  const handleAddTodo = () => {
    if (newTitle.trim() === "") return;
    const newTodo = {
      id: todoList.length ? todoList[todoList.length - 1].id + 1 : 1,
      title: newTitle,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setNewTitle("");
  };

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <ul style={{ padding: 0 }}>
        {todoList.map((todo) => (
          <li
            className="item"
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              listStyle: "none",
              marginBottom: "10px",
            }}
          >
            <Checkbox
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
            />

            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={() => handleSave(todo.id)}
                autoFocus
              />
            ) : (
              <label>{todo.title}</label>
            )}

            <EditButton
              onClick={() => {
                setEditId(todo.id);
                setEditText(todo.title);
              }}
            />
            <Button onClick={() => handleDelete(todo.id)} />
          </li>
        ))}
      </ul>

      <div style={{ width: "60%", marginTop: "20px" }}>
        <Input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onAdd={handleAddTodo}
        />
      </div>
    </main>
  );
};

export default Content;
