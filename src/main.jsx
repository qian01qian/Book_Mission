import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./components/CartContext"; // ⬅️ 匯入 CartProvider
import { FavoriteProvider } from "./components/FavoriteContext"; // ⬅️ 新增這行


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <FavoriteProvider>
        <App />
      </FavoriteProvider>
    </CartProvider>
  </React.StrictMode>
);