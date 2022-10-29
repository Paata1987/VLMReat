import { useState } from "react";
import "./App.css";
import { CreateProduct } from "./components/CreateProduct";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";
import { IProduct } from "./models";

function App() {
  const { loading, error, products, addProduct } = useProducts();
  const [modal, setMmodal] = useState(true)
  const createHandler = (product:IProduct) =>{
    setMmodal(false)
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader/>}
      {error && <ErrorMessage error={error}/>}
      {products.map((product) => (<Product product={product} key={product.id} />))}

      {modal && <Modal title="Create new product">
        <CreateProduct onCreate={createHandler}/>
      </Modal>}
      {/* <Product product={ products[0]}/>
      <Product product={ products[1]}/> */}
    </div>
  );
}

export default App;
