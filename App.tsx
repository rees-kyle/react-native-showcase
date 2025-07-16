import React from 'react';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReactNativeShowcaseScreen from './screens/ReactNativeShowcaseScreen';
import {
  SetupAndEnvironmentScreen,
  CoreComponentsScreen,
  StylingScreen,
  ReactNavigationLibraryScreen,
  PlatformAPIAndNativeFeaturesScreen,
  NativeModulesAndThirdPartyLibrariesScreen,
  StateAndContextScreen,
  NetworkingScreen,
  AnimationsScreen,
  DebuggingAndTestingScreen,
  BuildingAndDeploymentScreen
} from './screens/topics';
import {
  InstallationScreen,
  DifferencesScreen,
  RunningAppsScreen
} from './screens/subtopics/1';
import {
  ViewTextAndTextInputScreen,
  ScrollViewFlatListAndSectionListScreen,
  ButtonPressableTouchableOpacityScreen,
  ImageScreen
} from './screens/subtopics/2';
import {
  FlexboxScreen,
  StylesheetCreateVsInlineStylesScreen,
  NoCSSFilesScreen,
  PlatformSpecificStylingScreen
} from './screens/subtopics/3';
import {
  StackNavigatorScreen,
  DrawerNavigationScreen,
  PassingParamsBetweenScreensScreen,
  TabNavigatorScreen
} from './screens/subtopics/4';
import {
  PermissionsScreen,
  LinkingToOtherAppsOrURLsScreen,
  UsingPlatformModuleScreen
} from './screens/subtopics/5';
import {
  CameraGPSAndDeviceStorageScreen,
  NativeDependenciesAndLinkingScreen,
  SensorsMediaAndNotificationsScreen
} from './screens/subtopics/6';
import {
  ReuseReactKnowledgeScreen,
  AsyncStorageScreen,
  SecureStorageOptionsScreen
} from './screens/subtopics/7';
import {
  HTTPRequestsScreen,
  HandlingOfflineModeScreen
} from './screens/subtopics/8';
import {
  LayoutAnimationScreen,
  AnimatedAPIScreen,
  ReanimatedScreen
} from './screens/subtopics/9';
import {
  DebuggingScreen,
  LoggingScreen,
  TestingScreen
} from './screens/subtopics/10';
import {
  BuildingAPKIPAScreen,
  CodeSigningScreen,
  PublishingScreen
} from './screens/subtopics/11';

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
  NativeModulesAndThirdPartyLibrariesScreen: undefined;
  CameraGPSAndDeviceStorageScreen: undefined;
  NativeDependenciesAndLinkingScreen: undefined;
  SensorsMediaAndNotificationsScreen: undefined;
  StateAndContextScreen: undefined;
  ReuseReactKnowledgeScreen: undefined;
  AsyncStorageScreen: undefined;
  SecureStorageOptionsScreen: undefined;
  NetworkingScreen: undefined;
  HTTPRequestsScreen: undefined;
  HandlingOfflineModeScreen: undefined;
  AnimationsScreen: undefined;
  LayoutAnimationScreen: undefined;
  AnimatedAPIScreen: undefined;
  ReanimatedScreen: undefined;
  DebuggingAndTestingScreen: undefined;
  DebuggingScreen: undefined;
  LoggingScreen: undefined;
  TestingScreen: undefined;
  BuildingAndDeploymentScreen: undefined;
  BuildingAPKIPAScreen: undefined;
  CodeSigningScreen: undefined;
  PublishingScreen: undefined;
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
          headerTintColor: '#DDDDDD',
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
        <Stack.Screen
          name="NativeModulesAndThirdPartyLibraries"
          component={NativeModulesAndThirdPartyLibrariesScreen}
          options={{ title: '6.  Native Modules and Third Party Libraries' }}
        />
        <Stack.Screen
          name="CameraGPSAndDeviceStorage"
          component={CameraGPSAndDeviceStorageScreen}
          options={{ title: '6.1  Camera, GPS and Device Storage' }}
        />
        <Stack.Screen
          name="NativeDependenciesAndLinking"
          component={NativeDependenciesAndLinkingScreen}
          options={{ title: '6.2  Native Dependencies and Linking' }}
        />
        <Stack.Screen
          name="SensorsMediaAndNotifications"
          component={SensorsMediaAndNotificationsScreen}
          options={{ title: '6.3  Sensors, Media and Notifications' }}
        />
        <Stack.Screen
          name="StateAndContext"
          component={StateAndContextScreen}
          options={{ title: '7.  State and Context' }}
        />
        <Stack.Screen
          name="ReuseReactKnowledge"
          component={ReuseReactKnowledgeScreen}
          options={{ title: '7.1  Reuse React Knowledge' }}
        />
        <Stack.Screen
          name="AsyncStorage"
          component={AsyncStorageScreen}
          options={{ title: '7.2  AsyncStorage' }}
        />
        <Stack.Screen
          name="SecureStorageOptions"
          component={SecureStorageOptionsScreen}
          options={{ title: '7.3  Secure Storage Options' }}
        />
        <Stack.Screen
          name="Networking"
          component={NetworkingScreen}
          options={{ title: '8.  Networking' }}
        />
        <Stack.Screen
          name="HTTPRequests"
          component={HTTPRequestsScreen}
          options={{ title: '8.1  HTTP Requests' }}
        />
        <Stack.Screen
          name="HandlingOfflineMode"
          component={HandlingOfflineModeScreen}
          options={{ title: '8.2  Handling Offline Mode' }}
        />
        <Stack.Screen
          name="Animations"
          component={AnimationsScreen}
          options={{ title: '9.  Animations' }}
        />
        <Stack.Screen
          name="LayoutAnimation"
          component={LayoutAnimationScreen}
          options={{ title: '9.1  LayoutAnimation' }}
        />
        <Stack.Screen
          name="AnimatedAPI"
          component={AnimatedAPIScreen}
          options={{ title: '9.2  Animated API' }}
        />
        <Stack.Screen
          name="Reanimated"
          component={ReanimatedScreen}
          options={{ title: '9.3  Reanimated' }}
        />
        <Stack.Screen
          name="DebuggingAndTesting"
          component={DebuggingAndTestingScreen}
          options={{ title: '10.  Debugging and Testing' }}
        />
        <Stack.Screen
          name="Debugging"
          component={DebuggingScreen}
          options={{ title: '10.1  Debugging' }}
        />
        <Stack.Screen
          name="Logging"
          component={LoggingScreen}
          options={{ title: '10.2  Logging' }}
        />
        <Stack.Screen
          name="Testing"
          component={TestingScreen}
          options={{ title: '10.3  Testing' }}
        />
        <Stack.Screen
          name="BuildingAndDeployment"
          component={BuildingAndDeploymentScreen}
          options={{ title: '11.  Building and Deployment' }}
        />
        <Stack.Screen
          name="BuildingAPKIPA"
          component={BuildingAPKIPAScreen}
          options={{ title: '11.1  Building APK/IPA' }}
        />
        <Stack.Screen
          name="CodeSigning"
          component={CodeSigningScreen}
          options={{ title: '11.2  Code Signing' }}
        />
        <Stack.Screen
          name="Publishing"
          component={PublishingScreen}
          options={{ title: '11.3  Publishing' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
