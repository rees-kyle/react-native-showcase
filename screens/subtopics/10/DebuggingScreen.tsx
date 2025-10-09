import React from 'react';
import { ScrollView, Linking, StyleSheet, Text } from 'react-native';

import {
  H1,
  H2,
  H3,
  P,
  Divider,
  BulletList,
  CodeBlock
} from '../../../components';

export default function DebuggingScreen() {

  const handleOpenLink = (url) => {
    Linking.openURL(url).catch(err => {
      console.error("Couldn't load page", err);
    });
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Debugging</H1>
      <P>
        Debugging is fixing problems in your app.
        Tools like Flipper and React Native Debugger
        help you see how your app works
        and make it easier to find and solve issues.
      </P>
      <Divider/>

      <H2>Flipper</H2>
      <P>
        Flipper is a powerful, extensible debugging tool
        for React Native apps.
      </P>
      <H3>Key Features:</H3>
      <BulletList
        items={[
          "Inspect React Native logs and performance",
          "Visualize the component tree",
          "Monitor Redux (with plugin)",
          "View and edit layout hierarchy (similar to Chrome DevTools for native views)",
          "Inspect network requests and responses",
          "SQLite and AsyncStorage inspectors",
        ]}
      />
      <H3>Setup:</H3>
      <P>
        1. Install Flipper from{' '}
        <Text
          style={styles.link}
          onPress={() => handleOpenLink('https://fbflipper.com')}
        >
          https://fbflipper.com
        </Text>
      </P>
      <P>
        2. For bare React Native,
        most setups work out of the box (RN 0.62+)
      </P>
      <P>
        3. Plugins like React DevTools, Redux DevTools,
        and Network are pre-installed
      </P>
      <P>
        If you're using Expo,
        Flipper is not officially supported
        — you’ll need a bare workflow to use it.
      </P>
      <Divider/>

      <H2>React Native Debugger</H2>
      <P>
        A standalone app combining Chrome DevTools,
        Redux DevTools, and React DevTools.
      </P>
      <H3>Key Features:</H3>
      <BulletList
        items={[
          "View console logs",
          "Inspect network traffic",
          "Inspect and time-travel through Redux state",
          "Debug JavaScript and inspect components",
        ]}
      />
      <H3>Setup:</H3>
      <P>
        1. Download from{' '}
        <Text
          style={styles.link}
          onPress={() => handleOpenLink('https://github.com/jhen0409/react-native-debugger')}
        >
          https://github.com/jhen0409/react-native-debugger
        </Text>
      </P>
      <P>
        2. Open it and set port to 8081
      </P>
      <P>
        3. In your React Native app, run:
      </P>
      <CodeBlock>
        {`react-native start`}
      </CodeBlock>
      <P>
        4. Press 'Cmd+D' or 'Ctrl+M' in the emulator,
        then select 'Debug JS Remotely'
      </P>
      <H3>Redux</H3>
      <P>
        If you use Redux, it auto-detects
        and shows the state tree and actions
        in the Debugger window
      </P>
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
  link: {
    color: '#4da6ff',
    textDecorationLine: 'underline',
  },
});
