import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AppError } from "@utils/AppError";

import { groupCreate } from "@storage/group/groupCreate";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation();

  async function handleNew(){
    try {
      if(group.trim().length === 0){
        return Alert.alert("Novo Grupo", "Informe o nome da turma")
      }

      await groupCreate(group)
      navigation.navigate('players', { group:group }) // passado o estado para outra tela
    } catch (error) {
      if(error instanceof AppError){ //se o error é a msg que criamos
        Alert.alert("Novo Grupo", error.message)
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo")
        console.log(error)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        
        <Highlight 
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button 
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}