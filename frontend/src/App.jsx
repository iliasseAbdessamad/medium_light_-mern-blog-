import { Routes, Route } from "react-router"
import Navbar from "./components/navbar/Navbar"
import AuthForm from "./pages/authForm/AuthForm"
import AnimationWrapper from "./common/AnimationWrapper"
import './App.css'


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route 
          path="signin" 
          element={
            <AnimationWrapper 
              uniqueKey="sign-in"
              initial={{opacity:0}} 
              animate={{opacity:1}}
              transition={{duration:0.7}}>
                <AuthForm type="sign-in" />
            </AnimationWrapper>} 
        />
        <Route 
          path="signup" 
          element={
            <AnimationWrapper 
              uniqueKey="sign-up"
              initial={{opacity:0}} 
              animate={{opacity:1}}
              transition={{duration:0.7}}>
                <AuthForm type="sign-up" />
            </AnimationWrapper>} 
        />
      </Route>
    </Routes>
  )
}

export default App
