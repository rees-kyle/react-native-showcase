import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  P,
  Divider,
  CodeBlock
} from '../../../components';

export default function PermissionsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Permissions and the 'PermissionsAndroid' API</H1>
      <P>
        In Android, certain features like
        accessing the camera, location, or storage
        require runtime permissions.
        React Native provides the 'PermissionsAndroid' API
        to handle these.
      </P>
      <Divider/>

      <H2>Example</H2>
      <P>Importing the API:</P>
      <CodeBlock>
        {`import { PermissionsAndroid, Platform } from 'react-native';`}
      </CodeBlock>
      <P>Requesting permission:</P>
      <CodeBlock>
        {`async function requestCameraPermission() {
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
      console.log('Camera permission granted');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}`}
      </CodeBlock>
      <P>
        You typically call this on component mount
        (e.g. inside a useEffect)
        or just before using a permission-restricted feature
        (like camera access).
      </P>
      <Divider/>

      <H2>iOS</H2>
      <P>
        For iOS,
        permissions are handled through native configuration
        'Info.plist' and third-party libraries
        like 'react-native-permissions'.
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
