import axios from 'axios'
export async function getTodo(){
    const res = await axios.get('http://localhost:8080/todo');
    return res.data;
}
export async function createTodo(todo){
    await axios.post('http://localhost:8080/todo',{item : todo});
}