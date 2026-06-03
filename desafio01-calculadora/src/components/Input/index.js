import { InputContainer } from './styles';

const Input = ({value}) => {
return (
    <InputContainer>
      <input type="text" placeholder="0" disabled value={value} />
    </InputContainer>
  );
}

export default Input;