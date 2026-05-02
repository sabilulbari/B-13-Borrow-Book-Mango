export const BooksData = async() =>{
    const res = await fetch("http://localhost:8000/books");
    const data = await res.json();
    return data;

}
