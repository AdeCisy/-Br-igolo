import React, { useContext } from "react";

import CartProductsContext from "../contexts/cartProducts";
import styles from "./style/recoCard.module.css";

function RecommandationCard({ produit }) {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);
  function handleAddClick() {
    setCartProducts([...cartProducts, produit]);
  }
  return (
    <div className={styles.recoCardContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.image} src={produit.imgUrl} alt="" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.shortTitle}>{produit.name}</div>
        <div className={styles.rating}>
          <img src={produit.rating} alt="rating" />
        </div>
        <div className={styles.priceContainer}>
          <div className={styles.price}>{produit.prix}€</div>
          <div className={styles.materialicons} onClick={handleAddClick}>add_shopping_cart</div>
        </div>
      </div>
    </div>
  );
}

export default RecommandationCard;
