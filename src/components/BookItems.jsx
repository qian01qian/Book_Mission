import { Link } from "react-router";

function truncateText(text, length) {
  return text.length > length ? text.substring(0, length) + "..." : text;
}

function Bookitem({ book }) {
  return (
    <section>
        <Link to={`/Books/${book.id}`}>
            <div className="card bg-gradient-to-br from-blue-50 to-white w-96 shadow-lg">
                <figure className="px-10 pt-10 ">
                <img
                    src={book.cover}
                    alt={book.title}
                    className="rounded-xl h-60 w-40"
                />
                </figure>
                <div className="card-body">
                    <h3 className="card-title self-center text-2xl">
                        {book.title}
                    </h3>
                    <h4 className="text-md self-center">
                        {book.author}
                    </h4>
                    <p className="text-sm p-4">
                        {truncateText(book.summary, 70)}
                    </p>
                    <h3 className="text-sm self-center">
                        ${book.price}
                    </h3>
                </div>
            </div>
        </Link>
    </section>
  );
}export default Bookitem;