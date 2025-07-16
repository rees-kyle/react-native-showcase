import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface H2Props extends TextProps {
  children: React.ReactNode;
}

export default function H2({ children, style, ...props }: H2Props) {
  return (
    <Text style={[styles.h2, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 22,
    fontWeight: '600',
    color: '#DDDDDD',
    marginBottom: 12
  },
});
