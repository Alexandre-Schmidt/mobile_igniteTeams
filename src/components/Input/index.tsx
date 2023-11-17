import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme(); //como usar o theme fora do styles

  return (
    <Container
      placeholderTextColor={COLORS.GRAY_300}
      {...rest} 
    />
  )
}