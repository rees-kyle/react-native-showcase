import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  H3,
  P,
  Divider,
  CodeBlock
} from '../../../components';

export default function TabNavigatorScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Tab Navigator</H1>
      <P>
        Tab navigation lets users switch between screens
        using a row of tabs,
        usually at the bottom of the screen.
        It’s commonly used for main app sections
        like Home, Search, Profile, etc.
      </P>
      <Divider/>

      <H2>Install Dependencies</H2>
      <P>If using Expo:</P>
      <CodeBlock>
        {`npx expo install @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context react-native-vector-icons`}
      </CodeBlock>
      <P>For React Native CLI:</P>
      <CodeBlock>
        {`npm install @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context react-native-vector-icons
npx pod-install`}
      </CodeBlock>
      <P>
        You’ll also want to configure vector icons
        for proper tab icons
        (especially outside of Expo).
      </P>
      <Divider/>

      <H2>Basic Example</H2>
      <CodeBlock>
        {`// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}`}
      </CodeBlock>
      <CodeBlock>
        {`// screens/HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}`}
      </CodeBlock>
      <CodeBlock>
        {`// screens/ProfileScreen.js
import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
}`}
      </CodeBlock>
      <Divider/>

      <H3>Optional</H3>
      <P>Add icons to tabs using 'tabBarIcon':</P>
      <CodeBlock>
        {`App.js
<Tab.Screen
  name="Home"
  component={HomeScreen}
  options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="home" color={color} size={size} />
    ),
  }}
/>`}
      </CodeBlock>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  contentContainer: {
    paddingBottom: 32
  },
});
