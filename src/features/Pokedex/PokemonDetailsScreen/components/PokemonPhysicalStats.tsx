import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Pokemon } from '../../../../services/types';
import { PokemonInfoRow } from './PokemonInfoRow';

type Props = {
  pokemon: Pokemon;
};

export const PokemonPhysicalStats = ({ pokemon }: Props) => {
  return (
    <View style={styles.container}>
      <PokemonInfoRow label="Height" value={`${pokemon.height / 10} m`} />
      <PokemonInfoRow label="Weight" value={`${pokemon.weight / 10} kg`} />
      <PokemonInfoRow label="Base exp" value={pokemon.base_experience} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
});
