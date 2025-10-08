import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  P,
  Divider,
  CodeBlock,
  BulletList
} from '../../../components';

export default function NativeDependenciesAndLinkingScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Installing Native Dependencies and Linking</H1>
      <P>
        React Native libraries that use native code
        (Java/Kotlin for Android or Objective-C/Swift for iOS)
        must be linked to your project
        so they work correctly on both platforms.
      </P>
      <Divider/>

      <H2>Installing Native Dependencies</H2>
      <P>Use either 'npm' or 'yarn':</P>
      <CodeBlock>
        {`npm install <package-name>`}
      </CodeBlock>
      <CodeBlock>
        {`yarn add <package-name>`}
      </CodeBlock>
      <P>Example:</P>
      <CodeBlock>
        {`npm install react-native-device-info`}
      </CodeBlock>
      <Divider/>

      <H2>Auto-Linking (React Native 0.60+)</H2>
      <P>
        React Native now supports auto-linking,
        so you usually don’t need to manually link libraries:
      </P>
      <CodeBlock>
        {`npx pod-install`}
      </CodeBlock>
      <P>
        This installs native dependencies for iOS
        by updating the 'ios/Podfile'.
      </P>
      <Divider/>

      <H2>
        Manual Linking (for older versions or special cases)
      </H2>
      <P>
        If you're using an older React Native version
        (version 0.60 or earlier)
        or a library that requires manual steps, use:
      </P>
      <CodeBlock>
        {`npx react-native link <package-name>`}
      </CodeBlock>
      <P>For Example:</P>
      <CodeBlock>
        {`npx react-native link react-native-device-info`}
      </CodeBlock>
      <P>
        Some libraries also require edits in native files
        (like 'AndroidManifest.xml', 'MainApplication.java',
        or 'Info.plist').
      </P>
      <Divider/>

      <H2>Verifying Installation</H2>
      <P>After installing and linking:</P>
      <P>Rebuild the app:</P>
      <BulletList
        items={[
          "iOS: 'npx react-native run-ios'",
          "Android: 'npx react-native run-android'",
        ]}
      />
      <P>
        Check the library is working
        by importing and using it in a simple test screen.
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
});
