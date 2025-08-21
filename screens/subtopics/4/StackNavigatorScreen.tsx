import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  H3,
  H4,
  P,
  Divider,
  CodeBlock,
  BulletList
} from '../../../components';

export default function StackNavigatorScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Stack Navigator</H1>

      <H2>React Navigation</H2>
      <P>
        React Navigation is the most popular routing and navigation library for React Native apps.
        It helps you switch between screens, pass data, and manage app history.
      </P>
      <Divider/>

      <H3>Installing React Navigation</H3>
      <H4>Code:</H4>
      <P>If you're using Expo:</P>
      <CodeBlock>
        {`npx expo install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npx expo install @react-navigation/native-stack`}
      </CodeBlock>
      <P>If you're using React Native CLI:</P>
      <CodeBlock>
        {`npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npx pod-install`}
      </CodeBlock>
      <Divider/>

      <H2>Stack Navigator</H2>
      <P>
        A stack navigator lets you move forward and backward through a stack of screens
        — like web browser history. Here is a basic example.
      </P>
      <H3>Code:</H3>
      <CodeBlock>
        {`// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`}
      </CodeBlock>
      <CodeBlock>
        {`// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}`}
      </CodeBlock>
      <CodeBlock>
        {`// screens/DetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen() {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}`}
      </CodeBlock>
      <Divider/>

      <H2>Key Stack Navigator Features</H2>
      <BulletList
        items={[
          <Text><Text style={{ fontWeight: 'bold' }}>navigation.navigate('ScreenName') -</Text> move to a screen</Text>,
          <Text><Text style={{ fontWeight: 'bold' }}>navigation.goBack() -</Text> go back one screen</Text>,
          <Text>Pass parameters via <Text style={{ fontWeight: 'bold' }}>{"navigation.navigate('Screen', { param: 'value' })"}</Text></Text>,
          <Text>Access them in the target screen via <Text style={{ fontWeight: 'bold' }}>{"route.params"}</Text></Text>,
        ]}
      />
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