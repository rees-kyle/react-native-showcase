import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface PProps extends TextProps {
  children: React.ReactNode;
}

export default function P({ children, style, ...props }: PProps) {
  return (
    <Text style={[styles.p, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  p: {
    fontSize: 16,
    lineHeight: 24,
    color: '#DDDDDD',
    marginBottom: 12,
  },
});
