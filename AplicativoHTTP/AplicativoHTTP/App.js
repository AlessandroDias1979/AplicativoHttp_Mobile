import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './Src/Home';
import Pessoa from './Src/Pessoa';

export default function App() {
  
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
           <Stack.Screen name="Home" component={Home}/>
           <Stack.Screen name="Pessoa" component={Pessoa}/>
        </Stack.Navigator>
    </NavigationContainer>

  );
}


