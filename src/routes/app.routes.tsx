import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { Groups } from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
  return (
    <Navigator screenOptions={{headerShown: false}}> 
      {/* headerShown remove o cabeçalho padrão criado */}
      {/*Por padrão sempre carrega primeiro a primeira <Screen> definida*/}
      <Screen
        name="groups"
        component={Groups}
      />

      <Screen
        name="new"
        component={NewGroup}
      />

      <Screen
        name="players"
        component={Players}
      />

    </Navigator>
  )
}