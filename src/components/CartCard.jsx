import React from "react";
import styles from './style/CartCard.module.css';


export default function CartCard({produit}) {

  return (
    <div className={styles.productCard}>
      <div className={styles.productDesc}>
        <img className={styles.productimg} src={produit.imgUrl} alt={produit.name} />
        <div className={styles.productText}>
          <h4>{produit.name}</h4>
          <p>Vendu par {produit.vendeur}.</p>
          <p>Livraison par <img className={styles.MmLogo} src="https://www.sdbpro.fr/wp-content/uploads/2018/09/Picto-ManoMano.jpg" alt="logo Manomano"/></p>
        </div>
      </div>
      <div className={styles.productprice}>
        <h3>1</h3>
        <h2>{produit.prix}</h2>
      </div>
      <div className={styles.productOptions}>
        <button>Mettre de côté</button>
        <button>supprimer</button>
      </div>
    </div>
  )
};
