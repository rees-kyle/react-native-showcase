import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BulletListProps {
  items: string[];
}

export default function BulletList({ items }: BulletListProps) {
  return (
    <View style={styles.list}>
      {items.map((item, index) => (
        <View style={styles.item} key={index}>
          <Text style={styles.bullet}>{'\u2022'}</Text>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 8,
    marginBottom: 16
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8
  },
  bullet: {
    color: '#DDDDDD',
    fontSize: 16,
    lineHeight: 22,
    marginRight: 8
  },
  text: {
    flex: 1,
    color: '#DDDDDD',
    fontSize: 16,
    lineHeight: 22
  },
});
