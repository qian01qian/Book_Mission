// src/pages/CartPage.jsx
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQtyChange = (book, qty) => {
    if (qty < 1) return;
    dispatch(addToCart({ ...book, quantity: qty }));
  };

  const handleRemove = (book) => {
    dispatch(removeFromCart(book));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, book) => total + book.price * book.quantity, 0);
  };

  return (
    <div className="p-8 bg-gradient-to-b from-blue-200 to-white">
      <h1 className="text-2xl font-bold mb-6">🛒 購物車</h1>
      {cartItems.length === 0 ? (
        <div>
          <p>購物車目前是空的 😢</p>
          <div className="flex justify-center">
            <button onClick={() => navigate("/")} className="bg-center max-w-50 mt-4 btn btn-primary">
              回到書店
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {cartItems.map((book) => (
            <div key={book.ID} className="flex items-center justify-between border-b pb-4">
              <div className="flex gap-4 items-center">
                <img src={book.cover} alt={book.title} className="w-20 h-28 object-cover" />
                <div>
                  <h2 className="text-lg font-bold">{book.title}</h2>
                  <p>單價：${book.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => handleQtyChange(book, book.quantity - 1)}>-</button>
                    <input
                      type="number"
                      value={book.quantity}
                      onChange={(e) => handleQtyChange(book, Number(e.target.value))}
                      className="w-12 text-center border"
                    />
                    <button onClick={() => handleQtyChange(book, book.quantity + 1)}>+</button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">${book.price * book.quantity}</p>
                <button onClick={() => handleRemove(book)} className="text-red-500 text-sm mt-2">
                  移除
                </button>
              </div>
            </div>
          ))}
          <div className="text-right mt-6 text-2xl font-bold">
            總金額：${getTotalPrice()}
          </div>
          <div className="flex justify-center">
            <button onClick={() => navigate("/")} className="bg-center max-w-50 mt-4 btn btn-primary">
              回到書店
            </button>
          </div>
        </div>

      )}

    </div>
  );
};

export default CartPage;
