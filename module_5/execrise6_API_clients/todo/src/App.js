import { useEffect, useState } from 'react'
import { createTodo, getTodo } from './service/todoService';


function App() {
  const [todo, setTodo] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const handleInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  const handleAddTodo = async () => {
    try {
      await createTodo(todoInput);
      setTodoInput('');
      getListTodo();
    } catch (error) {
      console.error(error);
    }
  };
  const getListTodo = async () => {
    const data = await getTodo();
    setTodo(data);
  }
  
  useEffect(() => {
    getListTodo();
  }, []);
 

  return (
    <>
      <h1>Todo List</h1>
      <input value={todoInput} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Submit</button>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>{item.item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
