import Header from "./components/Header.jsx";
import AddTodo from "./components/AddTodo.jsx";
import ListTodos from "./components/ListTodos.jsx";
import { useState } from "react";

export default function App() {
  const initTodos = [
    {
      id: '1',
      name: 'Apprendre React',
      done: false
    },
    {
      id: '2',
      name: 'Faire la vaisselle',
      done: true
    },
    {
      id: '3',
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


  /*  const handleClick = () => {
      const newTodos = [...todos];
      newTodos.push("This is a new todo");
      setTodos(newTodos);
    }*/

  return (
    <main className="container">
      <Header />

      <AddTodo />

      <ListTodos todos={todos} changeTodoStatus={changeTodoStatus} />
    </main>
  )
}
