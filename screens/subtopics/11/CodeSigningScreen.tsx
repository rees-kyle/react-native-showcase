import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  P,
  Divider,
  BulletList
} from '../../../components';

export default function CodeSigningScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Code Signing</H1>
      <P>
        Code signing is the process of digitally signing
        your app's code or binary
        to prove it comes from a trusted source (you)
        and hasn't been tampered with.
        It's mandatory for releasing apps
        on both Android and iOS platforms.
      </P>
      <Divider/>

      <H2>Importance of Code Signing</H2>
      <BulletList
        items={[
          "Verifies the authenticity of the app",
          "Ensures integrity (code hasn’t been modified after signing)",
          "Required by Google Play Store and Apple App Store",
          "Enables secure communication and user trust",
        ]}
      />
      <Divider/>

      <H2>Android Code Signing</H2>
      <P>Uses a keystore file with a key alias and password:</P>
      <P>1. Generate a keystore using 'keytool'</P>
      <P>2. Store it in 'android/app/'</P>
      <P>3. Define keystore config in 'gradle.properties'</P>
      <P>4. Android Gradle plugin handles signing during assembleRelease' or 'bundleRelease'</P>
      <P>
        Signed APKs/AABs are required to publish on the Play Store.
      </P>
      <Divider/>

      <H2>iOS Code Signing</H2>
      <P>Uses a signing certificate and provisioning profile linked to your Apple Developer account:</P>
      <P>1. Xcode manages signing via Apple certificates</P>
      <P>2. Select your team and provisioning profile</P>
      <P>3. Configure automatic or manual signing</P>
      <P>4. Required to build an '.ipa' for App Store/TestFlight or physical device</P>
      <P>
        Without signing, you can't install the app on a real device or publish it.
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
