import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PokemonInfoRow } from '@/features/Pokedex/PokemonDetailsScreen/components/PokemonInfoRow';
import { Pokemon } from '@/services/types';

type Props = {
  stats: Pokemon['stats'];
};

export const PokemonCombatStats = ({ stats }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Stats:</Text>

      {stats.map(statItem => (
        <PokemonInfoRow
          key={statItem.stat.name}
          label={statItem.stat.name.toUpperCase()}
          value={statItem.base_stat}
          isLabelBold={false}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 12,
  },
});
