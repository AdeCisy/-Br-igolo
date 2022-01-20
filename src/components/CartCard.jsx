import React, {useState} from "react";
import styles from './style/CartCard.module.css';

export default function CartCard({produit} , menuCursor, handleCursor) {

  const [quantity, setQuantity] = useState(1);
  const handleMinus = () => {
    setQuantity(quantity -1)
  } 
  const handlePlus = () => {
    setQuantity(quantity +1)
  } 

  return (
    <div className={styles.productCard}>
      <div className={styles.productDesc}>
        <img className={styles.productimg} src={produit.imgUrl} alt={produit.name} />
        <div className={styles.productText}>
          <h4>{produit.name}</h4>
          <p className={styles.seller}>Vendu par {produit.vendeur}.</p>
          <p>Livraison par <img className={styles.MmLogo} src="https://www.sdbpro.fr/wp-content/uploads/2018/09/Picto-ManoMano.jpg" alt="logo Manomano"/></p>
        </div>
      </div>
      <div className={styles.productprice}>
        <div className={styles.quantity}>
        <button className={styles.quantityMinus} onClick={() => handleMinus()}></button>
        <h3 className={styles.quantityNumber}>{quantity}</h3>
        <button className={styles.quantityPlus} onClick={() => handlePlus()}></button>
        </div>
        <h2>{produit.prix} €</h2>
      </div>
      <div className={styles.productOptions}>
        { menuCursor!==2 && <button onClick={() => handleCursor(2)}>
          <img className={styles.icon} src="/assets/icon-pin.png" alt="icon pin"/>
          Mettre de côté</button>}
        <button><img className={styles.icon} src="/assets/icon-trashcan.png" alt="icon trashcan"/>Supprimer</button>
      </div>
    </div>
  )
};
