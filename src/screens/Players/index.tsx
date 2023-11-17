import { useState } from 'react';
import { FlatList } from 'react-native'

import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from '@components/PlayerCard';

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState(['Rodrigo', 'Vini', 'Alexandre'])

  return (
    <Container>
      <Header showBackButton />

      <Highlight 
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input 
          placeholder="Nome da pessoa"
          autoCorrect={false}//PARA NÃO TENTAR CORRIGIR ERRO ORTOGRAFICO
        />

        <ButtonIcon 
          icon="add"
        />
      </Form>
      
       <HeaderList>
        <FlatList 
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal//deixa um do lado do outro
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>
      
      <FlatList 
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayerCard 
            name={item} 
            onRemove={() => {}}
          />
        )}
      />

    </Container>
  )
}