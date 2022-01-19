import React from "react";
import styles from './CartCard.module.css';


export default function CartCard(name, vendeur, img, prix) {
  return (
    <div className={styles.productCard}>
      {/* <div className={styles.productDesc}>
        <img className={styles.productimg} src={img} alt={name} />
        <div className={styles.productText}>
          <h4>{name}</h4>
          <p>Vendu par {vendeur}.</p>
          <p>Livraison par <img className={styles.MmLogo} src="https://www.sdbpro.fr/wp-content/uploads/2018/09/Picto-ManoMano.jpg" alt="logo Manomano"/></p>
        </div>
      </div>
      <div className={styles.productprice}>
        <h3>1</h3>
        <h2>{prix}</h2>
      </div>
      <div className={styles.productOptions}>
        <button>Mettre de côté</button>
        <button>supprimer</button>
      </div> */}
      <div className={styles.productCard}>
      <div className={styles.productDesc}>
        <img className={styles.productimg} src='https://cdn.manomano.com/images/images_products/7666072/T/13575359_1.jpg' alt="perceuse" />
        <div className={styles.productText}>
          <h4>Perceuse visseuse sans fil TEENO PSR 21V + 2 batteries lithium</h4>
          <p>Vendu par Maxoutil.</p>
          <p>Livraison par <img className={styles.MmLogo} src="https://www.sdbpro.fr/wp-content/uploads/2018/09/Picto-ManoMano.jpg" alt="logo Manomano"/></p>
        </div>
      </div>
      <div className={styles.productprice}>
        <h3>1</h3>
        <h2>185€</h2>
      </div>
      <div className={styles.productOptions}>
        <button>Mettre de côté</button>
        <button>supprimer</button>
      </div>
    </div>
    </div>
  )
};
