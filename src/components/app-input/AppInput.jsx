import { Input, InputContainer, InputError } from "./AppInput.styled";

const AppInput = ({ value, onChange, onBlur, placeholder, error }) => {
  return (
    <InputContainer>
      <Input
        type="email"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        required
        error={Boolean(error)}
      />
      <InputError>{error}</InputError>
      {/* {error && <InputError>{error}</InputError>} */}
    </InputContainer>
  );
};

export default AppInput;
