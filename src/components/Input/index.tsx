import { TextInputProps, TextInput } from "react-native";

import { useTheme } from "styled-components/native";
import { Container } from "./styles";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
}


export function Input({inputRef, ...rest}: Props) {
  const { COLORS } = useTheme(); //como usar o theme fora do styled components

  return (
    <Container
      ref={inputRef} //commo o ...rest não possui a propriedade ref passamos ela
      placeholderTextColor={COLORS.GRAY_300}
      {...rest} 
    />
  )
}