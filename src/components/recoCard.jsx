import React from "react";

import styles from './style/recoCard.module.css';



function RecommandationCard({produit}) {
  return <div class={styles.recoCardContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={produit.imgUrl}  alt=''/>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.shortTitle}>
        {produit.name}
        </div>
        <div className={styles.rating}>
          <img src={produit.rating} alt='rating'/>
        </div>
        <div className={styles.priceContainer}>
        <div className={styles.price}>{produit.prix}€</div>
        <div className={styles.materialicons}>add_shopping_cart</div>
        </div>
      </div>
  </div>;
}

export default RecommandationCard;
