import React from 'react';
import { ScrollView, View, Button, Pressable, Text, TouchableOpacity, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  H3,
  P,
  CodeBlock,
  BulletList,
  Divider,
  Table
} from '../../../components';

export default function ButtonPressableTouchableOpacityScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Button, Pressable and TouchableOpacity</H1>
      <P>
        These components handle user interaction like clicks or taps
        and are similar in function to buttons in web development,
        but with key mobile-specific behavior.
      </P>

      <H2>Button</H2>
      <P>
        A simple, built-in button with limited styling capabilities.
        It’s easy to use for basic interactions.
      </P>
      <H3>Code:</H3>
      <CodeBlock>
        {`import { Button } from 'react-native';

<Button
  title="Click Me"
  onPress={() => console.log('Button pressed')}
/>`}
      </CodeBlock>
      <H3>Output:</H3>
      <View style={{ marginBottom: 16 }}>
        <Button
          title="Click Me"
          onPress={() => console.log('Button pressed')}
        />
      </View>
      <H3>Pros:</H3>
      <BulletList
        items={[
          "Simple to use.",
          "Cross-platform appearance.",
        ]}
      />
      <H3>Cons:</H3>
      <BulletList
        items={[
          "Minimal styling options (e.g., can’t change font or shape).",
          "Can only modify 'color' and 'title'.",
        ]}
      />
      <Divider/>

      <H2>Pressable</H2>
      <P>
        The most flexible and modern way to create touchable components.
        Allows full control over styling and press feedback (like scaling, highlighting, etc.).
      </P>
      <H3>Code:</H3>
      <CodeBlock>
        {`import { Pressable, Text } from 'react-native';

<Pressable
  onPress={() => console.log('Pressed!')}
  style={({ pressed }) => [
    {
      backgroundColor: pressed ? '#C25FC0' : 'orchid',
      padding: 10,
      borderRadius: 5,
    },
  ]}
>
  <Text
    style={{
      color: 'white',
      fontWeight: 'bold',
    }}
  >
    Custom Button
  </Text>
</Pressable>`}
      </CodeBlock>
      <View style={{ marginBottom: 16 }}>
        <Pressable
          onPress={() => console.log('Pressed!')}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#C25FC0' : 'orchid',
              padding: 10,
              borderRadius: 5,
            },
          ]}
        >
          <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
          }}>
            Custom Button
          </Text>
        </Pressable>
      </View>
      <H3>Pros:</H3>
      <BulletList
        items={[
          "Complete control over styles and animations.",
          "Supports events like 'onPressIn', 'onPressOut', 'onLongPress'.",
        ]}
      />
      <H3>Use Cases:</H3>
      <BulletList
        items={[
          "You want a custom look and feel.",
          "You need fine-grained control over press behavior.",
        ]}
      />
      <Divider/>

      <H2>TouchableOpacity</H2>
      <P>
        A wrapper that reduces opacity when pressed —
        useful for making custom buttons or touchable UI components.
      </P>
      <CodeBlock>
        {`import { TouchableOpacity, Text } from 'react-native';

<TouchableOpacity
  onPress={() => console.log('Touched!')}
  style={{
    backgroundColor: 'orchid',
    padding: 10,
    borderRadius: 5
  }}
>
  <Text
    style={{
      color: 'white',
      fontWeight: 'bold',
    }}
  >
    Tap Me
  </Text>
</TouchableOpacity>`}
      </CodeBlock>
      <H3>Output:</H3>
      <View style={{ marginBottom: 12 }}>
        <TouchableOpacity
          onPress={() => console.log('Touched!')}
          style={{
            backgroundColor: 'orchid',
            padding: 10,
            borderRadius: 5
          }}
        >
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Tap Me
          </Text>
        </TouchableOpacity>
      </View>
      <H3>Pros:</H3>
      <BulletList
        items={[
          "Simple to use.",
          "Provides built-in visual feedback (opacity fade).",
        ]}
      />
      <H3>Cons:</H3>
      <BulletList
        items={[
          "Less flexible than 'Pressable' for advanced use.",
        ]}
      />
      <Divider/>

      <H2>Summary</H2>
      <Table
        headers={[
          'Component', 'Styling Control', 'Feedback Effect', 'Best Use Case',
        ]}
        rows={[
          ['Button', '❌ Limited', 'Default native button', 'Quick buttons with minimal setup',],
          ['Pressable', '✅ Full', 'Custom (opacity, scale, etc.)', 'Highly customized and interactive UI',],
          ['TouchableOpacity', '✅ Moderate', 'Fades opacity on press', 'Custom buttons with simple feedback',],
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
});
