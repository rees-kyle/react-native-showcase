import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  P,
  BulletList,
  Divider,
  CodeBlock
} from '../../../components'

export default function LinkingToOtherAppsOrURLsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Linking to Other Apps or URLs</H1>
      <P>React Native’s Linking module lets you:</P>
      <BulletList
        items={[
          "Open URLs in the device’s web browser",
          "Deep link into other apps",
          "Check if a URL can be handled",
        ]}
      />
      <Divider/>

      <P>Import the module:</P>
      <CodeBlock>
        {`import { Linking } from 'react-native';`}
      </CodeBlock>
      <Divider/>

      <P>Opening a URL in the browser:</P>
      <CodeBlock>
        {`Linking.openURL('https://example.com')
  .catch(err => console.error('Failed to open URL:', err));`}
      </CodeBlock>
      <Divider/>

      <P>Opening other apps via deep links:</P>
      <CodeBlock>
        {`Linking.openURL('mailto:support@example.com');
Linking.openURL('tel:1234567890');
Linking.openURL('sms:1234567890?body=Hello');`}
      </CodeBlock>
      <Divider/>

      <P>Checking if a URL can be opened:</P>
      <CodeBlock>
        {`Linking.canOpenURL('https://example.com').then(supported => {
  if (supported) {
    Linking.openURL('https://example.com');
  } else {
    console.log("Don't know how to open URI: " + url);
  }
});`}
      </CodeBlock>
      <Divider/>

      <P>Listening to deep links:</P>
      <CodeBlock>
        {`useEffect(() => {
  const handleDeepLink = (event) => {
    const url = event.url;
    console.log('Received deep link:', url);
    // You can navigate based on the URL
  };

  const subscription = Linking.addEventListener('url', handleDeepLink);

  return () => {
    subscription.remove();
  };
}, []);`}
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
