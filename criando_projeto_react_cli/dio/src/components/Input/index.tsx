import { IInput } from "./types";

import { IconContainer, InputContainer, InputText, ErrorText } from "./styles";
import { Controller } from "react-hook-form";

const Input = ({leftIcon , name,control,errorMessage, ...rest}: IInput) => {
 return (
     <> 
     <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller 
            name={name}
            control={control}
            rules={{required: true}}
            render={({field: {value, onChange}}) => (<InputText {...rest} value={value} onChange={onChange}/>)}
        />              
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null }
    </>
 );
};

export { Input };
