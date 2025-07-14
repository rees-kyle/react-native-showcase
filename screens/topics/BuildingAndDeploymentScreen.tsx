import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopicButton from '../../components/TopicButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export function BuildingAndDeploymentScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopicButton
        text="11.1  Building APK/IPA"
        onPress={() => {
          navigation.navigate('BuildingAPKIPA');
          console.log('Building APK/IPA button pressed.');
        }}
      />
      <TopicButton
        text="11.2  Code Signing"
        onPress={() => {
          navigation.navigate('CodeSigning');
          console.log('Code Signing button pressed.');
        }}
      />
      <TopicButton
        text="11.3  Publishing"
        onPress={() => {
          navigation.navigate('Publishing');
          console.log('Publishing button pressed.');
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
