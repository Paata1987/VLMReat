import { useContext, useState } from "react";
import "./App.css";
import { CreateProduct } from "./components/CreateProduct";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";
import { Product } from "./components/Product";
import { useProducts } from "./hooks/products";
import { IProduct } from "./models";
import { ModalConterxt } from "./context/ModalContext";


function App() {
  const { loading, error, products, addProduct } = useProducts();
  const {modal, open, close} = useContext(ModalConterxt)
  //const [modal, setModal] = useState(false)

  const createHandler = (product:IProduct) =>{
    close()
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader/>}
      {error && <ErrorMessage error={error}/>}
      {products.map((product) => (<Product product={product} key={product.id} />))}

      {modal && <Modal  title="Create new product" onClose={close}>
        <CreateProduct onCreate={createHandler}  />
      </Modal>}
      {/* <Product product={ products[0]}/>
      <Product product={ products[1]}/> */}

      <button className="fixed bottom-5 bg-red-700 rounded-full py-2 px-4 text-white text-2xl right-5"
      onClick={open}>
        +
      </button>
    </div>
  );
}

export default App;
