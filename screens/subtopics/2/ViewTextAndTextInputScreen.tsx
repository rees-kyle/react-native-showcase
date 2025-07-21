import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

import {
  H1,
  H2,
  H3,
  P,
  CodeBlock,
  BulletList,
  Divider
} from '../../../components';

export default function ViewTextAndTextInputScreen() {
  const [text, setText] = useState('');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>View, Text and TextInput</H1>

      <H2>View</H2>
      <P>
        The basic building block for layout in React Native.
        It’s similar to a 'div' element in HTML,
        but designed for mobile styling and touch handling.
      </P>
      <H3>Code:</H3>
      <CodeBlock>
        {`import { View } from 'react-native';

<View style={{ flex: 1, padding: 20 }}>
  {/* other components */}
</View>`}
      </CodeBlock>
      <H3>Key Differences:</H3>
      <BulletList
        items={[
          "No 'div', 'span', or CSS classes — you use 'View' and inline or StyleSheet styles.",
          "Accepts 'style' as an object, often with Flexbox layout.",
        ]}
      />
      <Divider/>

      <H2>Text</H2>
      <P>
        Used to render text content.
        React Native doesn’t use 'p', 'h1', or 'span'.
      </P>
      <H3>Code:</H3>
      <CodeBlock>
        {`import { Text } from 'react-native';

<Text style={{ fontSize: 18, color: 'orchid', marginBottom: 12 }}>
  Hello, React Native!
</Text>`}
      </CodeBlock>
      <H3>Output:</H3>
      <Text style={{ fontSize: 18, color: 'orchid', marginBottom: 12 }}>
        Hello, React Native!
      </Text>
      <H3>Key Differences:</H3>
      <BulletList
        items={[
          "All text must be wrapped in 'Text' components.",
          "Nesting 'Text' inside 'Text' works (for bold, italic, etc.).",
          "Inline styling is common, but can be extracted into a 'StyleSheet'.",
        ]}
      />
      <Divider/>

      <H2>TextInput</H2>
      <P>
        An input field component for user text input.
      </P>
      <H3>Code:</H3>
      <CodeBlock>
        {`import { TextInput } from 'react-native';
import { useState } from 'react';

const [text, setText] = useState('');

<TextInput
  value={text}
  onChangeText={setText}
  placeholder="Type something"
  placeholderTextColor="#888"
  style={{
    backgroundColor: '#1e1e1e',
    color: 'orchid',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  }}
/>`}
      </CodeBlock>
      <H3>Output:</H3>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Type something"
        placeholderTextColor="#888"
        style={{
          backgroundColor: '#1e1e1e',
          color: 'orchid',
          borderColor: '#333',
          borderWidth: 1,
          borderRadius: 6,
          padding: 12,
          fontSize: 16,
          marginBottom: 12,
        }}
      />
      <H3>Key Differences:</H3>
      <BulletList
        items={[
          "Uses 'onChangeText' instead of 'onChange'.",
          "Styling requires explicit borders, padding, etc. (no default browser styles).",
          "No 'type' attribute — all behavior (like password input) is controlled via props like 'secureTextEntry'.",
        ]}
      />
      <Divider/>

      <H2>Good to Know</H2>
      <BulletList
        items={[
          "Components use Flexbox by default for layout.",
          "Style properties are in camelCase: 'backgroundColor', 'fontSize', etc.",
          "Use 'StyleSheet.create({})' to define reusable styles.",
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
  }
});
