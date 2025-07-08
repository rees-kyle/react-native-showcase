import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopicButton from '../components/TopicButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

export default function ReactNativeShowcaseScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopicButton
        text="1.  Setup and Environment"
        onPress={() => {
          navigation.navigate('SetupAndEnvironment');
          console.log('Setup and Environment button pressed.');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // matches your dark theme
    padding: 16,
    gap: 12,
  },
});
