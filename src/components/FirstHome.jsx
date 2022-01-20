import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";
import styles from './style/FirstHome.module.css';


export default function FirstHome() {

  // const cursor1 = document.getElementById('cursor1');
  // const cursor2 = document.getElementById('cursor2');
  // const cursor3 = document.getElementById('cursor3');
  const [menuCursor, setMenuCursor] = useState(1);

  const handleCursor = (cursor) => {
    setMenuCursor(cursor);
  };
  
  // useEffect (() => {
  //   menuCursor.className += ` ${styles['active']}`;
  // }, [menuCursor])

  const [cartProducts, setCartProducts] = useState([{
      "id": 1,
      "name": "Peinture intérieur Blanc Satin Murs & Plafonds Bicouche Acrylique 10L - 100m² - Blanc",
      "productRef": "ME10486098",
      "prix": 49,
      "vendeur": "Renaulac",
      "imgUrl": "https://cdn.manomano.com/peinture-interieur-blanc-satin-murs-plafonds-bicouche-acrylique-10l-100m-renaulac-blanc-P-4063946-10806872_1.jpg"
    }])

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}></div>
      <div className={styles.continuer}>
        <div className={styles.LArrow}></div>
        <h4>Continuer mes achats</h4>
      </div>
      <div className={styles.onglets}>
        <button className={styles.ongletActif} onClick={() => handleCursor(1)}>Panier ({cartProducts.length})</button>
        <button onClick={() => handleCursor(2)}>Mis de côté</button>
        <button onClick={() => handleCursor(3)}>Participatif</button>
      </div>
      <div className={styles.cursorLine}>
        <div className={styles.cursor1} 
        style={ menuCursor===1 ? { background: `#0c193a` } : null}
        id="cursor1"></div>
        <div className={styles.cursor2} 
        style={ menuCursor===2 ? { background: `#0c193a` } : null}
        id="cursor2"></div>
        <div className={styles.cursor3} 
        style={ menuCursor===3 ? { background: `#0c193a` } : null}
        id="cursor3"></div>
      </div>
      <div className={styles.cartProducts}>
        {cartProducts && cartProducts.map((produit) => 
          <CartCard key={produit.id} produit={produit}/>
        )}
      </div>
      <div className={styles.cartPrice}></div>
    </div>
  )
};
