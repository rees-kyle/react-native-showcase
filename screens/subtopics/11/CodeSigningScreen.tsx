import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CodeSigningScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Placeholder.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  paragraph: {
    fontSize: 16,
    color: '#DDDDDD',
    lineHeight: 22,
  },
});
