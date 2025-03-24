import books_reviews from "../../books.json";
import BookItem from "./BookItems";

function BookList() {
  return (
    <div className="mt-20 card min-h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 content">
      {books_reviews.map((book) => (
        <BookItem key={book.ID} book={book} />
      ))}
    </div>
  );
}

export default BookList;