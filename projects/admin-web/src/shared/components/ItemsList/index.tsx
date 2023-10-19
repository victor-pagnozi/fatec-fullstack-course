import { ChevronDown, FileEdit, Trash2 } from "lucide-react";
import "./style.css";

export const ItemsList = () => {
  return (
    <>
      <section id="items-list">
        <div>
          <ChevronDown />
          <h2>PIZZA</h2>
          <ChevronDown />
        </div>
      </section>

      <div className="menu-items">
        <table>
          <thead>
            <tr>
              <td>NOME</td>
              <td>COMPONENTES</td>
              <td className="value-column">VALOR R$</td>
              <td>EDITAR</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan={4}></td>
            </tr>
            <tr>
              <td>PORTUGUESA</td>
              <td>MOLHO DE TOMATE, QUEIJO MUSSARELA, PRESUNTO, ERVILHAS</td>
              <td>R$ 49.90</td>
              <td>
                <FileEdit />
                <Trash2 />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
