import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  H3,
  P,
  Divider,
  CodeBlock,
  BulletList
} from '../../../components';

export default function HandlingOfflineModeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Handling Offline Mode</H1>
      <P>
        For detecting internet connectivity.
      </P>
      <Divider/>

      <H2>'@react-native-community/netinfo' (Non-Expo)</H2>
      <H3>Installation:</H3>
      <CodeBlock>
        {`npm install @react-native-community/netinfo
npx pod-install`}
      </CodeBlock>
      <H3>Example:</H3>
      <CodeBlock>
        {`import NetInfo from '@react-native-community/netinfo';

NetInfo.fetch().then(state => {
  console.log('Connection type:', state.type);
  console.log('Is connected?', state.isConnected);
});`}
      </CodeBlock>
      <CodeBlock>
        {`useEffect(() => {
  const unsubscribe = NetInfo.addEventListener(state => {
    console.log('Connection type:', state.type);
    console.log('Is connected?', state.isConnected);
  });

  return () => unsubscribe();
}, []);`}
      </CodeBlock>
      <Divider/>

      <H2>'expo-network' (Expo)</H2>
      <H3>Installation:</H3>
      <CodeBlock>
        {`npx expo install expo-network`}
      </CodeBlock>
      <H3>Example:</H3>
      <CodeBlock>
        {`import * as Network from 'expo-network';

const status = await Network.getNetworkStateAsync();
console.log('Is connected?', status.isConnected);`}
      </CodeBlock>
      <Divider/>

      <H2>Use Cases</H2>
      <BulletList
        items={[
          "Display a warning banner if offline",
          "Queue or cache API requests until back online",
          "Disable form submission when not connected",
        ]}
      />
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
