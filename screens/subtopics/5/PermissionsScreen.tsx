import React, { useState, useCallback } from 'react';
import { ScrollView, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { H1, H2, P, Divider, CodeBlock } from '../../../components';

export default function PermissionsScreen() {
  const [output, setOutput] = useState('');

  const requestCameraPermission = async () => {
    if (Platform.OS !== 'android') return;

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setOutput('Camera permission granted');
      } else {
        setOutput('Camera permission denied');
      }
    } catch (err) {
      setOutput(`Error: ${err}`);
    }
  };

  // Request permission every time the screen gains focus
  useFocusEffect(
    useCallback(() => {
      requestCameraPermission();
    }, [])
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <H1>Permissions and the 'PermissionsAndroid' API</H1>
      <P>
        In Android, features like accessing the camera, location, or storage
        require runtime permissions. React Native provides the 'PermissionsAndroid' API
        to handle these.
      </P>
      <Divider/>

      <H2>Example</H2>
      <P>Importing the API:</P>
      <CodeBlock>{`import { PermissionsAndroid, Platform } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';`}</CodeBlock>

      <P>Requesting permission every time the screen opens:</P>
      <CodeBlock>{`export default function PermissionsScreen() {
  const [output, setOutput] = useState('');

  const requestCameraPermission = async () => {
    if (Platform.OS !== 'android') return;

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setOutput('Camera permission granted');
      } else {
        setOutput('Camera permission denied');
      }
    } catch (err) {
      setOutput(\`Error: \${err}\`);
    }
  };

  // Request permission every time the screen gains focus
  useFocusEffect(
    useCallback(() => {
      requestCameraPermission();
    }, [])
  );`}</CodeBlock>

      <H2>Output</H2>
      <P>{output || 'Requesting permission...'}</P>

      <Divider/>

      <H2>iOS</H2>
      <P>
        For iOS, permissions are handled through native configuration
        'Info.plist' and third-party libraries like 'react-native-permissions'.
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
    paddingBottom: 32,
  },
});
