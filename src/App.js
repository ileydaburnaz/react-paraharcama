import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Product from "./components/Product";
import product from "./product.json";
import Basket from "./components/Basket";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * product.find((product) => product.id == item.id).price
        );
      }, 0)
    );
  }, [basket]);

  const resetBasket = () => {
    setBasket([]);
  };
  return (
    <>
      <Header total={total} money={money}></Header>
      <div className='products'>
        {product.map((productitem, key) => (
          <Product
            key={productitem.key}
            basket={basket}
            setBasket={setBasket}
            productitem={productitem}
            total={total}
            money={money}
          ></Product>
        ))}
      </div>
      <div className='footer'>
        <Basket product={product} basket={basket} total={total}></Basket>
        <button
          onClick={resetBasket}
          className='footer-btn'
          disabled={total === 0}
        >
          Sepeti Boşalt
        </button>
      </div>
    </>
  );
}

export default App;
