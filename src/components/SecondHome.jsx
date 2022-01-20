import React, { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import CartCard from "./CartCard";
import styles from './style/FirstHome.module.css';
import CartProductsContext from '../contexts/cartProducts';


export default function SecondHome() {
  let navigate = useNavigate();

  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  const [menuCursor, setMenuCursor] = useState(3);

  const handleCursor = (cursor) => {
    setMenuCursor(cursor);
  };

  const handleList = () => {
    handleCursor(3);
    navigate('/listsinvited');
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerDeco}></div>
      <div className={styles.continuer}>
        <div className={styles.LArrow}></div>
        <h4>Continuer mes achats</h4>
      </div>
      <div className={styles.onglets}>
        <button className={styles.ongletActif} onClick={() => handleCursor(1)} style={ menuCursor===1 ? { color: `#0c193a` } : { color: `#505971` }}>Panier</button>
        <button onClick={() => handleCursor(2)} style={ menuCursor===2 ? { color: `#0c193a` } : { color: `#505971` }}>Mis de côté</button>
        <button onClick={() => handleList()} style={ menuCursor===3 ? { color: `#0c193a` } : { color: `#505971` }}>Participatif ({cartProducts.length})</button>
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
      <div className={styles.titleList}>
          <p>Liste partagée de <span>Sophie</span></p>
          <p className={styles.invited}>En tant qu'invité, vous pouvez ajouter des produits et modifier les quantités.</p>
      </div>
      <div className={styles.cartProducts}>
        {cartProducts && cartProducts.map((produit, menuCursor, handleCursor) => 
          <CartCard key={produit.id} produit={produit} menuCursor={menuCursor} handleCursor={handleCursor}/>
        )}
      </div>
      <div className={styles.footer}></div>
    </div>
  )
};
