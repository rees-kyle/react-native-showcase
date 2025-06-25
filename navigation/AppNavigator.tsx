// navigation/AppNavigator.tsx

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import TopicScreen from '../screens/TopicScreen';

import { TopicSection } from '../data/docs';

export type RootStackParamList = {
  Home: undefined;
  Section: { section: TopicSection };
  Topic: {
    title: string;      // short title for header bar
    fullTitle: string;  // full title shown in TopicScreen
    content: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Section"
          component={SectionScreen}
          options={({ route }) => ({ title: route.params.section.title })}
        />
        <Stack.Screen
          name="Topic"
          component={TopicScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
