// screens/TopicScreen.tsx

import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { topicDetails } from '../data/topicContent';
import { RootStackParamList } from '../navigation/AppNavigator';

type TopicScreenRouteProp = RouteProp<RootStackParamList, 'Topic'>;

export default function TopicScreen() {
  const route = useRoute<TopicScreenRouteProp>();
  const { title, content } = route.params;

  const fullContent = topicDetails[title] ?? content;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{fullContent}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});