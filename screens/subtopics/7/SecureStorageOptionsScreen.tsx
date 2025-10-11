import React, { useEffect, useState } from 'react';
import { ScrollView, Button, StyleSheet } from 'react-native';
import * as Keychain from 'react-native-keychain';
import ExampleButton from '../../../components/ExampleButton';

import {
  H1,
  H2,
  H3,
  H4,
  P,
  Divider,
  BulletList,
  CodeBlock
} from '../../../components';

export default function SecureStorageOptionsScreen() {
  const [token, setToken] = useState('');

  const handleSecureStorageDemo = async () => {
    // Store credentials securely
    await Keychain.setGenericPassword('username', 'secretToken');

    // Retrieve them
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      setToken(credentials.password);
    }

    // Optionally clear afterwards
    // await Keychain.resetGenericPassword();
  };

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

      <H2>Expo ('expo-secure-store')</H2>
      <BulletList
        items={[
          "Uses 'Keychain' on iOS and 'Keystore' on Android.",
          "Easy to implement, provides built-in encryption, and are safe for securely storing sensitive data.",
        ]}
      />
      <H3>Install</H3>
      <CodeBlock>
        {`npx expo install expo-secure-store`}
      </CodeBlock>
      <H3>Example</H3>
      <CodeBlock>
        {`import * as SecureStore from 'expo-secure-store';

await SecureStore.setItemAsync('token', 'abc123');

const token = await SecureStore.getItemAsync('token');
console.log(token);

await SecureStore.deleteItemAsync('token');`}
      </CodeBlock>
      <Divider/>

      <H2>Non-Expo ('react-native-keychain')</H2>
      <BulletList
        items={[
          "Uses 'Keychain' on iOS and 'Keystore' on Android.",
          "Native module for encrypted credential storage.",
          "Supports biometric auth.",
        ]}
      />
      <H3>Install</H3>
      <CodeBlock>
        {`npm install react-native-keychain`}
      </CodeBlock>
      <H3>Link (if needed)</H3>
      <CodeBlock>
        {`npx pod-install`}
      </CodeBlock>
      <H3>Example</H3>
      <H4>Code:</H4>
      <CodeBlock>
        {`import React, { useEffect, useState } from 'react';
import { ScrollView, Button, StyleSheet } from 'react-native';
import * as Keychain from 'react-native-keychain';
import ExampleButton from '../../../components/ExampleButton';

export default function SecureStorageOptionsScreen() {
  const [token, setToken] = useState('');

  const handleSecureStorageDemo = async () => {
    // Store credentials securely
    await Keychain.setGenericPassword('username', 'secretToken');

    // Retrieve them
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      setToken(credentials.password);
    }

    // Optionally clear afterwards
    // await Keychain.resetGenericPassword();
  };

  return (
    <ScrollView>
      <P>Stored token: {token || 'No token yet'}</P>
      <ExampleButton text="Store Access Token" onPress={handleSecureStorageDemo} />
    </ScrollView>
  );
}`}
      </CodeBlock>
      <H4>Output:</H4>
      <P>Stored token: {token || 'No token yet'}</P>
      <ExampleButton text="Store Access Token" onPress={handleSecureStorageDemo} />
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
