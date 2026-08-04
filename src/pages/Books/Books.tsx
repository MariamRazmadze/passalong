import "../../api/server";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export type Book = {
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
      <Link to={`/books/${book.id}`}>
        <img src={book.imageUrl} />
        <div className="book-info">
          <h3>{book.title}</h3>
          <p>
            ${book.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`book-type ${book.type} selected`}>{book.type}</i>
      </Link>
    </div>
  ));
  return (
    <div className="book-list-container">
      <div className="book-list">{bookElements}</div>
    </div>
  );
}
