import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopicButton from '../../components/TopicButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export function DebuggingAndTestingScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopicButton
        text="10.1  Debugging"
        onPress={() => {
          navigation.navigate('Debugging');
          console.log('Debugging button pressed.');
        }}
      />
      <TopicButton
        text="10.2  Logging"
        onPress={() => {
          navigation.navigate('Logging');
          console.log('Logging button pressed.');
        }}
      />
      <TopicButton
        text="10.3  Testing"
        onPress={() => {
          navigation.navigate('Testing');
          console.log('Testing button pressed.');
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
