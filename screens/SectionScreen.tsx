import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import TopicItem from '../components/TopicItem';
import { RootStackParamList } from '../navigation/AppNavigator';

type SectionScreenRouteProp = RouteProp<RootStackParamList, 'Section'>;
type SectionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Section'>;

export default function SectionScreen() {
  const route = useRoute<SectionScreenRouteProp>();
  const navigation = useNavigation<SectionScreenNavigationProp>();

  const { section } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={section.topics}
        keyExtractor={(item, index) => `${section.id}-${index}`}
        renderItem={({ item }) => (
          <TopicItem
            title={item}
            onPress={() =>
              navigation.navigate('Topic', {
                title: item,
                content: item, // Replace with actual content later
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
