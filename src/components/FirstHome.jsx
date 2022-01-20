import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import emailjs from '@emailjs/browser';
import CartCard from "./CartCard";
import styles from './FirstHome.module.css';


export default function FirstHome() {

  const [open, setOpen] = useState(false)
  
  const [displayFriend, setDisplayFriend] = useState({visibility: "hidden"})


  const templateParams = {
    to_name: 'Sophie',
    from_name:'Matthieu',
    reply_to: 'sophie.lepert@gmail.com',
    message: 'Test test test'
};

function HandleSendEmail(){
  emailjs.send('service_6a148wq','template_n4bo00q', templateParams, 'user_xf2iWZaUeG71gXUlIEPyA')
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
	   console.log('FAILED...', err);
	});
}

  function OpenModal() {
    setOpen(true)
  }

  function handleDisplayNewFriend() {
    setDisplayFriend({visibility:"visible"})
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
          Partage ton panier avec tes amis
        </ModalHeader>
        <ModalBody>
          <label for='start'> Date des travaux</label>
          <input type='date' id='start' name='workStart' min='2022-01-19' max='2032-01-19' />
          <label for="email"> Renseigne l'email de tes amis :</label>
          <input type="email" id="email" pattern=".+@globex.com" size="30" required />
          <button onClick={handleDisplayNewFriend}>+</button>
          <div style={displayFriend}>
          <input  type="email" id="email" pattern=".+@globex.com" size="30" required />
          </div>
        </ModalBody>
        <ModalFooter>
          <button onClick={HandleSendEmail}>Send</button>
        </ModalFooter>
      </Modal>
      </div>
      </div>
      
      <div className={styles.cartPrice}></div>
    </div>
  )
};
