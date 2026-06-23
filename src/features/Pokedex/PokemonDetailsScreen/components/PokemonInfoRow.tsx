import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  label: string;
  value: string | number;
  isLabelBold?: boolean;
};

export const PokemonInfoRow = ({ label, value, isLabelBold = true }: Props) => {
  return (
    <View style={styles.infoRow}>
      <Text style={[styles.labelBase, isLabelBold && styles.labelBold]}>{label}: </Text>
      <Text style={[styles.value]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    flexWrap: 'wrap',
  },
  labelBase: {
    fontSize: 16,
    color: '#000000',
  },
  labelBold: {
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    color: '#333333',
  },
});
