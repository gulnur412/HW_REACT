// import React, { useState } from "react";
// import "./Todos.css";
// import { CheckBox } from "@mui/icons-material";
// export const Todos = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const addTodo = () => {
//     if (inputValue.trim()) {
//       setTodos([...todos, { text: inputValue, completed: false }]);
//       setInputValue("");
//     }
//   };

//   const toggleTodo = (index) => {
//     const newTodos = todos.map((todo, i) =>
//       i === index ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(newTodos);
//   };

//   const removeTodo = (index) => {
//     const newTodos = todos.filter((_, i) => i !== index);
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <div className="wrapper">
//         <h1 className="toggle">Todo List</h1>

//         <h1>{todos.length}</h1>

//         <input
//           className="input-title"
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Add a new todo"
//         />

//         <button className="add-todo" onClick={addTodo}>
//           Add Todo
//         </button>
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index}>
//               <p
//                 style={{
//                   textDecoration: todo.completed ? "line-through" : "none",
//                 }}
//               >
//                 {" "}
//                 {todo.text}
//               </p>

//               <CheckBox onClick={() => toggleTodo(index)} />

//               <button className="remove" onClick={() => removeTodo(index)}>
//                 Remove


//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };
