import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopicButton from '../../components/TopicButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export function ReactNavigationLibraryScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopicButton
        text="4.1  Stack Navigator"
        onPress={() => {
          navigation.navigate('StackNavigator');
        }}
      />
      <TopicButton
        text="4.2  Drawer Navigation"
        onPress={() => {
          navigation.navigate('DrawerNavigation');
        }}
      />
      <TopicButton
        text="4.3  Passing Params Between Screens"
        onPress={() => {
          navigation.navigate('PassingParamsBetweenScreens');
        }}
      />
      <TopicButton
        text="4.4  Tab Navigator"
        onPress={() => {
          navigation.navigate('TabNavigator');
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
