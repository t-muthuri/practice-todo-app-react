import React, {useState} from 'react'
import Todoform from './Todoform';
import Todo from './Todo';

function Todolist() {

    const[todos, setTodos] = useState([]);

    function addTodo (todo){
      if(!todo.text || /^\s*$/.test(todo.text)){
        return; // if no text is typed the function does not load an empty todo item
      }
      
      const newTodos = [todo, ...todos]; //should not modify the setState directly

      setTodos(newTodos);
      console.log (todo,...todos);
    };

    function updateTodo ( todoId, newValue){
      if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
      }
      setTodos (prev => prev.map(item => (item.id === todoId ? newValue : item)))
    };

    // const removeTodo = id => {
    //   const removeArr = [...todos].filter(todo => todo.id !== id)

    //   setTodos (removeArr);
    // }
    function removeTodo(id){
      const removeArr = [...todos].filter(todo => todo.id !== id);

      setTodos(removeArr)
    }

    function completeTodo (id){
      let updatedTodos = todos.map(todo =>{
        if (todo.id === id){
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      })
      setTodos(updatedTodos);
    }

  return (
    <div>
        <h1>What's the plan today</h1>
        <Todoform onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default Todolist