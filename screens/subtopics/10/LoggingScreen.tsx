import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  P,
  CodeBlock,
  Divider,
  BulletList
} from '../../../components';

export default function LoggingScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Logging</H1>
      <P>
        Metro Bundler is the JavaScript bundler
        used by React Native. It also acts as a central place
        for viewing logs during development.
      </P>
      <P>
        You can log information in your React Native app using:
      </P>
      <CodeBlock>
        {`console.log('Message');
console.warn('Warning');
console.error('Error');`}
      </CodeBlock>
      <P>
        These logs appear in the terminal window running Metro.
      </P>
      <Divider/>

      <H2>Debugging Techniques</H2>
      <BulletList
        items={[
          "View real-time 'console.log()' output",
          "See JavaScript errors or stack traces",
          "Log object values for debugging state or props",
          "Track lifecycle events and function calls",
        ]}
      />
      <Divider/>

      <H2>Tips</H2>
      <BulletList
        items={[
          "Use 'console.table()' for readable object/array output",
          "For focused debugging, temporarily disable noisy logs",
          "Combine with breakpoints for deeper inspection (using Chrome DevTools or React Native Debugger)",
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
