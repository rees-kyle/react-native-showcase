import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import TopicButton from '../components/TopicButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

export default function ReactNativeShowcaseScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.container}>
      <TopicButton
        text="1.  Setup and Environment"
        onPress={() => {
          navigation.navigate('SetupAndEnvironment');
          console.log('Setup and Environment button pressed.');
        }}
      />
      <TopicButton
        text="2.  Core Components"
        onPress={() => {
          navigation.navigate('CoreComponents');
          console.log('Core Components button pressed.');
        }}
      />
      <TopicButton
        text="3.  Styling"
        onPress={() => {
          navigation.navigate('Styling');
          console.log('Styling button pressed.');
        }}
      />
      <TopicButton
        text="4.  React Navigation Library"
        onPress={() => {
          navigation.navigate('ReactNavigationLibrary');
          console.log('React Navigation Library button pressed.');
        }}
      />
      <TopicButton
        text="5.  Platform API and Native Features"
        onPress={() => {
          navigation.navigate('PlatformAPIAndNativeFeatures');
          console.log('Platform API and Native Features button pressed.');
        }}
      />
      <TopicButton
        text="6.  Native Modules and Third Party Libraries"
        onPress={() => {
          navigation.navigate('NativeModulesAndThirdPartyLibraries');
          console.log('Native Modules and Third Party Libraries button pressed.');
        }}
      />
      <TopicButton
        text="7.  State and Context"
        onPress={() => {
          navigation.navigate('StateAndContext');
          console.log('State and Context button pressed.');
        }}
      />
      <TopicButton
        text="8.  Networking"
        onPress={() => {
          navigation.navigate('Networking');
          console.log('Networking button pressed.');
        }}
      />
      <TopicButton
        text="9.  Animations"
        onPress={() => {
          navigation.navigate('Animations');
          console.log('Animations button pressed.');
        }}
      />
      <TopicButton
        text="10.  Debugging and Testing"
        onPress={() => {
          navigation.navigate('DebuggingAndTesting');
          console.log('Debugging and Testing button pressed.');
        }}
      />
      <TopicButton
        text="11.  Building and Deployment"
        onPress={() => {
          navigation.navigate('BuildingAndDeployment');
          console.log('Building and Deployment button pressed.');
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // matches your dark theme
    padding: 0,
    gap: 12,
  },
});
