import { useEffect, useState } from "react";
import HamburgerIcon from "../../../assets/hamburger.png";
import PizzaIcon from "../../../assets/pizza.png";
import "./style.css";

export const HeaderComponent = () => {
  const [currentTitle, setCurrentTitle] = useState("");

  useEffect(() => {
    if (window.location.pathname === "/create") {
      setCurrentTitle("Criar pedido");
    }

    if (window.location.pathname === "/") {
      setCurrentTitle("SEJA MUITO BEM VINDO");
    }
  }, []);

  return (
    <>
      <h1 id="header">
        <img src={HamburgerIcon} alt="Imagem de um hamburger" />
        MINHA XEPA
        <img src={PizzaIcon} alt="Imagem de uma pizza" />
      </h1>
      <p id="header-subtitle">{currentTitle}</p>
    </>
  );
};
