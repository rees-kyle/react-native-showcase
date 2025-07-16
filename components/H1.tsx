import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface H1Props extends TextProps {
  children: React.ReactNode;
}

export default function H1({ children, style, ...props }: H1Props) {
  return (
    <Text style={[styles.h1, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#DDDDDD',
    marginBottom: 16
  },
});
