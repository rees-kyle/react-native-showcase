import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  P,
  Divider,
  BulletList,
  CodeBlock
} from '../../../components';

export default function PublishingScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Publishing</H1>
      <P>
        Publishing is the final step
        that makes your app publicly available
        to users through official app stores:
        Google Play for Android and App Store for iOS.
      </P>
      <Divider/>

      <H2>Google Play Store</H2>
      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        1. Prepare your app
      </P>
      <BulletList
        items={[
          "Use './gradlew bundleRelease' to generate a '.aab' (Android App Bundle)",
          "Sign the app using a keystore",
          "Set up app versioning in 'android/app/build.gradle':",
        ]}
      />
      <CodeBlock>
        {`versionCode 1
versionName "1.0"`}
      </CodeBlock>

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        2. Create a Google Play developer account
      </P>
      <BulletList
        items={[
          'Go to play.google.com/console',
          'One-time fee: $25 USD',
        ]}
      />

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        3. Create a new app
      </P>
      <BulletList
        items={[
          'Add app details: name, description, icon, screenshots, etc.',
          'Choose a release track: internal, closed, open, or production',
        ]}
      />

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        4. Upload AAB
      </P>
      <BulletList
        items={[
          "Upload your '.aab' file under 'Releases > Production'",
          'Complete content ratings, privacy policy, data safety section',
        ]}
      />

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        5. Submit for review
      </P>
      <P>After passing checks and review, your app is published.</P>
      <Divider/>

      <H2>Apple App Store</H2>
      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        1. Prepare your app
      </P>
      <P>Use Xcode to Archive the app (release build)</P>
      <P>Requires:</P>
      <BulletList
        items={[
          "Apple Developer Account ($99/year)",
          "Signing certificate",
          "Provisioning profile",
        ]}
      />

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        2. Create app in App Store Connect
      </P>
      <BulletList
        items={[
          "Go to appstoreconnect.apple.com",
          "Register your app’s bundle ID, name, and metadata",
        ]}
      />

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        3. Upload via Xcode or Transporter
      </P>
      <P>
        From Xcode: Product > Archive > Distribute App,
        or use the Transporter app to upload '.ipa'.
      </P>

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        4. Complete App Info
      </P>
      <P>
        Fill out app description, screenshots, icons,
        privacy practices and age rating.
      </P>

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        5. Submit for Review
      </P>
      <P>
        Apple reviews your app (usually 1–3 days).
        Once approved, it becomes available on the App Store.
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
