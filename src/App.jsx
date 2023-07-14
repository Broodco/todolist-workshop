import Header from "./components/Header.jsx";
import AddTodo from "./components/AddTodo.jsx";
import ListTodos from "./components/ListTodos.jsx";

export default function App() {
/*  const handleClick = () => {
    const newTodos = [...todos];
    newTodos.push("This is a new todo");
    setTodos(newTodos);
  }*/

  return (
    <main className="container">
      <Header />

      <AddTodo />

      <ListTodos />
    </main>
  )
}
