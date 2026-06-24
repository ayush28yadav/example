import { useState } from "react"

function Heading(){
  const [todo, setTodo] = useState([])
  const [text, setText] = useState("")
  const[toggle, setToggle] = useState(false)
 
  const addtodo = (inputText) => {
    const newTodo = { 
      text: inputText,
      id: Date.now()  
    }
    const newTodos = [...todo, newTodo];
    setTodo(newTodos)
  }
  
  return(
    <> 
      <input 
        type="text" 
        placeholder="type here" 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => {
        addtodo(text);
        setText("")
      }}>
        Submit
      </button>
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
      
      {toggle && todo.map((item) => (
        <div key={item.id}>
          <h1>{item.text}</h1>
        </div>
      ))}
    </>
  )
}
export default Heading