// screens/HomeScreen.tsx
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import SectionCard from '../components/SectionCard';
import { docsData } from '../data/docs';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <FlatList
        data={docsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SectionCard
            title={item.title}
            onPress={() => navigation.navigate('Section', { section: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
