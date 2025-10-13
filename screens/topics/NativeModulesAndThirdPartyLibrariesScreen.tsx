import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopicButton from '../../components/TopicButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export function NativeModulesAndThirdPartyLibrariesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopicButton
        text="6.1  Camera, GPS and Device Storage"
        onPress={() => {
          navigation.navigate('CameraGPSAndDeviceStorage');
        }}
      />
      <TopicButton
        text="6.2  Native Dependencies and Linking"
        onPress={() => {
          navigation.navigate('NativeDependenciesAndLinking');
        }}
      />
      <TopicButton
        text="6.3  Sensors, Media and Notifications"
        onPress={() => {
          navigation.navigate('SensorsMediaAndNotifications');
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
