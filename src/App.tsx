import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { AboutPages } from "./pages/AboutPages";
import { ProductsPage } from "./pages/Products";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPages />} />
      </Routes>
    </>
  );
}

export default App;
