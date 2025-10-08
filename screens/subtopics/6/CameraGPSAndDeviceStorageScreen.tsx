import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  P,
  Divider,
  CodeBlock
} from '../../../components';

export default function CameraGPSAndDeviceStorageScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Using camera, GPS, device storage, etc.</H1>
      <P>
        React Native provides access
        to native device features
        through community-maintained libraries.
        These libraries bridge JavaScript
        with native Android and iOS APIs.
      </P>
      <Divider/>

      <H2>Camera</H2>
      <P>
        A popular choice today is 'react-native-vision-camera'.
      </P>

      <P>Install:</P>
      <CodeBlock>
        {`npm install react-native-vision-camera`}
      </CodeBlock>

      <P>Example:</P>
      <CodeBlock>
        {`import { Camera } from 'react-native-vision-camera';

const getPermission = async () => {
  const permission = await Camera.requestCameraPermission();
  if (permission === 'authorized') {
    // You can render the <Camera /> component
  }
};`}
      </CodeBlock>
      <Divider/>

      <H2>GPS</H2>
      <P>Install:</P>
      <CodeBlock>
        {`npm install @react-native-community/geolocation`}
      </CodeBlock>

      <P>Example:</P>
      <CodeBlock>
        {`import Geolocation from '@react-native-community/geolocation';

Geolocation.getCurrentPosition(
  position => {
    console.log(position);
  },
  error => {
    console.warn(error.message);
  },
  { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
);`}
      </CodeBlock>
      <P>
        Don't forget to request location permission
        for iOS and Android.
      </P>
      <Divider/>

      <H2>Device Storage</H2>
      <P>Install:</P>
      <CodeBlock>
        {`npm install @react-native-async-storage/async-storage`}
      </CodeBlock>

      <P>Example:</P>
      <CodeBlock>
        {`import AsyncStorage from '@react-native-async-storage/async-storage';

await AsyncStorage.setItem('key', 'value');
const value = await AsyncStorage.getItem('key');
console.log(value);`}
      </CodeBlock>
      <Divider/>

      <P>
        These libraries often need extra setup
        in 'AndroidManifest.xml' and 'Info.plist',
        depending on the platform.
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
