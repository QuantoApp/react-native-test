import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/home/Home';
import DetailsScreen from './src/components/users/UserDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Listado de usuarios" component={HomeScreen}
         options={ScreenStyle} />
        <Stack.Screen name="Detalle de usuario" component={DetailsScreen}
         options={ScreenStyle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

export function ScreenStyle() {
  const style = {
    headerStyle: {
     backgroundColor: '#3D6DCC',
    },
   headerTintColor: '#fff'
  } 
  return style;
}