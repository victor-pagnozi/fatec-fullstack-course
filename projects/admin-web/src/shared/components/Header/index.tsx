import HamburgerIcon from "../../../assets/hamburger.png";
import PizzaIcon from "../../../assets/pizza.png";
import "./style.css";

export const HeaderComponent = () => {
  return (
    <h1 id="header">
      <img src={HamburgerIcon} alt="Imagem de um hamburger" />
      MINHA XEPA
      <img src={PizzaIcon} alt="Imagem de uma pizza" />
    </h1>
  );
};
