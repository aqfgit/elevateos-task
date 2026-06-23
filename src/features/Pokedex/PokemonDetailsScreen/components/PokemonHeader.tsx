import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Pokemon } from '../../../../services/types';
import { PokemonInfoRow } from './PokemonInfoRow';
import { getPokemonImage } from '../../utils/getPokemonImage';

type Props = {
  pokemon: Pokemon;
};

export const PokemonHeader = ({ pokemon }: Props) => {
  const formattedTypes = pokemon.types.map(t => t.type.name).join(', ');
  const imageSource = getPokemonImage(pokemon.id);
  return (
    <View style={styles.headerRow}>
      <View style={styles.imageWrapper}>
        {imageSource ? (
          <Image source={imageSource} style={styles.image} />
        ) : (
          <Text style={styles.placeholderText}>?</Text>
        )}
      </View>

      <View style={styles.headerInfo}>
        <Text style={styles.nameText}>{pokemon.name}</Text>
        <PokemonInfoRow label="Id" value={pokemon.id} />
        <PokemonInfoRow label="Types" value={formattedTypes} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    marginBottom: 24,
    alignItems: 'flex-start',
  },
  imageWrapper: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#dce8f5',
    borderWidth: 1,
    borderColor: '#b0c4de',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  placeholderText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#999999',
  },
  headerInfo: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 8,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textTransform: 'capitalize',
    marginBottom: 12,
  },
});
