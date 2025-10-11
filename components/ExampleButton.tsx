import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  text: string;
  onPress?: () => void;
}

export default function ExampleButton({ text, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.6}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0A0A0A',
    paddingVertical: 20,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 4,
    margin: 5,
  },
  text: {
    color: '#DDDDDD',
    fontSize: 16,
    fontWeight: '600',
  },
});
