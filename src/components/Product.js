import React, { useEffect, useState } from "react";
import styles from "./style.css";

function Product({ productitem, basket, setBasket, total, money }) {
  const basketitem = basket.find((item) => item.id == productitem.id);

  const addBasket = () => {
    const checkbasket = basket.find((item) => item.id == productitem.id);
    if (checkbasket) {
      checkbasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== productitem.id),
        checkbasket,
      ]);
    } else {
      setBasket([...basket, { id: productitem.id, amount: 1 }]);
    }
  };

  const removeBasket = () => {
    const checkbasket = basket.find((item) => item.id == productitem.id);
    const currentbasket = basket.filter((item) => item.id !== productitem.id);
    checkbasket.amount -= 1;
    if (checkbasket.amount === 0) {
      setBasket([...currentbasket]);
    } else {
      setBasket([...currentbasket, checkbasket]);
    }
  };

  return (
    <>
      {
        <div className='product'>
          <img src={productitem.image} className='images'></img>
          <div>
            {productitem.name} - {productitem.price} TL
          </div>
          <div>
            <button
              disabled={!basketitem}
              onClick={removeBasket}
              className='product-btn'
            >
              -
            </button>
            <span className='amount'>
              {(basketitem && basketitem.amount) || 0}
            </span>
            <button
              disabled={total + productitem.price > money}
              onClick={addBasket}
              className='product-btn'
            >
              +
            </button>
          </div>
        </div>
      }
    </>
  );
}

export default Product;
