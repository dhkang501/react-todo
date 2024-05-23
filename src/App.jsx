//useState 훅이자 api를 사용할 수 있게 됨
import { useState } from "react"
import TodoHeader from "./\bcomponent/TodoHeader";
import TodoInput from "./\bcomponent/TodoInput";
import TodoList from "./\bcomponent/TodoList";

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());

  const addTodo = (todo) => {
    localStorage.setItem(todo,todo);
    setTodos((currentTodos)=>{
      return [...currentTodos, todo]
    })
    // setInputText('');
}

  const removeTodo = (todo) => {
    const result = todos.filter(todoItem => {
        if(todoItem !== todo) {
        return true;
        }
    })
    setTodos(result);
    localStorage.removeItem(todo);
  }

  return (
    <div>
      <TodoHeader/>
      <TodoInput onTodoAdd={addTodo}/>
      <TodoList todos={todos} onTodoRemove={removeTodo}/>
    </div>
  )
}

export default App
