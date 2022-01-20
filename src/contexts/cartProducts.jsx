import React, { createContext, useState } from 'react';

const CartProductsContext = createContext({});

export default CartProductsContext;

export const CartProductsContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([{
    "id": 1,
    "name": "Peinture intérieur Blanc Satin Murs & Plafonds Bicouche Acrylique 10L - 100m² - Blanc",
    "productRef": "ME10486098",
    "prix": 49,
    "vendeur": "Renaulac",
    "imgUrl": "https://cdn.manomano.com/peinture-interieur-blanc-satin-murs-plafonds-bicouche-acrylique-10l-100m-renaulac-blanc-P-4063946-10806872_1.jpg"
  }])
  return <CartProductsContext.Provider value={{ cartProducts, setCartProducts }}>{children}</CartProductsContext.Provider>;
};
