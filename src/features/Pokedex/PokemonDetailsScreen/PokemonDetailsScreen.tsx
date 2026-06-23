import * as React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useGetPokemonDetailsQuery } from '../../../services/pokemonApi';
import { ParamList } from '../../../navigation/types';
import { PokemonCombatStats } from './components/PokemonCombatStats';
import { PokemonHeader } from './components/PokemonHeader';
import { PokemonPhysicalStats } from './components/PokemonPhysicalStats';

type Props = NativeStackScreenProps<ParamList, 'PokemonDetailsScreen'>;

export const PokemonDetailsScreen = ({ route }: Props) => {
  const { pokemonId } = route.params;
  const { data: pokemon, isLoading, error, refetch } = useGetPokemonDetailsQuery(pokemonId);

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#ff0000" />
      </View>
    );
  }

  if (error || !pokemon) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Failed to load Pokémon details.</Text>
        <Button title="Retry" onPress={refetch} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentPadding}>
      <PokemonHeader pokemon={pokemon} />

      <PokemonPhysicalStats pokemon={pokemon} />

      <PokemonCombatStats stats={pokemon.stats} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentPadding: {
    padding: 20,
    paddingBottom: 40,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  errorText: {
    fontSize: 18,
    color: '#ff0000',
    fontWeight: '600',
    marginBottom: 8,
  },
});
