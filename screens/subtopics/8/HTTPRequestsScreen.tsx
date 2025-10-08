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

export default function HTTPRequestsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>HTTP Requests</H1>
      <P>
        In React Native,
        you use the same libraries and techniques for networking
        as in React.
      </P>
      <Divider/>

      <H2>'fetch' (built-in)</H2>
      <H3>Example:</H3>
      <CodeBlock>
        {`fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`}
      </CodeBlock>
      <Divider/>

      <H2>'Axios' (external library)</H2>
      <H3>Install:</H3>
      <CodeBlock>
        {`npm install axios`}
      </CodeBlock>
      <H3>Example:</H3>
      <CodeBlock>
        {`import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));`}
      </CodeBlock>
      <Divider/>

      <H2>Summary</H2>
      <BulletList
        items={[
          "Works the same as in React (web)",
          "Supports all HTTP methods (GET, POST, PUT, DELETE, etc.)",
          "Can be used with async/await too",
          "Axios offers more features out of the box (interceptors, default headers)",
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
