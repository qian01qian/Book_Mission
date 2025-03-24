import Header from '../components/Header';
import Footer from '../components/Footer';
import Booklist from '../components/Booklist';
function Home() {
    return (
        <div className='bg-white' >
            <Header 
                title="Book能的任務"
                slogan="Book能的任務就交給Book吧！"
            /> 
            <Booklist />
            <Footer />
        </div>
    );
} export default Home;