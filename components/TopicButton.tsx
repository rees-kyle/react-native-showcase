import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Define the props that the component accepts
interface Props {
  text: string;          // The label shown on the button
  onPress?: () => void;  // A function to run when button is pressed
};

// Define the functional component using props
export default function TopicButton({ text, onPress }: Props) {
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
    borderColor: '#FFFAFA',
    borderRadius: 4,
    margin: 5
  },
  text: {
    color: '#FFFAFA',
    fontSize: 16,
    fontWeight: '600'
  },
});