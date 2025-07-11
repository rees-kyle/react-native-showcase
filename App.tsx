import React from 'react';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReactNativeShowcaseScreen from './screens/ReactNativeShowcaseScreen';
import SetupAndEnvironmentScreen from './screens/topics/SetupAndEnvironmentScreen';
import {
  InstallationScreen,
  DifferencesScreen,
  RunningAppsScreen
} from './screens/subtopics/1';
import CoreComponentsScreen from './screens/topics/CoreComponentsScreen';
import {
  ViewTextAndTextInputScreen,
  ScrollViewFlatListAndSectionListScreen,
  ButtonPressableTouchableOpacityScreen,
  ImageScreen
} from './screens/subtopics/2';
import StylingScreen from './screens/topics/StylingScreen';
import {
  FlexboxScreen,
  StylesheetCreateVsInlineStylesScreen,
  NoCSSFilesScreen,
  PlatformSpecificStylingScreen
} from './screens/subtopics/3';
import ReactNavigationLibraryScreen from './screens/topics/ReactNavigationLibraryScreen';
import {
  StackNavigatorScreen,
  DrawerNavigationScreen,
  PassingParamsBetweenScreensScreen,
  TabNavigatorScreen
} from './screens/subtopics/4';
import PlatformAPIAndNativeFeaturesScreen from './screens/topics/PlatformAPIAndNativeFeaturesScreen';
import {
  PermissionsScreen,
  LinkingToOtherAppsOrURLsScreen,
  UsingPlatformModuleScreen
} from './screens/subtopics/5';

export type RootStackParamList = {
  ReactNativeShowcase: undefined;
  SetupAndEnvironment: undefined;
  Installation: undefined;
  Differences: undefined;
  RunningApps: undefined;
  CoreComponents: undefined;
  ViewTextAndTextInput: undefined;
  ScrollViewFlatListAndSectionList: undefined;
  ButtonPressableTouchableOpacity: undefined;
  Image: undefined;
  StylingScreen: undefined;
  FlexboxScreen: undefined;
  StylesheetCreateVsInlineStylesScreen: undefined;
  NoCSSFilesScreen: undefined;
  PlatformSpecificStylingScreen: undefined;
  ReactNavigationLibraryScreen: undefined;
  StackNavigatorScreen: undefined;
  DrawerNavigationScreen: undefined;
  PassingParamsBetweenScreensScreen: undefined;
  TabNavigatorScreen: undefined;
  PlatformAPIAndNativeFeaturesScreen: undefined;
  PermissionsScreen: undefined;
  LinkingToOtherAppsOrURLsScreen: undefined;
  UsingPlatformModuleScreen: undefined;
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
        <Stack.Screen
          name="Differences"
          component={DifferencesScreen}
          options={{ title: '1.2  Differences' }}
        />
        <Stack.Screen
          name="RunningApps"
          component={RunningAppsScreen}
          options={{ title: '1.3  Running Apps' }}
        />
        <Stack.Screen
          name="CoreComponents"
          component={CoreComponentsScreen}
          options={{ title: '2.  Core Components' }}
        />
        <Stack.Screen
          name="ViewTextAndTextInput"
          component={ViewTextAndTextInputScreen}
          options={{ title: '2.1  View, Text and TextInput' }}
        />
        <Stack.Screen
          name="ScrollViewFlatListAndSectionList"
          component={ScrollViewFlatListAndSectionListScreen}
          options={{ title: '2.2  ScrollView, FlatList and SectionList' }}
        />
        <Stack.Screen
          name="ButtonPressableTouchableOpacity"
          component={ButtonPressableTouchableOpacityScreen}
          options={{ title: '2.3  Button, Pressable and TouchableOpacity' }}
        />
        <Stack.Screen
          name="Image"
          component={ImageScreen}
          options={{ title: '2.4  Image' }}
        />
        <Stack.Screen
          name="Styling"
          component={StylingScreen}
          options={{ title: '3.  Styling' }}
        />
        <Stack.Screen
          name="Flexbox"
          component={FlexboxScreen}
          options={{ title: '3.1  Flexbox' }}
        />
        <Stack.Screen
          name="StylesheetCreateVsInlineStyles"
          component={StylesheetCreateVsInlineStylesScreen}
          options={{ title: '3.2  Stylesheet Create Vs Inline Styles' }}
        />
        <Stack.Screen
          name="NoCSSFiles"
          component={NoCSSFilesScreen}
          options={{ title: '3.3  No CSS Files' }}
        />
        <Stack.Screen
          name="PlatformSpecificStyling"
          component={PlatformSpecificStylingScreen}
          options={{ title: '3.4  Platform Specific Styling' }}
        />
        <Stack.Screen
          name="ReactNavigationLibrary"
          component={ReactNavigationLibraryScreen}
          options={{ title: '4.  React Navigation Library' }}
        />
        <Stack.Screen
          name="StackNavigator"
          component={StackNavigatorScreen}
          options={{ title: '4.1  Stack Navigator' }}
        />
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigationScreen}
          options={{ title: '4.2  Drawer Navigation' }}
        />
        <Stack.Screen
          name="PassingParamsBetweenScreens"
          component={PassingParamsBetweenScreensScreen}
          options={{ title: '4.3  Passing Params Between Screens' }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigatorScreen}
          options={{ title: '4.4  Tab Navigator' }}
        />
        <Stack.Screen
          name="PlatformAPIAndNativeFeatures"
          component={PlatformAPIAndNativeFeaturesScreen}
          options={{ title: '5.  Platform API and Native Features' }}
        />
        <Stack.Screen
          name="Permissions"
          component={PermissionsScreen}
          options={{ title: '5.1  Permissions' }}
        />
        <Stack.Screen
          name="LinkingToOtherAppsOrURLs"
          component={LinkingToOtherAppsOrURLsScreen}
          options={{ title: '5.2  Linking to Other Apps or URLs' }}
        />
        <Stack.Screen
          name="UsingPlatformModule"
          component={UsingPlatformModuleScreen}
          options={{ title: '5.3  Using Platform Module' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
