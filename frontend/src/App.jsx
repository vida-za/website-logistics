import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UsersPage from './pages/UsersPage'
import HomePage from './pages/Home/HomePage'
import './styles/App.scss'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}