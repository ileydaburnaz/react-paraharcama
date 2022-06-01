import React, { useEffect, useState } from "react";
import styles from "./style.css";

function Header({ money, total }) {
  return (
    <>
      {total === 0 && <div className='header'> {money} TL paranız var.</div>}
      {money === total && <div className='header'>Paranız bitti.</div>}
      {total > 0 && money - total !== 0 && (
        <div div className='header'>
          Harcayacak {money - total} TL paranız kaldı.
        </div>
      )}
    </>
  );
}

export default Header;
