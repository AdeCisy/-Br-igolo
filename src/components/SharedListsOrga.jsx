import React, { useState, useContext } from "react";
import styles from './style/FirstHome.module.css';
import CartProductsContext from '../contexts/cartProducts';
import {useNavigate} from 'react-router-dom';


export default function SharedListsOrga() {
  let navigate = useNavigate();

  const { cartProducts, setCartProducts } = useContext(CartProductsContext);

  const [menuCursor, setMenuCursor] = useState(3);

  const handleCursor = (cursor) => {
    setMenuCursor(cursor);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerCo}></div>
      <div className={styles.continuer}>
        <div className={styles.LArrow}></div>
        <h4>Continuer mes achats</h4>
      </div>
      <div className={styles.onglets}>
        <button className={styles.ongletActif} onClick={() => handleCursor(1)} style={ menuCursor===1 ? { color: `#0c193a` } : { color: `#505971` }}>Panier</button>
        <button onClick={() => handleCursor(2)} style={ menuCursor===2 ? { color: `#0c193a` } : { color: `#505971` }}>Mis de côté</button>
        <button onClick={() => handleCursor(3)} style={ menuCursor===3 ? { color: `#0c193a` } : { color: `#505971` }}>Participatif (3)</button>
      </div>
      <div className={styles.cursorLine}>
        <div className={styles.cursor1} 
        style={ menuCursor===1 ? { background: `#0c193a` } : null}
        id="cursor1"></div>
        <div className={styles.cursor2} 
        style={ menuCursor===2 ? { background: `#0c193a` } : null}
        id="cursor2"></div>
        <div className={styles.cursor3} 
        style={ menuCursor===3 ? { background: `#0c193a` } : null}
        id="cursor3"></div>
      </div>
      <div className={styles.sharedLists}>
        <div className={styles.myLists}>Mes listes partagées</div>
        <div className={styles.myList} onClick={()=> navigate('/mylist')}>
          <p>Ma liste partagée pour le <span>21 janvier 2022</span></p>
          <h4>{cartProducts.length} {cartProducts.length>1 ? 'produits' : 'produit'}</h4>
        </div>
        <div className={styles.otherLists}>Les listes partagées de mes amis</div>
        <div className={styles.list}>
          <p>Liste partagée de <span>Matthieu</span></p>
          <h4>4 produits</h4>
        </div>
        <div className={styles.list}>
          <p>Liste partagée de <span>Benjamin</span></p>
          <h4>28 produits</h4>
        </div>
      </div>
      <div className={styles.footerFix}></div>
    </div>
  )
};
