export const BooksData = async () => {
  const res = await fetch(`http://localhost:8000/books`);
  const data = await res.json();
  return data;
};
export const getBookDetails = async (id) => {
  const res = await fetch(`http://localhost:8000/books/${id}`);
  const data = await res.json();
  return data;
};

export const Category = ["Fiction", "Self Help", "Sci-Fi", "Business"];
