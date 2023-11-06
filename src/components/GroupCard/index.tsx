import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
}
// TouchableOpacityProps no props pq precisamos usar os recursos do botão

export function GroupCard({ title, ...rest }: Props) {
  //o ..rest é para indicar todas as outras propriedades do botão que não foi passada explicitamente
  return (
    <Container {...rest}>
      <Icon />
      <Title>
        {title}
      </Title>
    </Container>
  )
}