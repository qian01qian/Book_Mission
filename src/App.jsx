import './App.css'
import { BrowserRouter, Route, Routes,Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Book from './pages/Book'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books/title/:BookTitle" element={<Home />} />
        <Route path="/Books/:bookId" element={<Book />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
