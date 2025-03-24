import { createElement, useState } from "react";

function AddToCart({ book }) {
  const [quantity, setQuantity] = useState(1);

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
    const value = e.target.value;
    if (value <= 0) {
      setQuantity(1);
    } else if (value > book.stock) {
      setQuantity(book.stock);
    } else {
      setQuantity(value);
    }
  };

  const totalPrice = (price) => {
    const totalPrice = price * quantity;
    const totalSpan = createElement(
      "span",
      { className: "totalPrice" },
      `$ ${totalPrice}`
    );
    return totalSpan;
  };

  return (
    <div>
      <div className="price text-xl mt-4 tracking-wide">
        Price：${book.price}
      </div>
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
        >
          +
        </button>
      </div>

      <div className="add_to_cart flex  flex-col-reverse gap-4 md:gap-0 md:flex-row md:justify-between md:items-center">
        <button className="btn decrease text-lg bg-slate-500 text-white md:px-20 lg:px-[5.5rem] py-6">
          Add to cart
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