import Header from "./components/Header.jsx";
import AddTodo from "./components/AddTodo.jsx";
import ListTodos from "./components/ListTodos.jsx";
import { useState } from "react";

export default function App() {
  const initTodos = [
    {
      id: '0',
      name: 'Apprendre React',
      done: false
    },
    {
      id: '1',
      name: 'Faire la vaisselle',
      done: true
    },
    {
      id: '2',
      name: 'Faire un jogging',
      done: false
    }
  ];
  const [todos, setTodos] = useState(initTodos);

  const changeTodoStatus = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const addNewTodo = (newTodoName) => {
    const newTodo = {
      id: todos.length.toString(),
      name: newTodoName,
      done: false
    };
    const newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  }

  return (
    <main className="container">
      <Header />

      <AddTodo addNewTodo={addNewTodo}/>

      <ListTodos todos={todos} changeTodoStatus={changeTodoStatus} />
    </main>
  )
}
