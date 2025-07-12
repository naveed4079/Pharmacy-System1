import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { HomeScreen } from './src/screens/HomeScreen';
import { AddMedicineScreen } from './src/screens/AddMedicineScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddMedicine" component={AddMedicineScreen} options={{ title: 'Add Medicine' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
