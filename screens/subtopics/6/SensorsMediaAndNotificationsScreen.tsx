import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  H3,
  P,
  Divider,
  CodeBlock
} from '../../../components';

export default function SensorsMediaAndNotificationsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>
        Expo APIs for sensors, media, notifications (if using Expo)
      </H1>
      <P>
        Expo provides built-in APIs
        that make it easier to access native features
        without needing to write native code
        or install extra dependencies manually.
      </P>
      <Divider/>

      <H2>Sensors</H2>
      <P>
        'expo-sensors' includes
        accelerometer, gyroscope, magnetometer, and barometer.
      </P>
      <H3>Install:</H3>
      <CodeBlock>
        {`npx expo install expo-sensors`}
      </CodeBlock>
      <H3>Example:</H3>
      <CodeBlock>
        {`import { Accelerometer } from 'expo-sensors';

Accelerometer.addListener(accelerometerData => {
  console.log(accelerometerData);
});

Accelerometer.setUpdateInterval(1000);`}
      </CodeBlock>
      <Divider/>

      <H2>Media</H2>
      <P>
        Use 'expo-image-picker'
        to access the camera roll or take photos.
      </P>
      <H3>Install:</H3>
      <CodeBlock>
        {`npx expo install expo-image-picker`}
      </CodeBlock>
      <H3>Example:</H3>
      <CodeBlock>
        {`import * as ImagePicker from 'expo-image-picker';

const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    console.log(result.assets[0].uri);
  }
};`}
      </CodeBlock>
      <Divider/>

      <H2>Notifications</H2>
      <P>
        Use 'expo-notifications'
        for local and push notifications.
      </P>
      <H3>Install:</H3>
      <CodeBlock>
        {`npx expo install expo-notifications`}
      </CodeBlock>
      <H3>Example (Local Notification):</H3>
      <CodeBlock>
        {`import * as Notifications from 'expo-notifications';

await Notifications.scheduleNotificationAsync({
  content: {
    title: 'Hello!',
    body: 'This is a test notification.',
  },
  trigger: { seconds: 5 },
});`}
      </CodeBlock>
      <P>You'll also need to ask for permission:</P>
      <CodeBlock>
        {`const { status } = await Notifications.requestPermissionsAsync();`}
      </CodeBlock>
      <Divider/>

      <P>
        Expo handles most of the linking
        and native setup for you.
        This makes it ideal for beginners
        or for apps that don’t require deep native customization.
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
