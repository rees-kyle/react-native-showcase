import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  H3,
  P,
  Divider,
  BulletList,
  CodeBlock
} from '../../../components';

export default function SecureStorageOptionsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Secure Storage Options</H1>
      <P>For sensitive data like tokens or passwords.</P>

      <H2>Why not use AsyncStorage for sensitive data?</H2>
      <P>
        AsyncStorage is not encrypted,
        so it’s not safe for storing sensitive information
        (e.g., auth tokens, passwords, banking data).
      </P>
      <Divider/>

      <H2>Expo</H2>
      <H3>'expo-secure-store'</H3>
      <BulletList
        items={[
          "Uses 'Keychain' on iOS and 'Keystore' on Android.",
          "Easy to implement, provides built-in encryption, and are safe for securely storing sensitive data.",
        ]}
      />
      <P>Install:</P>
      <CodeBlock>
        {`npx expo install expo-secure-store`}
      </CodeBlock>
      <P>Example:</P>
      <CodeBlock>
        {`import * as SecureStore from 'expo-secure-store';

await SecureStore.setItemAsync('token', 'abc123');

const token = await SecureStore.getItemAsync('token');
console.log(token);

await SecureStore.deleteItemAsync('token');`}
      </CodeBlock>
      <Divider/>

      <H2>Non-Expo</H2>
      <H3>'react-native-keychain'</H3>
      <BulletList
        items={[
          "Uses 'Keychain' on iOS and 'Keystore' on Android.",
          "Native module for encrypted credential storage.",
          "Supports biometric auth.",
        ]}
      />
      <P>Install:</P>
      <CodeBlock>
        {`npm install react-native-keychain`}
      </CodeBlock>
      <P>Link (if needed):</P>
      <CodeBlock>
        {`npx pod-install`}
      </CodeBlock>
      <P>Example:</P>
      <CodeBlock>
        {`import * as Keychain from 'react-native-keychain';

await Keychain.setGenericPassword('username', 'secretToken');

const credentials = await Keychain.getGenericPassword();
if (credentials) {
  console.log('Token:', credentials.password);
}

await Keychain.resetGenericPassword();`}
      </CodeBlock>
      <Divider/>

      <P>
        Both are production-safe options
        for handling sensitive data securely.
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
