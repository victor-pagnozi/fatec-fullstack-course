interface ButtonSubmitProps {
  name: string;
}

export const ButtonSubmit = (props: ButtonSubmitProps) => {
  return <button>{props.name}</button>;
};
