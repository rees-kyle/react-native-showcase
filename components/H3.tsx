import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface H3Props extends TextProps {
  children: React.ReactNode;
}

export default function H3({ children, style, ...props }: H3Props) {
  return (
    <Text style={[styles.h3, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h3: {
    fontSize: 18,
    fontWeight: '500',
    color: '#DDDDDD',
    marginBottom: 10
  },
});
