import React from "react";

import styles from './style/bandeau.module.css';

function RecommandationCard() {
  return <div class={styles.recoCardContainer}>
      <div>
        <img href="https://cdn.manomano.com/images/images_products/4298710/L/8831942_1.jpg"  alt=''/>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.shortTitle}>
        SAVY - Rouleau anti-goutte avec rallonge - 180 mm
        </div>
        <div className={styles.rating}></div>
        <div className={styles.price}></div>
      </div>
  </div>;
}

export default RecommandationCard;
