import { Route, Routes } from "react-router-dom";
import { AboutPages } from "./pages/AboutPages";
import { ProductsPage } from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/about" element={<AboutPages />} />
    </Routes>
  );
}

export default App;
