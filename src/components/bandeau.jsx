import React from "react";

import styles from './style/bandeau.module.css';

function RecommandationCard() {
  return <div class={styles.recoCardContainer}>
      <div>
        <img />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.shortTitle}></div>
        <div className={styles.rating}></div>
        <div className={styles.price}></div>
      </div>
  </div>;
}

export default RecommandationCard;
