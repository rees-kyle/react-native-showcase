import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import {
  H1,
  H2,
  Table,
  Divider,
  BulletList
} from '../../../components';

export default function DifferencesScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Differences between Expo and React Native CLI</H1>

      <H2>Expo vs React Native CLI</H2>
      <Table
        headers={['Feature', 'Expo', 'React Native CLI']}
        rows={[
          ['Setup', 'Very easy (no native setup needed)', 'Complex (requires Android Studio / Xcode)'],
          ['Native Code Access', '❌ Not by default (requires "ejecting")', '✅ Full access to native iOS/Android code'],
          ['Library Compatibility', 'Limited to Expo-compatible libraries', 'Supports all React Native libraries'],
          ['App Size', 'Larger due to bundled SDK', 'Smaller and more customizable'],
          ['OTA Updates', '✅ Built-in with Expo', '❌ Must configure manually'],
          ['Performance', 'Slightly less optimized', 'Can be optimized more deeply'],
          ['Development Speed', 'Faster (hot reload, QR scan, no build time)', 'Slower (build steps for native code)'],
          ['Publishing', 'Easy via expo publish', 'Manual: build APK/IPA, sign, upload'],
          ['Debugging Tools', 'Expo Go app + Metro Bundler', 'Flipper, Metro Bundler, full native logs'],
          ['Use Case', 'Prototypes, MVPs, small to medium apps', 'Full-featured production apps'],
        ]}
        boldColumnIndex={0}
      />
      <Divider />

      <H2>Key Concepts</H2>
      <BulletList
        items={[
          <>
            <Text style={{ fontWeight: 'bold' }}>Expo Go</Text>
            <Text>: A mobile app you install to preview your app instantly (no build step).</Text>
          </>,
          <>
            <Text style={{ fontWeight: 'bold' }}>Ejecting</Text>
            <Text>: Switches your project from Expo to React Native CLI for full native access.</Text>
          </>
        ]}
      />
      <Divider />

      <H2>Summary</H2>
      <Table
        headers={['Use Expo if...', 'Use React Native CLI if...']}
        rows={[
          [
            'You want to get started fast',
            'You need full native code access'
          ],
          [
            'You don’t want to mess with Xcode/Android Studio',
            'You’re building a complex or large app'
          ],
          [
            'You’re making a prototype or MVP',
            'You’re launching a production-grade app'
          ],
          [
            'You’re okay with some limitations',
            'You need maximum control and flexibility'
          ]
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
  }
});
