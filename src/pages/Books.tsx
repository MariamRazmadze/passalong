import "../api/server";
import { useEffect, useState } from "react";

type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  condition: string;
  description: string;
  imageUrl: string;
  type: string;
};
export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.books));
  }, []);
  const bookElements = books.map((book) => (
    <div key={book.id} className="book-tile">
      <img src={book.imageUrl} />
      <div className="van-info">
        <h3>{book.title}</h3>
        <p>
          ${book.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-type ${book.type} selected`}>{book.type}</i>
    </div>
  ));
  return <div>{bookElements}</div>;
}
