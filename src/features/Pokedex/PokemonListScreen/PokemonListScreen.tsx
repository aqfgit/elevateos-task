import * as React from 'react';

import { useCallback, useMemo, useState } from 'react';
import { PokemonListItem } from '@/features/Pokedex/PokemonListScreen/components/PokemonListItem';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { PokemonSearchBar } from '@/features/Pokedex/PokemonListScreen/components/PokemonSearchBar';
import { ListPokemon } from '@/services/types';
import { useGetPokemonListQuery } from '@/services/pokemonApi';

export const PokemonListScreen = () => {
  const { data, isLoading, isFetching, error, refetch } = useGetPokemonListQuery();
  const [searchText, setSearchText] = useState('');

  const filteredPokemon = useMemo(() => {
    if (!data) {
      return [];
    }
    if (!searchText) {
      return data;
    }

    const lowercasedSearch = searchText.toLowerCase();
    return data.filter(item => item.name.toLowerCase().includes(lowercasedSearch));
  }, [data, searchText]);

  const renderListItem = useCallback(({ item }: { item: ListPokemon }) => <PokemonListItem item={item} />, []);

  const renderEmptyState = () => {
    if (isLoading) {
      return (
        <View style={styles.emptyContainer}>
          <ActivityIndicator size="large" color="#ff0000" />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.errorText}>Failed to load Pokédex.</Text>
          <Text style={styles.subText}>Pull down to try again</Text>
        </View>
      );
    }

    if (searchText && filteredPokemon.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.subText}>No Pokémon found for "{searchText}"</Text>
        </View>
      );
    }

    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.subText}>No Pokémon available right now.</Text>
        <Text style={styles.subText}>Pull down to refresh</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.title}>Pokédex</Text>

      <PokemonSearchBar value={searchText} onChangeText={setSearchText} />

      <FlatList
        data={filteredPokemon}
        renderItem={renderListItem}
        keyExtractor={(item: ListPokemon) => String(item.id)}
        ListEmptyComponent={renderEmptyState}
        onRefresh={refetch}
        refreshing={isFetching && !isLoading}
        contentContainerStyle={[styles.listPadding, !filteredPokemon.length && styles.flexGrow]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: '700',
    color: '#ff0000',
    fontSize: 25,
    marginVertical: 24,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  errorText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  subText: {
    color: '#666666',
    fontSize: 16,
  },
  listPadding: {
    paddingBottom: 24,
  },
  flexGrow: {
    flexGrow: 1,
  },
});
