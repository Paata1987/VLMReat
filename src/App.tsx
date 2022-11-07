
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutPages } from "./pages/abouPage";
import { ProductsPage } from "./pages/Products";

function App() {
  return(
    <Routes>
      < Route path="/" element={<ProductsPage/>} />
      < Route path="/" element={<AboutPages/>} />
    </Routes>
  )
}

export default App;
