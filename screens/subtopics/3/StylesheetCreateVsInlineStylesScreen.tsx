import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  H3,
  H4,
  P,
  Divider,
  CodeBlock,
  BulletList,
  Table
} from '../../../components';

export default function StylesheetCreateVsInlineStylesScreen() {
  const theme = 'dark';

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Stylesheet Create Vs Inline Styles</H1>
      <P>
        Both define styles for components,
        but each has different use cases and performance implications.
      </P>
      <Divider/>

      <H2>StyleSheet.create</H2>
      <P>
        A helper from React Native that creates a centralized object
        for reusable, performant styles.
      </P>
      <H3>Code:</H3>
      <CodeBlock>
        {`<H1 style={styles.example}>Example</H1>

const styles = StyleSheet.create({
  example: {
    color: 'orchid',
  },
});`}
      </CodeBlock>
      <H3>Output:</H3>
      <H1 style={styles.example}>Example</H1>
      <H3>Pros:</H3>
      <BulletList
        items={[
          <Text><Text style={{ fontWeight: 'bold' }}>Performance:</Text> Styles are validated and optimized at runtime.</Text>,
          <Text><Text style={{ fontWeight: 'bold' }}>Readability:</Text> Keeps styles organized and clean.</Text>,
          <Text><Text style={{ fontWeight: 'bold' }}>Reusability:</Text> Can share styles across components.</Text>,
        ]}
      />
      <H3>Notes:</H3>
      <BulletList
        items={[
          "Values must be static (no dynamic expressions).",
          "Cannot use JavaScript logic inside.",
        ]}
      />
      <Divider/>

      <H2>Inline Styles</H2>
      <P>
        Define styles directly inside the 'style' prop as an object.
      </P>
      <H3>Code:</H3>
      <CodeBlock>
        {`<H1 style={{ color:'orchid' }}>Example</H1>`}
      </CodeBlock>
      <H3>Output:</H3>
      <H1 style={{ color:'orchid' }}>Example</H1>
      <H3>Pros:</H3>
      <BulletList
        items={[
          <Text><Text style={{ fontWeight: 'bold' }}>Quick and dynamic:</Text> Useful for conditionals or one-offs.</Text>,
          <Text><Text style={{ fontWeight: 'bold' }}>Can contain logic:</Text> e.g., ternary operators, variables.</Text>,
        ]}
      />
      <H4>Code:</H4>
      <CodeBlock>
        {`const theme = 'dark';

<H1 style={{ color: theme === 'dark' ? 'orchid' : 'white' }}>Example</H1>`}
      </CodeBlock>
      <H4>Output:</H4>
      <H1 style={{ color: theme === 'dark' ? 'orchid' : 'white' }}>Example</H1>
      <H3>Cons:</H3>
      <BulletList
        items={[
          "No internal performance optimization.",
          "Harder to reuse and maintain.",
        ]}
      />
      <Divider/>

      <H2>Best Practice</H2>
      <P>Use both together.</P>
      <CodeBlock>
        {`const styles = StyleSheet.create({
  baseText: {
    fontSize: 18,
    color: 'black',
  },
});

<Text style={[styles.baseText, { color: 'red' }]} />
`}
      </CodeBlock>
      <BulletList
        items={[
          "Define base styles with 'StyleSheet.create'.",
          "Use inline for overrides or dynamic values.",
        ]}
      />
      <Divider/>

      <H2>Summary</H2>
      <Table
        headers={["Feature", "'StyleSheet.create'", "Inline Styles"]}
        rows={[
          ["Performance", "✅ Optimized", "❌ Not optimized"],
          ["Reusability", "✅ Reusable", "❌ One-off use"],
          ["Dynamic styling", "❌ Not allowed", "✅ Allowed"],
          ["Readability & hygiene", "✅ Organized", "❌ Messy with complex logic"],
        ]}
        boldColumnIndex={0}
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
  example: {
    color: 'orchid',
  },
});
