import { createElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToShelf, removeFromShelf } from "../redux/shelfSlice";

function AddToCart({ book }) {
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  const dispatch = useDispatch();
  const shelfItems = useSelector((state) => state.shelf);
  const isFavorite = shelfItems.some((item) => item.id === book.id);

  const navigate = useNavigate();

  const increaseQuantity = () => {
    if (quantity < book.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const inputValue = (e) => {
    const value = Number(e.target.value);
    if (value <= 0) {
      setQuantity(1);
    } else if (value > book.stock) {
      setQuantity(book.stock);
    } else {
      setQuantity(value);
    }
  };

  const totalPrice = (price) => {
    const total = price * quantity;
    const totalSpan = createElement(
      "span",
      { className: "totalPrice" },
      `$ ${total}`
    );
    return totalSpan;
  };

  useEffect(() => {
    if (isInCart) {
      const timer = setTimeout(() => {
        navigate("/"); // 2 秒後跳回首頁
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isInCart, navigate]);

  return (
    <div>
      <div className="price text-xl mt-4 tracking-wide">
        Price：${book.price}
      </div>

      {/* 收藏按鈕 */}
      <div>
        <button
          onClick={() => {
            if (isFavorite) {
              dispatch(removeFromShelf(book));
            } else {
              dispatch(addToShelf(book));
            }
          }}
          className={`flex flex-row row-end-1 px-5 py-2 rounded-lg mr-2 mt-3 border-none cursor-pointer right ${
            isFavorite ? "bg-red-500 text-white" : "bg-gray-300 text-black"
          }`}
        >
          {isFavorite ? "取消收藏" : "加入收藏"}
        </button>
      </div>

      {/* 數量調整 */}
      <div className="flex items-center number-btns my-8">
        <span className="mr-8 text-xl">Quantity</span>
        <button
          className="btn decrease text-lg"
          disabled={quantity === 1}
          onClick={decreaseQuantity}
        >
          -
        </button>
        <input
          type="text"
          value={quantity}
          onChange={inputValue}
          className="input border-none outline-none w-20 text-center text-lg"
        />
        <button
          className="btn increase text-lg"
          disabled={quantity === Number(book.stock)}
          onClick={increaseQuantity}
        >+
        </button>
      </div>

      {/* 購物車按鈕 + 總價 */}
      <div className="add_to_cart flex flex-col-reverse gap-4 md:gap-0 md:flex-row md:justify-between md:items-center">
        <button
          onClick={() => {
            dispatch(addToCart({ ...book, quantity }));
            setIsInCart(true);
          }}
          disabled={isInCart}
          className="btn decrease text-lg bg-slate-500 text-white md:px-20 lg:px-[5.5rem] py-6"
        >
          {isInCart ? "已加入購物車" : "加入購物車"}
        </button>
        <div className="total text-slate-600 text-3xl font-semibold md:text-4xl md:font-bold">
          <span className="text-slate-600 text-xl opacity-60 font-bold mr-3">
            Total
          </span>{" "}
          {totalPrice(book.price)}
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
