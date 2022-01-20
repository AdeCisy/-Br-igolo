import React, { useContext, useEffect } from "react";
import styles from "./style/CartCard.module.css";
import CartProductsContext from "../contexts/cartProducts";

export default function CartCard(
  { produit },
  menuCursor,
  handleCursor,
  button
) {
  const { cartProducts, setCartProducts } = useContext(CartProductsContext);
  function handleDeleteClick() {
    const newCart = cartProducts.filter((element) => element.id !== produit.id);
    setCartProducts(newCart);
  }

  useEffect(() => {
    console.table(cartProducts);
  }, [cartProducts]);

  return (
    <div className={styles.productCard}>
      <div className={styles.productDesc}>
        <img
          className={styles.productimg}
          src={produit.imgUrl}
          alt={produit.name}
        />
        <div className={styles.productText}>
          <h4>{produit.name}</h4>
          <p className={styles.seller}>Vendu par {produit.vendeur}.</p>
          <p>
            Livraison par{" "}
            <img
              className={styles.MmLogo}
              src="https://www.sdbpro.fr/wp-content/uploads/2018/09/Picto-ManoMano.jpg"
              alt="logo Manomano"
            />
          </p>
        </div>
      </div>
      <div className={styles.productprice}>
        <h3>1</h3>
        <h2>{produit.prix} €</h2>
      </div>
      <div className={styles.productOptions}>
        {/* { menuCursor!==1 && <button onClick={() => handleCursor(1)}><img className={styles.icon} src="/assets/icon-cart.png" alt="icon cart"/>Panier</button>} */}
        {menuCursor !== 2 && (
          <button onClick={() => handleCursor(2)}>
            <img
              className={styles.icon}
              src="/assets/icon-pin.png"
              alt="icon pin"
            />
            Mettre de côté
          </button>
        )}
        <button onClick={button !== "disabled" && handleDeleteClick}>
          <img
            className={styles.icon}
            src="/assets/icon-trashcan.png"
            alt="icon trashcan"
          />
          Supprimer
        </button>
      </div>
    </div>
  );
}
