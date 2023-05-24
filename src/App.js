import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";

function App() {
  const navigate = useNavigate();
 
  
  useEffect(()=>{
    const auth = localStorage.getItem('auth') ? true : false;
    if(auth){
      navigate("/")
    }else{
      navigate("/register")
    }
  })
  
  return (
    <div>
      <Toaster position="top-right"/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
