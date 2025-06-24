// components/TopicItem.tsx

import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type TopicItemProps = {
  title: string;
  onPress: () => void;
};

export default function TopicItem({ title, onPress }: TopicItemProps) {
  return (
    <Pressable style={styles.item} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#dcdcdc',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
