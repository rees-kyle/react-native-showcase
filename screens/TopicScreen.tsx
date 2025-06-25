import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native';
import { topicContentMap } from '../data/topicContent';
import { RootStackParamList } from '../navigation/AppNavigator';

type TopicScreenRouteProp = RouteProp<RootStackParamList, 'Topic'>;

export default function TopicScreen() {
  const route = useRoute<TopicScreenRouteProp>();
  const { fullTitle, content } = route.params;

  const [loadedContent, setLoadedContent] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const loader = topicContentMap[fullTitle];
      if (loader) {
        const text = await loader();
        setLoadedContent(text);
      } else {
        setLoadedContent(content); // fallback
      }
    };
    load();
  }, [fullTitle]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{fullTitle}</Text>
      {loadedContent ? (
        <Text style={styles.content}>{loadedContent}</Text>
      ) : (
        <ActivityIndicator size="large" color="#999" />
      )}
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
