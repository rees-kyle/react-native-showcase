import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {
  H1,
  H2,
  H3,
  BulletList,
  CodeBlock,
  Divider,
  Table
} from '../../../components';

export default function InstallationScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Installing React Native CLI or using Expo</H1>

      <H2>Expo</H2>
      <BulletList
        items={[
          'Great for rapid development and prototyping.',
          'Runs in a managed environment, no native code editing.',
          'Simplifies device access like camera, location, and more.',
        ]}
      />
      <H3>Install Expo CLI:</H3>
      <CodeBlock>
        {`npm install expo-cli`}
      </CodeBlock>
      <H3>Create and Run Project:</H3>
      <CodeBlock>
        {`npx create-expo-app MyApp
cd MyApp
npm start`}
      </CodeBlock>
      <BulletList
        items={[
          'Opens Metro Bundler in the browser.',
          'Use Expo Go app on your phone to scan QR and run the app.',
        ]}
      />
      <Divider />

      <H2>React Native CLI</H2>
      <BulletList
        items={[
          'Best for production apps needing native modules or custom native code.',
          'Requires Android Studio and/or Xcode installed.',
          'Simplifies device access like camera, location, and more.',
        ]}
      />
      <H3>Install React Native CLI:</H3>
      <CodeBlock>
        {`npm install react-native-cli`}
      </CodeBlock>
      <H3>Create and Run Project:</H3>
      <CodeBlock>
        {`npx react-native init MyApp
cd MyApp
npx react-native run-android`}
      </CodeBlock>
      <Divider />

      <H2>Expo vs React Native CLI</H2>
      <Table
        headers={['Feature', 'Expo', 'React Native CLI']}
        rows={[
          ['Setup', 'Easy', 'Complex'],
          ['Native code support', '❌ (Limited, unless ejected)', '✅'],
          ['Over-the-air updates', '✅ (with Expo)', '❌ (unless set up separately)'],
          ['Best for', 'Prototyping, MVPs', 'Full-scale production apps'],
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
