import React from "react";
import styles from "./style.css";

function Basket({ basket, product, total }) {
  return (
    <>
      {basket.map((item, key) => (
        <div>
          {product.find((p) => p.id === item.id).name} -{" "}
          {product.find((p) => p.id === item.id).price} TL - {item.amount} adet
        </div>
      ))}
      <div>Toplam : {total} TL</div>
    </>
  );
}

export default Basket;
