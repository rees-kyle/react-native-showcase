import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  H3,
  P,
  Divider,
  BulletList,
  CodeBlock,
  Table
} from '../../../components';

export default function BuildingAPKIPAScreen() {
  return (
    <ScrollView style={styles.container}>
      <H1>Building APK/IPA (Android/iOS binaries)</H1>
      <P>
        Creating an APK (Android) or IPA (iOS)
        is how you turn your React Native app into
        an installable file that users can download
        or you can test on real devices.
      </P>
      <P>APK: Android Package</P>
      <P>IPA: iOS App Store Package</P>
      <Divider/>

      <H2>Why Build APK or IPA?</H2>
      <BulletList
        items={[
          "APK and AAB (Android App Bundle) are needed to install your app on Android or publish it to the Google Play Store.",
          "IPA is needed to install or publish your app on Apple devices via the App Store or TestFlight.",
          "These are the production-ready binary files of your app.",
        ]}
      />
      <Divider/>

      <H2>Android: Build APK or AAB</H2>
      <H3>1. Generate a Keystore (for release)</H3>
      <CodeBlock>
        {`keytool -genkey -v -keystore my-key.keystore \
  -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`}
      </CodeBlock>
      <P>Place the '.keystore' file in 'android/app/'.</P>
      <H3>2. Add to Gradle</H3>
      <P>In 'android/gradle.properties':</P>
      <CodeBlock>
        {`MYAPP_RELEASE_STORE_FILE=my-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****`}
      </CodeBlock>
      <H3>3. Build the APK</H3>
      <CodeBlock>
        {`cd android
./gradlew assembleRelease`}
      </CodeBlock>
      <P>
        Output file: 'android/app/build/outputs/apk/release/app-release.apk'
      </P>
      <H3>Build an AAB (for Play Store)</H3>
      <CodeBlock>
        {`./gradlew bundleRelease`}
      </CodeBlock>
      <P>
        Output file: android/app/build/outputs/bundle/release/app-release.aab
      </P>
      <Divider/>

      <H2>iOS: Build IPA (Mac + Xcode Required)</H2>
      <H3>1. Install CocoaPods (if not already installed)</H3>
      <CodeBlock>
        {`cd ios
pod install`}
      </CodeBlock>
      <H3>2. Open Project in Xcode</H3>
      <CodeBlock>
        {'open ios/YourProject.xcworkspace'}
      </CodeBlock>
      <H3>3. Archive and Export IPA</H3>
      <BulletList
        items={[
          "In Xcode: Product > Archive",
          "Use the Organizer to export IPA or upload to TestFlight / App Store",
        ]}
      />
      <P>You'll need:</P>
      <BulletList
        items={[
          "An Apple Developer Account",
          "A Provisioning Profile and Signing Certificate",
        ]}
      />
      <Divider/>

      <H2>Summary</H2>
      <Table
        headers={["Platform", "File Type", "Tool", "Needed For"]}
        rows={[
          ["Android", ".apk", "Gradle CLI", "Local install/testing"],
          ["Android", ".aab", "Gradle CLI", "Play Store upload"],
          ["iOS", ".ipa", "Xcode", "TestFlight / App Store upload"],
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
