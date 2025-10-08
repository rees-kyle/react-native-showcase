import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  P,
  BulletList,
  Divider,
  CodeBlock
} from '../../../components';

export default function AsyncStorageScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>AsyncStorage</H1>
      <P>
        A simple,unencrypted, asynchronous,
        persistent key-value storage system
        — similar to 'localStorage' in web apps,
        but made for React Native.
      </P>
      <P>Useful for:</P>
      <BulletList
        items={[
          "Caching data locally.",
          "Saving user settings.",
          "Storing small amounts of app state.",
        ]}
      />
      <Divider/>

      <H2>Installation</H2>
      <P>If you're not using Expo:</P>
      <CodeBlock>
        {`npm install @react-native-async-storage/async-storage`}
      </CodeBlock>
      <P>For iOS:</P>
      <CodeBlock>
        {`npx pod-install`}
      </CodeBlock>
      <P>If you are using Expo:</P>
      <CodeBlock>
        {`npx expo install @react-native-async-storage/async-storage`}
      </CodeBlock>
      <Divider/>

      <H2>Basic Usage</H2>
      <CodeBlock>
        {`import AsyncStorage from '@react-native-async-storage/async-storage';

// Saving data
await AsyncStorage.setItem('username', 'kyle');

// Retrieving data
const username = await AsyncStorage.getItem('username');
console.log(username);

// Removing data
await AsyncStorage.removeItem('username');`}
      </CodeBlock>
      <Divider/>

      <H2>Example</H2>
      <P>Loads data when component mounts.</P>
      <CodeBlock>
        {`import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Example() {
  const [name, setName] = useState('');

  useEffect(() => {
    const loadName = async () => {
      const storedName = await AsyncStorage.getItem('username');
      if (storedName) {
        setName(storedName);
      }
    };
    loadName();
  }, []);

  return (
    <View>
      <Text>Stored Name: {name}</Text>
    </View>
  );
}`}
      </CodeBlock>
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
