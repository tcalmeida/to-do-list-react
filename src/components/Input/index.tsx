import { InputItem } from './style';

interface InputProps {
  type: string;
  placeholder: string;
}

const Input = (props: InputProps) => {
  return <Input type="text" placeholder={props.placeholder}></Input>;
};

export default Input;
