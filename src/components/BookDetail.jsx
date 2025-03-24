import AddToCart from "./AddToCart";
import BookReviews from "./BookReviews";

function BookDetail({book}){
    return(
        <div >
            <div >
                <img
                    alt={book.title}
                 
                    src={book.cover}
                />
            </div>

            <div >
                <h1 >
                    {book.title}
                </h1>
                <h2 >
                    {book.author}
                </h2>
                <p >
                    {book.summary}
                </p>
                <hr />
                <AddToCart book={book}/>
            </div>
            <BookReviews book={book}/>
        </div>
    );
}export default BookDetail;