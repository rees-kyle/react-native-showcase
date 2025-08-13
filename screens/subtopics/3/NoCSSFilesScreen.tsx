import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  P,
  BulletList,
  Divider,
  CodeBlock,
  Table
} from '../../../components';

export default function NoCSSFilesScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>No CSS Files</H1>
      <P>
        Unlike web development (HTML + CSS),
        React Native does not use external CSS files.
        All styling is done through JavaScript objects
        using the 'style' prop.
      </P>
      <BulletList
        items={[
          "No '.css', '.scss', or 'className' usage.",
          "All styles are inline or via 'StyleSheet.create', using camelCase properties.",
          "Values are unitless — numbers are interpreted as dp (density-independent pixels).",
        ]}
      />
      <Divider/>

      <H2>Example</H2>
      <CodeBlock>
        {`import { Text, View } from 'react-native';

const styles = {
  container: {
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    color: 'darkblue',
  },
};

<View style={styles.container}>
  <Text style={styles.text}>Styled with JS!</Text>
</View>`}
      </CodeBlock>
      <Divider/>

      <H2>Web vs React Native</H2>
      <Table
        headers={["Web (CSS)", "React Native (JS Object)"]}
        rows={[
          ["background-color", "backgroundColor"],
          ["font-size: 16px;", "fontSize: 16"],
          ["Uses classes", "Uses style props"],
          ["Units like px, %", "No units — numbers only"],
        ]}
      />
      <Divider/>

      <H2>Notes</H2>
      <P>No global stylesheets.</P>
      <P>No support for standard CSS features like:</P>
      <BulletList
        items={[
          "Media queries (need a JS workaround or lib)",
          "Pseudo-classes like ':hover'",
          "Cascade or selector chaining",
        ]}
      />
      <Divider/>

      <H2>Summary</H2>
      <BulletList
        items={[
          "React Native styles live in JavaScript.",
          "No CSS or classes — use 'style' props with objects.",
          "CamelCase keys, unitless numbers, and optional 'StyleSheet.create()' for optimization.",
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
