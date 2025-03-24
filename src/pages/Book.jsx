import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import books_reviews from "../../books_reviews.json";
import BookDetail from "../components/BookDetail";

function Book(){
    const {bookId} = useParams();
    const book = books_reviews.find((e) => e.ID === Number(bookId));

    return(
        <div >
            <Header title="Book Detail" slogan="Mission detail please noticed." />
            <BookDetail book={book} className="content" />
            <Footer />
        </div>
    );
}export default Book;