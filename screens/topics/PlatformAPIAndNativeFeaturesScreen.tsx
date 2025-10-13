import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopicButton from '../../components/TopicButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export function PlatformAPIAndNativeFeaturesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopicButton
        text="5.1  Permissions"
        onPress={() => {
          navigation.navigate('Permissions');
        }}
      />
      <TopicButton
        text="5.2  Linking to Other Apps or URLs"
        onPress={() => {
          navigation.navigate('LinkingToOtherAppsOrURLs');
        }}
      />
      <TopicButton
        text="5.3  Using Platform Module"
        onPress={() => {
          navigation.navigate('UsingPlatformModule');
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
