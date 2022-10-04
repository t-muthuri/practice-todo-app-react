import React, {useState, useEffect, useRef} from 'react'

function Todoform(props) {

    const [input, setInput] = useState (props.edit ? props.edit.value : ""); //when editing the input box does not clear but the initial state of the todo remains

    const inputRef = useRef (null)

    useEffect(()=>{
      inputRef.current.focus() //
    })

    function handleChange(e){
        setInput(e.target.value);//set this to what you type in
    }

    function handleSubmit(e){
        e.preventDefault();

        props.onSubmit({
          id: Math.floor(Math.random()*10000),
          text: input
        }); //logs in unique ids of the inputs and stores data on the console
        //you can also use the uuid library to assign unique keys

        setInput("");//set input to its initial state once the form is submitted
    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
      <>
      <input className='todo-input edit'
        type="text"
        placeholder='add a todo'
        value= {input}
        name="text"
        onChange={handleChange}
        ref={inputRef}
        >
        </input>
        <button className='todo-button edit'>add a todo</button>
        </>) : 
        (
        <>
        <input className='todo-input'
        type="text"
        placeholder='add a todo'
        value= {input}
        name="text"
        onChange={handleChange}
        ref={inputRef}
        >
        </input>
        <button className='todo-button'>add a todo</button>
        </>)}
        
    </form>
  )
}

export default Todoform