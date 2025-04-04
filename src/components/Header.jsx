import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({ title, slogan }) {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);
  const totalQty = cartItems.reduce((sum, item) => sum + Number(item.quantity), 0);

  return (
    <header className="relative min-h-20 flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-white text-black">
      {/* 購物車 ICON（右上角） */}
      <div className="absolute top-4 right-4 cursor-pointer" onClick={() => navigate("/cart")}>
        <img src="/cart.svg" alt="cart" className="w-10 h-10" />
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
            {totalQty}
          </span>
        )}
      </div>

      <Link to="/">
        <img className="w-40 h-40 bg-center" src="/Logo.png" alt="logo" />
      </Link>

      <h2 className="text-black text-5xl font-bold text-center">{title}</h2>
      <p className="text-black text-center mt-4">{slogan}</p>
    </header>
  );
}

export default Header;
