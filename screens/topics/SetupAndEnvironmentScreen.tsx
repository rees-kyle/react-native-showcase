import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopicButton from '../../components/TopicButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export function SetupAndEnvironmentScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopicButton
        text="1.1  Installation"
        onPress={() => {
          navigation.navigate('Installation');
          console.log('Installation button pressed.');
        }}
      />
      <TopicButton
        text="1.2  Differences"
        onPress={() => {
          navigation.navigate('Differences');
          console.log('Differences button pressed.');
        }}
      />
      <TopicButton
        text="1.3  Running Apps"
        onPress={() => {
          navigation.navigate('RunningApps');
          console.log('Running Apps button pressed.');
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
