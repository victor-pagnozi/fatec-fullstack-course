/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronDown, FileEdit, Trash2 } from "lucide-react";
import "./style.css";
import { useState } from "react";

export const ItemsList = ({
  products,
  loadProducts,
}: {
  products: any[];
  loadProducts: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const erase = async (productId: string) => {
    const canDelete = window.confirm("Deseja realmente deletar este item?");

    if (canDelete) {
      try {
        await fetch(`http://localhost:3000/products/${productId}`, {
          method: "DELETE",
        });

        loadProducts();
      } catch (err) {
        console.error(err);
      }
    }
  };

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
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.ingredients}</td>
                  <td>R$ {(item.price / 100).toFixed(2)}</td>
                  <td className="table-actions">
                    <FileEdit />
                    <Trash2 color="red" onClick={() => erase(item.id)} />
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
