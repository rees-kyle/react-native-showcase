import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface H4Props {
  children: React.ReactNode;
}

export default function H4({ children }: H4Props) {
  return <Text style={styles.h4}>{children}</Text>;
}

const styles = StyleSheet.create({
  h4: {
    fontSize: 16,
    fontWeight: '600',
    color: '#DDDDDD',
    marginTop: 16,
    marginBottom: 8,
  },
});
