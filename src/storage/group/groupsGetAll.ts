import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/storageConfig';

export async function groupsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION); //pega os valores

    const groups: string[] = storage ? JSON.parse(storage) : []; //se tiver conteudo no storage transformar em objeto

    return groups;
  } catch (error) {
    throw error;
  }
}