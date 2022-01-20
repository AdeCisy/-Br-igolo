import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CartCard from "./CartCard";
import styles from './FirstHome.module.css';


export default function FirstHome() {

  const [open, setOpen] = useState(false)
  
  function OpenModal() {
    setOpen(true)
  }

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
      <div>
      <Button color="danger" onClick={OpenModal}>Partager mon panier</Button>
      <Modal isOpen={open} toggle={() => setOpen(false)}>
        <ModalHeader>
          Modal title
        </ModalHeader>
        <ModalBody>
          Modal body text goes here.
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
      </div>
      </div>
      
      <div className={styles.cartPrice}></div>
    </div>
  )
};
