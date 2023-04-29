import { ButtonDefault } from './styles';

interface ButtonProps {
  text: string;
  color: string;
  action?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonDefault color={props.color} onClick={props.action}>
      {props.text}
    </ButtonDefault>
  );
};

export default Button;
