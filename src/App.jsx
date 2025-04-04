import './App.css'
import { BrowserRouter, Route, Routes,Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Book'
import CartPage from "./pages/CartPage";
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books/title/:BookTitle" element={<Home />} />
        <Route path="/Books/:bookId" element={<Book />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
