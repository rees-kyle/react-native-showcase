import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  P,
  Divider,
  CodeBlock
} from '../../../components';

export default function UsingPlatformModuleScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Using 'Platform' Module</H1>
      <P>
        The Platform module lets you detect the current platform
        (iOS, Android, or Web)
        and write conditional code based on it.
      </P>
      <Divider/>

      <P>Import the module:</P>
      <CodeBlock>
        {`import { Platform } from 'react-native';`}
      </CodeBlock>
      <Divider/>

      <P>Check the platform:</P>
      <CodeBlock>
        {`if (Platform.OS === 'ios') {
  // iOS-specific code
} else if (Platform.OS === 'android') {
  // Android-specific code
}`}
      </CodeBlock>
      <Divider/>

      <P>Usage in a style object:</P>
      <CodeBlock>
        {`const styles = {
  paddingTop: Platform.OS === 'android' ? 25 : 0
};`}
      </CodeBlock>
      <Divider/>

      <P>Use 'Platform.select' for cleaner conditional logic:</P>
      <CodeBlock>
        {`const instructions = Platform.select({
  ios: 'Press Cmd+R to reload, Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload, Shake or press menu button for dev menu',
});`}
      </CodeBlock>
      <Divider/>

      <P>You can also check the platform version:</P>
      <CodeBlock>
        {`console.log(Platform.Version);`}
      </CodeBlock>
      <P>e.g., 30 on Android or 14.1 on iOS.</P>
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
