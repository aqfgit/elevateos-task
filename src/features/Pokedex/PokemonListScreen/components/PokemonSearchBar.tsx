import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export const PokemonSearchBar = ({ value, onChangeText }: Props) => {
  return (
    <View style={styles.searchWrapper}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search Pokémon..."
        style={styles.searchInput}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
  },
});
