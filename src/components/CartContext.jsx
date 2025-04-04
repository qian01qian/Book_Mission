import { createContext, useContext, useReducer } from "react";

// 初始購物車狀態
const initialCartState = {
  items: [],
};

// reducer 設計
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
}

// 創建 Context
const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// 自定義 hook：方便使用
export function useCart() {
  return useContext(CartContext);
}
