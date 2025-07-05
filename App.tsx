import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopicsScreen from './screens/TopicsScreen';

export type RootStackParamList = {
  Topics: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Topics">
        <Stack.Screen name="Topics" component={TopicsScreen} options={{ title: 'React Native Showcase' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
