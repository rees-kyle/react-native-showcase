import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopicButton from '../../components/TopicButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export function StateAndContextScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopicButton
        text="7.1  Reuse React Knowledge"
        onPress={() => {
          navigation.navigate('ReuseReactKnowledge');
        }}
      />
      <TopicButton
        text="7.2  AsyncStorage"
        onPress={() => {
          navigation.navigate('AsyncStorage');
        }}
      />
      <TopicButton
        text="7.3  Secure Storage Options"
        onPress={() => {
          navigation.navigate('SecureStorageOptions');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
    gap: 12,
  },
});
