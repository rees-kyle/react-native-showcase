import React, { useState, useEffect } from 'react';
import { ScrollView, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExampleButton from '../../../components/ExampleButton';

import {
  H1,
  H2,
  H3,
  P,
  BulletList,
  Divider,
  CodeBlock
} from '../../../components';

export default function AsyncStorageScreen() {
  const [username, setUsername] = useState<string | null>(null);

  const saveData = async () => {
    await AsyncStorage.setItem('username', 'kyle');
    setUsername('kyle');
  };

  const loadData = async () => {
    const storedName = await AsyncStorage.getItem('username');
    if (storedName) {
      setUsername(`${storedName} loaded`);
    } else {
      setUsername('no username stored');
    }
  };

  const removeData = async () => {
    await AsyncStorage.removeItem('username');
    setUsername('none');
  };

  useEffect(() => {
    loadData(); // Load on mount
  }, []);

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
      <H3>Code:</H3>
      <CodeBlock>
        {`import React, { useState, useEffect } from 'react';
import { ScrollView, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ExampleButton from '../../../components/ExampleButton';

export default function AsyncStorageScreen() {
  const [username, setUsername] = useState<string | null>(null);

  const saveData = async () => {
    await AsyncStorage.setItem('username', 'kyle');
    setUsername('kyle');
  };

  const loadData = async () => {
    const storedName = await AsyncStorage.getItem('username');
    if (storedName) {
      setUsername(\`$\{storedName} loaded\`);
    } else {
      setUsername('no username stored');
    }
  };

  const removeData = async () => {
    await AsyncStorage.removeItem('username');
    setUsername('none');
  };

  useEffect(() => {
    loadData(); // Load on mount
  }, []);

  return (
    <ScrollView>
      <P>Stored Username: {username || 'None'}</P>
      <ExampleButton text="Save Username" onPress={saveData} />
      <ExampleButton text="Load Username" onPress={loadData} />
      <ExampleButton text="Remove Username" onPress={removeData} />
    <ScrollView/>
  );
}`}
      </CodeBlock>
      <H3>Output:</H3>
      <P>Stored Username: {username || 'None'}</P>
      <ExampleButton text="Save Username" onPress={saveData} />
      <ExampleButton text="Load Username" onPress={loadData} />
      <ExampleButton text="Remove Username" onPress={removeData} />
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
  text: { fontSize: 18, marginBottom: 10 },
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  contentContainer: {
    paddingBottom: 32
  },
});
