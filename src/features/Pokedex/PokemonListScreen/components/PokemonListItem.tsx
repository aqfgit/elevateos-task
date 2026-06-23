import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { memo } from 'react';
import { ParamList } from '@/navigation/types';
import { ListPokemon } from '@/services/types';
import { getPokemonImage } from '@/features/Pokedex/utils/getPokemonImage';

type Props = { item: ListPokemon };

export const PokemonListItem = memo(({ item }: Props) => {
  const { navigate } = useNavigation<NavigationProp<ParamList, 'PokemonListScreen'>>();

  const { id } = item;
  if (!id) {
    return null;
  }

  const imageSource = getPokemonImage(id);
  if (!imageSource) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text style={styles.placeholderText}>?</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('PokemonDetailsScreen', { pokemonId: id })}
      accessibilityRole="button"
      accessibilityLabel={`Open ${item.name} details`}>
      <View style={styles.imageWrapper}>
        <Image source={imageSource} style={styles.image} />
      </View>

      <Text style={styles.nameText}>
        {id}. {item.name}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 12,
    marginVertical: 6,
  },
  imageWrapper: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: 54,
    height: 54,
    resizeMode: 'contain',
  },
  nameText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginLeft: 16,
    textTransform: 'capitalize',
  },
  centerContent: {
    justifyContent: 'center',
    height: 88,
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#999999',
  },
});
