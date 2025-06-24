// components/SectionCard.tsx

import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type SectionCardProps = {
  title: string;
  onPress: () => void;
};

export default function SectionCard({ title, onPress }: SectionCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});
