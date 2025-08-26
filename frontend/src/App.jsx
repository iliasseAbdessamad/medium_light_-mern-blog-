import { Routes, Route } from "react-router"
import Navbar from "./components/navbar/Navbar"
import AuthForm from "./pages/authForm/AuthForm"
import './App.css'


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="signin" element={<AuthForm type="sign-in" />} />
        <Route path="signup" element={<AuthForm type="sign-up" />} />
      </Route>
    </Routes>
  )
}

export default App
