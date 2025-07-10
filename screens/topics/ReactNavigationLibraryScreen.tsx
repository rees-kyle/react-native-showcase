import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopicButton from '../../components/TopicButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export default function SetupAndEnvironmentScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopicButton
        text="4.1  Stack Navigator"
        onPress={() => {
          navigation.navigate('StackNavigator');
          console.log('Stack Navigator button pressed.');
        }}
      />
      <TopicButton
        text="4.2  Drawer Navigation"
        onPress={() => {
          navigation.navigate('DrawerNavigation');
          console.log('Drawer Navigation button pressed.');
        }}
      />
      <TopicButton
        text="4.3  Passing Params Between Screens"
        onPress={() => {
          navigation.navigate('PassingParamsBetweenScreens');
          console.log('Passing Params Between Screens button pressed.');
        }}
      />
      <TopicButton
        text="4.4  Tab Navigator"
        onPress={() => {
          navigation.navigate('TabNavigator');
          console.log('Tab Navigator button pressed.');
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
