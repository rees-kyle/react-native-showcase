import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  P,
  Divider,
  CodeBlock
} from '../../../components';

export default function DrawerNavigationScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Drawer Navigator</H1>
      <P>
        A Drawer Navigator adds a side panel
        (usually from the left)
        that can slide in and out,
        typically containing navigation links.
        It's great for apps with multiple sections
        but limited screen space.
      </P>
      <Divider/>

      <H2>Install Dependencies</H2>
      <P>If using Expo:</P>
      <CodeBlock>
        {`npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context`}
      </CodeBlock>
      <P>For React Native CLI:</P>
      <CodeBlock>
        {`npm install @react-navigation/drawer react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
npx pod-install`}
      </CodeBlock>
      <P>
        Also, make sure these lines are added in your entry file
        (usually 'index.js') for gesture handling:
      </P>
      <CodeBlock>
        {`import 'react-native-gesture-handler';`}
      </CodeBlock>
      <Divider/>

      <H2>Basic Example</H2>
      <CodeBlock>
        {`// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
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
