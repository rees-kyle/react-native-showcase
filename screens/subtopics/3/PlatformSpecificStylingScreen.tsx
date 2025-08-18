import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  H3,
  P,
  Divider,
  CodeBlock,
  BulletList,
  Table
} from '../../../components';

export default function PlatformSpecificStylingScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Platform Specific Styling</H1>
      <P>
        React Native lets you write different styles for iOS and Android,
        so your app looks and feels native on each platform.
      </P>
      <P>
        There are 3 main ways to handle platform-specific styling.
      </P>
      <Divider/>

      <H2>1. Platform Module</H2>
      <P>React Native provides a 'Platform' module to check the platform dynamically.</P>
      <H3>Code:</H3>
      <CodeBlock>
        {`import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: Platform.OS === 'ios' ? 20 : 18,
    color: Platform.OS === 'android' ? 'green' : 'blue',
  },
});`}
      </CodeBlock>
      <Divider/>

      <H2>2. Platform.select()</H2>
      <P>Cleaner way to write different styles in one block.</P>
      <H3>Code:</H3>
      <CodeBlock>
        {`const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        paddingTop: 40,
      },
      android: {
        paddingTop: 20,
      },
    }),
  },
});`}
      </CodeBlock>
      <Divider/>

      <H2>3. Separate Files (.ios.js / .android.js)</H2>
      <P>Create platform-specific versions of a file:</P>
      <BulletList
        items={[
          "Button.ios.js",
          "Button.android.js",
        ]}
      />
      <P>
        React Native will automatically pick the correct file based on the platform.
        Great for clean separation of logic and styling.
      </P>
      <Divider/>

      <H2>Summary</H2>
      <Table
        headers={["Method", "Best For"]}
        rows={[
          ["'Platform.OS'", "Quick conditional tweaks"],
          ["'Platform.select()'", "Cleaner multi-platform handling"],
          ["Separate files", "Clean separation of logic + style"],
        ]}
        boldColumnIndex={0}
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
