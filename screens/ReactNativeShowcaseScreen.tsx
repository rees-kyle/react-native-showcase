import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import TopicButton from '../components/TopicButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

export default function ReactNativeShowcaseScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.buttonGroup}>
        <TopicButton
          text="1.  Setup and Environment"
          onPress={() => navigation.navigate('SetupAndEnvironment')}
        />
        <TopicButton
          text="2.  Core Components"
          onPress={() => navigation.navigate('CoreComponents')}
        />
        <TopicButton
          text="3.  Styling"
          onPress={() => navigation.navigate('Styling')}
        />
        <TopicButton
          text="4.  React Navigation Library"
          onPress={() => navigation.navigate('ReactNavigationLibrary')}
        />
        <TopicButton
          text="5.  Platform API and Native Features"
          onPress={() => navigation.navigate('PlatformAPIAndNativeFeatures')}
        />
        <TopicButton
          text="6.  Native Modules and Third Party Libraries"
          onPress={() => navigation.navigate('NativeModulesAndThirdPartyLibraries')}
        />
        <TopicButton
          text="7.  State and Context"
          onPress={() => navigation.navigate('StateAndContext')}
        />
        <TopicButton
          text="8.  Networking"
          onPress={() => navigation.navigate('Networking')}
        />
        <TopicButton
          text="9.  Animations"
          onPress={() => navigation.navigate('Animations')}
        />
        <TopicButton
          text="10.  Debugging and Testing"
          onPress={() => navigation.navigate('DebuggingAndTesting')}
        />
        <TopicButton
          text="11.  Building and Deployment"
          onPress={() => navigation.navigate('BuildingAndDeployment')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },
  contentContainer: {
    padding: 16
  },
  buttonGroup: {
    gap: 12
  },
});
