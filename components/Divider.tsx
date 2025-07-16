import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: '#444',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 16,
    width: '100%',
  },
});
