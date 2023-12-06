import { useCallback, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import {useFocusEffect, useNavigation} from "@react-navigation/native"

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';

import { Container } from './styles';
import { isLoading } from 'expo-font';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate("new")
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await groupsGetAll();
      setGroups(data)
      
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível carregar as turmas');
      console.log(error);
    } finally {
      setIsLoading(false);
    } 
  }
  
//o useFocusEffect é usado para identificar quando o foco estiver na tela e renderizar novamente
// e o useCallback é usado para não ter renderização desnecessarias
  useFocusEffect(useCallback(() => { 
    fetchGroups()
  },[]))

  return (
    <Container>
      <Header />

      <Highlight title='Turmas' subtitle='jogue com a sua turma' />

      {
        isLoading ? <Loading /> :
        <FlatList 
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard 
              title={item}
              onPress={() => handleOpenGroup(item)} 
            />
          )}
            
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
            // Se estiver vazio o contentContainerStyle centraliza o conteudo na tela
            
          ListEmptyComponent={() => (
            // é uma propriedade do FlatList que indica qual componente deve ser exibido quando a lista estiver vazia.
            <ListEmpty message="Que tal cadastrar a primeira turma?" />
          )}
          showsVerticalScrollIndicator={false}//remover a barra lateral
        />
      }
      
       <Button 
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  );
}