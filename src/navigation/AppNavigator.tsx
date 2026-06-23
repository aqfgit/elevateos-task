import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PokemonDetailsScreen } from '../features/Pokedex/PokemonDetailsScreen/PokemonDetailsScreen';
import { PokemonListScreen } from '../features/Pokedex/PokemonListScreen/PokemonListScreen';
import { ParamList } from './types';

const Stack = createNativeStackNavigator<ParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PokemonListScreen">
        <Stack.Screen name="PokemonListScreen" component={PokemonListScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="PokemonDetailsScreen"
          component={PokemonDetailsScreen}
          options={{ title: 'Pokémon details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
