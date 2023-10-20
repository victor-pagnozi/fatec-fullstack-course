import { ChevronDown, FileEdit, Trash2 } from "lucide-react";
import "./style.css";
import { useState } from "react";

export const ItemsList = ({ products }: { products: any[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="items-list" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <ChevronDown />
          <h2>PIZZA</h2>
          <ChevronDown />
        </div>
      </section>

      {isOpen && (
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
              {products.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.ingredients}</td>
                  <td>R$ {(item.price / 100).toFixed(2)}</td>
                  <td className="table-actions">
                    <FileEdit />
                    <Trash2 color="red" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
