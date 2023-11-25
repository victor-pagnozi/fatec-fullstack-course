import { useEffect, useState } from "react";
import { ItemsList } from "../../shared/components/ItemsList";
import "./style.css";
import { ButtonSubmit } from "../../shared/components/ButtonSubmit";
import { Link } from "react-router-dom";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const response = await fetch("http://localhost:3000/products");

    const data = await response.json();

    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <section id="products-list">
      <ItemsList products={products} />

      <div className="actions-products-list">
        <Link to={"/create"} className="actions-products-list-button">
          <ButtonSubmit name="CRIAR UM NOVO PRODUTO" />
        </Link>
      </div>
    </section>
  );
};
