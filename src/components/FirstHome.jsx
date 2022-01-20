/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import emailjs from "@emailjs/browser";
import CartCard from "./CartCard";
import CartProductsContext from '../contexts/cartProducts';
import styles from './style/FirstHome.module.css';
import Slider from "./slider";

export default function FirstHome() {
  let navigate = useNavigate();
  const { cartProducts } = useContext(CartProductsContext);

  const [open, setOpen] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  
  const [displayFriend, setDisplayFriend] = useState({visibility: "hidden"})
  const totalPrice = cartProducts.map(item => item.prix).reduce((prev, next) => prev + next);
  const [date, setDate] = useState()
  const [email1, setEmail1] = useState() 
  const [prenom1, setPrenom1] = useState()
  
  const templateParams = {
    to_name:  prenom1,
    from_name: "Sophie",
    reply_to: email1,
    message: `J'ai prévu des travaux le ${date}. Est-ce que tu peux m'aider à choisir le bon matériel ? Voici le panier que j'envisage : http://localhost:3000/invited`,
  };

  function HandleSendEmail() {
    console.log(templateParams)
    emailjs
      .send(
        "service_6a148wq",
        "template_n4bo00q",
        templateParams,
        "user_xf2iWZaUeG71gXUlIEPyA"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    setOpen(false);
    setOpenModal2(true);
  }

  function OpenModal() {
    setOpen(true);
  }

  function handleDisplayNewFriend() {
    setDisplayFriend({ visibility: "visible" });
  }
  const [menuCursor, setMenuCursor] = useState(1);

  const handleCursor = (cursor) => {
    setMenuCursor(cursor);
  };
  
 

  const handleList = () => {
    handleCursor(3);
    navigate('/listsorga');
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerCo}></div>
      <div className={styles.continuer}>
        <div className={styles.LArrow}></div>
        <h4>Continuer mes achats</h4>
      </div>
      <div className={styles.onglets}>
        <button
          className={styles.ongletActif}
          onClick={() => handleCursor(1)}
          style={menuCursor === 1 ? { color: `#0c193a` } : { color: `#505971` }}
        >
          Panier ({cartProducts.length})
        </button>
        <button
          onClick={() => handleCursor(2)}
          style={menuCursor === 2 ? { color: `#0c193a` } : { color: `#505971` }}
        >
          Mis de côté
        </button>
        <button
          onClick={() => handleList()}
          style={menuCursor === 3 ? { color: `#0c193a` } : { color: `#505971` }}
        >
          Participatif
        </button>
      </div>
      <div className={styles.cursorLine}>
        <div
          className={styles.cursor1}
          style={menuCursor === 1 ? { background: `#0c193a` } : null}
          id="cursor1"
        ></div>
        <div
          className={styles.cursor2}
          style={menuCursor === 2 ? { background: `#0c193a` } : null}
          id="cursor2"
        ></div>
        <div
          className={styles.cursor3}
          style={menuCursor === 3 ? { background: `#0c193a` } : null}
          id="cursor3"
        ></div>
      </div>
      <div className={styles.cartProducts}>
        {cartProducts &&
          cartProducts.map((produit, menuCursor, handleCursor) => (
            <CartCard
              key={produit.id}
              produit={produit}
              menuCursor={menuCursor}
              handleCursor={handleCursor}
            />
          ))}

        <div className={styles.buttonHome}>
          <div className={styles.buttonIntroPresentation}>
            <p className={styles.buttonIntroText}>
              Besoin d'un coup de main pour finaliser vos achats ? Demandez
              l'avis de vos amis en cliquant ci-dessous !
            </p>
          </div>
          <Button className={styles.buttonShare} onClick={OpenModal}>
            Partager mon panier
          </Button>
          <Modal isOpen={open} toggle={() => setOpen(false)}>
            <ModalHeader >
              <p className={styles.modalHeader}>Partage ton panier avec tes amis</p>
            </ModalHeader>
            <ModalBody >
              <div className={styles.modalInputMain}>
              <label for="start" className={styles.modalDate}> Date des travaux : </label>
              <input
                type="date"
                id="start"
                name="workStart"
                min="2022-01-19"
                max="2032-01-19"
                onChange={(e) => setDate(e.target.value)}
              />
              <label for="email" className={styles.modalDateEmail}> Renseigne l'email de tes amis :</label>
              <input
                placeholder="prénom"
                type="text"
                id="prenom1"
                onChange={(e) => setPrenom1(e.target.value)}
                size="30"
                required
              />
              <input
                placeholder="email"
                type="email"
                id="email1"
                onChange={(e) => setEmail1(e.target.value)}
                pattern=".+@globex.com"
                size="30"
                required
              />
              <button onClick={handleDisplayNewFriend}>+</button>
              <p className={styles.modalTemplateEmail}>Bonjour ! </p>
              <p className={styles.modalTemplateEmail}>J'ai prévu des travaux le {date} ! </p>
              <p className={styles.modalTemplateEmail}>Est-ce que tu peux m'aider à choisir le bon matériel ? </p>
              <p className={styles.modalTemplateEmail}>Sur ce lien, voici le panier que j'envisage : http://localhost:3000/invited, n'hésites pas à ajouter des produits si il en manque. </p>
              <p className={styles.modalTemplateEmail}>A bientôt ! </p>
              <div style={displayFriend}>
                <input
                  placeholder="prénom"
                  type="text"
                  id="prenom2"
                  size="30"
                  required
                />
                <input
                  placeholder="email"
                  type="email"
                  id="email2"
                  pattern=".+@globex.com"
                  size="30"
                  required
                />
                
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <button onClick={HandleSendEmail} className={styles.modalTemplateEmailButton} >Envoyer</button>
            </ModalFooter>
          </Modal>
        </div>
        <div>

          <Modal isOpen={openModal2} toggle={() => setOpenModal2(false)}>
            <ModalBody>
              <div>Merci ! Un email a bien été envoyé à tes amis</div>
            </ModalBody>
          </Modal>
        </div>
          <div className={styles.cartPrice}>
            <div className={styles.cartSecondContainer}>
              <div className={styles.cartText}>
                <h3>Total du panier</h3>
                <p>Frais de livraison calculés à l'étape suivante</p>
              </div>
              <h2>{totalPrice} €</h2>
            </div>
            <button className={styles.cartButton}>Passer à la livraison</button>
          </div>
        </div>
      </div>
  );
}
