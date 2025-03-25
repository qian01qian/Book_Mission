import { Link } from "react-router";

function Header({ title, slogan }) {
    return (
        <header className="min-h-20 flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-white text-black">
            <Link to="/">
                <img className="w-40 h-40 bg-center" src="Logo.png" alt="logo" />
            </Link>
            <h2 className="text-black text-5xl font-bold text-center">
                {title}
            </h2>

            <p className="text-black text-center mt-4">
                {slogan}
            </p>
        </header>
    );
}
export default Header;