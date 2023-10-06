import { ButtonCancel } from "../../shared/components/ButtonCancel";
import { ButtonSubmit } from "../../shared/components/ButtonSubmit";
import './style.css'

export const CreateProductPage = () => {
  return (
    <form>
      <span>
        <label htmlFor="product-name">Nome: </label>
        <input type="text" id="product-name" required />
      </span>

      <span>
        <label htmlFor="product-ingredients">Ingredientes: </label>
        <textarea id="product-ingredients" required></textarea>
      </span>

      <span>
        <label htmlFor="product-value">Valor: </label>
        <input type="text" id="product-value" required />
      </span>

      <div className="buttons-form">
        <ButtonSubmit name="Salvar" />
        <ButtonCancel name="Cancelar" type="reset" />
      </div>
    </form>
  );
};
