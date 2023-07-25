import axios from 'axios'
export async function getBook(){
    const res = await axios.get('http://localhost:8080/book');
    return res.data;
}
export async function getBookId(id){
    const res = await axios.get('http://localhost:8080/book/'+id);
    return res.data;
}
export async function createBook(book){
    await axios.post("http://localhost:8080/book",book);
}
export async function update(id, updateBook) {
    return await axios.put('http://localhost:8080/book/' + id, updateBook)
}
export async function deleteBook(id){
    await axios.delete('http://localhost:8080/book/'+id);
}