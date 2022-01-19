import React from "react";
import CartCard from "./CartCard";
import styles from './FirstHome.module.css';


export default function FirstHome() {
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
        {/* { products.map((produit) => {
          return <CartCard key={produit.id} name={produit.name} vendeur={produit.vendeur} img={produit.imgUrl} prix={produit.prix}/>
        })} */}
        <CartCard />
      </div>
      <div className={styles.cartPrice}></div>
    </div>
  )
};
