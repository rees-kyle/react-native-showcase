import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextProps } from 'react-native';

interface CodeBlockProps extends TextProps {
  children: string;
}

export default function CodeBlock({ children, style, ...props }: CodeBlockProps) {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollContainer}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={[styles.code, style]} {...props}>
          {children}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 0,
  },
  container: {
    backgroundColor: '#1E1E1E', // Code editor-like background
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    minWidth: '100%',
  },
  code: {
    color: '#3cb371',
    fontFamily: 'monospace',
    fontSize: 14,
    fontWeight: 900,
    lineHeight: 20,
  },
});
