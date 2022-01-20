import React, { useState } from "react";
import CartCard from "./CartCard";
import styles from './FirstHome.module.css';


export default function FirstHome() {

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
      <div className={styles.continuer}>Continuer mes achats</div>
      <div className={styles.onglets}>
        <button className={styles.ongletActif}>Panier</button>
        <button>Mis de côté</button>
        <button>Wishlists partagées</button>
      </div>
      {/* <div className={styles.cursorLine}>
        <div className={styles.cursor1}></div>
        <div className={styles.cursor}></div>
        <div className={styles.cursor}></div>
      </div> */}
      <div className={styles.cartProducts}>
        { cartProducts.map((produit) => {
          return <CartCard key={produit.id} name={produit.name} vendeur={produit.vendeur} img={produit.imgUrl} prix={produit.prix}/>
        })}
        {/* <CartCard /> */}
      </div>
      <div className={styles.cartPrice}></div>
    </div>
  )
};
