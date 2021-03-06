import React, { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import CartCard from "./CartCard";
import styles from "./style/FirstHome.module.css";
import CartProductsContext from "../contexts/cartProducts";
import Slider from "./slider";

export default function SecondHome() {
  let navigate = useNavigate();

  const { cartProducts } = useContext(CartProductsContext);
  const [button, setButton] = useState(false);
  const [menuCursor, setMenuCursor] = useState(3);
  // const totalPrice = cartProducts.map((item) => item.prix).reduce((prev, next) => prev + next);

  const handleCursor = (cursor) => {
    setMenuCursor(cursor);
  };

  const handleList = () => {
    handleCursor(3);
    navigate('/listsinvited');
  }

  function sendStorage () {
   localStorage.setItem('cart', JSON.stringify(cartProducts));
   console.log(localStorage.cart);
   setButton(true);
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
        <div
          className={styles.cursor1}
          style={menuCursor === 1 ? { background: `#0c193a` } : null}
          id="cursor1"
        ></div>
        <div
          className={styles.cursor2}
          style={menuCursor === 2 ? { background: `#0c193a` } : null}
          id="cursor2"
        ></div>
        <div
          className={styles.cursor3}
          style={menuCursor === 3 ? { background: `#0c193a` } : null}
          id="cursor3"
        ></div>
      </div>
      <div className={styles.titleList}>
          <p>Liste partagée de <span>Sophie</span></p>
          <p className={styles.invited}>En tant qu'invité, vous pouvez ajouter des produits et modifier les quantités.</p>
      </div>
      <div className={styles.cartProducts}>
        <CartCard
          button="disabled"
          produit={{
            id: 1,
            name: "Peinture intérieur Blanc Satin Murs & Plafonds Bicouche Acrylique 10L - 100m² - Blanc",
            productRef: "ME10486098",
            prix: 49,
            vendeur: "Renaulac",
            imgUrl:
              "https://cdn.manomano.com/peinture-interieur-blanc-satin-murs-plafonds-bicouche-acrylique-10l-100m-renaulac-blanc-P-4063946-10806872_1.jpg",
          }}
        />
        {cartProducts &&
          cartProducts
            .filter((elt) => elt.id !== 1)
            .map((produit, index, menuCursor, handleCursor) => (
              <div key={index}>
                <CartCard
                  key={index}
                  produit={produit}
                  menuCursor={menuCursor}
                  handleCursor={handleCursor}
                />
              </div>
            ))}
      </div>
      <button className={styles.guestButton} onClick={sendStorage} style={button ? {backgroundColor:'#505971', color:'white'}: null}>{button ? 'Merci de votre participation' : 'Valider votre participation'}</button>
      <Slider />
      <div className={styles.footer}></div>
    </div>
  );
}
