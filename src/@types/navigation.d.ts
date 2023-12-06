export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      //é a rota e se tem um paramentro, se não tiver parametro coloca no undefined..
      // no caso o players tem
      groups: undefined;
      new: undefined;
      players: {
        group: string;
      }
    }
  }
}