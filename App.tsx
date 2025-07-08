import React from 'react';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReactNativeShowcaseScreen from './screens/ReactNativeShowcaseScreen';
import SetupAndEnvironmentScreen from './screens/topics/SetupAndEnvironmentScreen';
import InstallationScreen from './screens/subtopics/InstallationScreen';

export type RootStackParamList = {
  ReactNativeShowcase: undefined;
  SetupAndEnvironment: undefined;
  Installation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const handleStateChange = (state?: NavigationState) => {
    const currentRoutes = state?.routes ?? [];
    const currentIndex = state?.index ?? 0;

    // Log when navigating "back" (i.e. going to a previous screen in the stack)
    if (currentIndex < previousIndex) {
      console.log('Back button pressed.');
    }

    previousIndex = currentIndex;
  };

  // Track last screen index to compare navigation direction
  let previousIndex = 0;

  return (
    <NavigationContainer onStateChange={handleStateChange}>
      <Stack.Navigator
        initialRouteName="ReactNativeShowcase"
        screenOptions={{
          contentStyle: {
            backgroundColor: '#121212',
          },
          headerStyle: {
            backgroundColor: '#0A0A0A',
          },
          headerTintColor: '#FFFAFA',
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen
          name="ReactNativeShowcase"
          component={ReactNativeShowcaseScreen}
          options={{ title: 'React Native Showcase' }}
        />
        <Stack.Screen
          name="SetupAndEnvironment"
          component={SetupAndEnvironmentScreen}
          options={{ title: '1.  Setup and Environment' }}
        />
        <Stack.Screen
          name="Installation"
          component={InstallationScreen}
          options={{ title: '1.1  Installation' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
