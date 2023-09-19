import { ButtonHTMLAttributes } from "react";
import "./style.css";

interface ButtonCancelProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

export const ButtonCancel = (props: ButtonCancelProps) => {
  return <button id="button-cancel" {...props}>{props.name}</button>;
};
