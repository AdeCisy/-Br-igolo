import React, { useState, useContext, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import CartCard from "./CartCard";
import styles from './style/FirstHome.module.css';
import CartProductsContext from '../contexts/cartProducts';


export default function MyList() {
  let navigate = useNavigate();
  
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);
  const totalPrice = cartProducts.map(item => item.prix).reduce((prev, next) => prev + next);

  const [menuCursor, setMenuCursor] = useState(3);

  const handleCursor = (cursor) => {
    setMenuCursor(cursor);
  };

  const handleCart = () => {
    handleCursor(1);
    navigate('/orga');
  }

  useEffect(() => {
    // console.log(localStorage.cart);
if (localStorage.getItem('cart')) {
  const newData = JSON.parse(localStorage.getItem('cart'));
  console.log(newData);
  // console.log('hello');
  setCartProducts(newData);
  localStorage.clear();
}
  }, []);
  

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerCo}></div>
      <div className={styles.continuer}>
        <div className={styles.LArrow}></div>
        <h4>Continuer mes achats</h4>
      </div>
      <div className={styles.onglets}>
        <button className={styles.ongletActif} onClick={() => handleCart()} style={ menuCursor===1 ? { color: `#0c193a` } : { color: `#505971` }}>Panier</button>
        <button onClick={() => handleCursor(2)} style={ menuCursor===2 ? { color: `#0c193a` } : { color: `#505971` }}>Mis de côté</button>
        <button onClick={() => handleCursor(3)} style={ menuCursor===3 ? { color: `#0c193a` } : { color: `#505971` }}>Participatif ({cartProducts.length})</button>
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
        <p>Ma liste partagée pour le <span>6 février 2022</span></p>
      </div>
      <div className={styles.cartProductsHome}>
        {cartProducts && cartProducts.map((produit, menuCursor, handleCursor) => 
          <CartCard key={produit.id} produit={produit} menuCursor={menuCursor} handleCursor={handleCursor}/>
        )}
      </div>
      <div className={styles.cartPrice}>
        <div className={styles.cartSecondContainer}>
          <div className={styles.cartText}>
          <h3>Total du panier</h3>
            <p>Frais de livraison calculés à l'étape suivante</p>
          </div>
          <h2>{totalPrice} €</h2>
        </div>
        <button className={styles.cartButton}>Passer à la livraison</button>
      </div>
    </div>
  )
};
