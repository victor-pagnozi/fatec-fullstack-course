import { useState } from "react";
import { ButtonCancel } from "../../shared/components/ButtonCancel";
import { ButtonSubmit } from "../../shared/components/ButtonSubmit";
import "./style.css";

export const CreateProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    ingredients: "",
    price: 0,
  });

  const handleChange = (event: any) => {
    event.preventDefault();

    const { name, value } = event.target;

    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const productsAsString = window.localStorage.getItem("products") ?? "[]";

    const products = JSON.parse(productsAsString);

    window.localStorage.setItem(
      "products",
      JSON.stringify([...products, product])
    );
    return window.location.replace("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>
        <label htmlFor="product-name">Nome: </label>
        <input
          type="text"
          id="product-name"
          value={product.name}
          name="name"
          required
          onChange={handleChange}
        />
      </span>

      <span>
        <label htmlFor="product-ingredients">Ingredientes: </label>
        <textarea
          name="ingredients"
          onChange={handleChange}
          id="product-ingredients"
          value={product.ingredients}
          required
        ></textarea>
      </span>

      <span>
        <label htmlFor="product-value">Valor: </label>
        <input
          value={product.price}
          onChange={handleChange}
          name="price"
          type="number"
          id="product-value"
          required
        />
      </span>

      <div className="buttons-form">
        <ButtonSubmit name="Salvar" />
        <ButtonCancel name="Cancelar" type="reset" />
      </div>
    </form>
  );
};
