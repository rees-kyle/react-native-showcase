import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  H3,
  P,
  BulletList,
  Divider,
  CodeBlock
} from '../../../components';

export default function AnimatedAPIScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Animated API</H1>
      <P>
        The Animated API provides a declarative way
        to build animations by using animated values
        that update UI components smoothly over time.
      </P>
      <P>
        Instead of
        imperatively updating UI properties frame-by-frame,
        you declare:
      </P>
      <BulletList
        items={[
          "Which values are animated",
          "How these values change",
          "What UI styles depend on these values",
        ]}
      />
      <P>
        React Native then handles updating the UI efficiently.
      </P>
      <Divider/>

      <H2>Key Concepts</H2>
      <BulletList
        items={[
          <Text>
            <Text style={{ fontWeight: 'bold' }}>
              Animated.Value:
            </Text>
            Holds a numeric value that can be animated.
          </Text>,
          <Text>
            <Text style={{ fontWeight: 'bold' }}>
              Animated.ValueXY:
            </Text>
            For animating 2D values (x and y position).
          </Text>,
          <Text>
            <Text style={{ fontWeight: 'bold' }}>
              Animated.timing(config):
            </Text>
            Animates a value over a fixed duration with easing.
          </Text>,
          <Text>
            <Text style={{ fontWeight: 'bold' }}>
              Animated.spring(config):
            </Text>
            Animates a value with spring physics (bouncy, natural feel).
          </Text>,
          <Text>
            <Text style={{ fontWeight: 'bold' }}>
              Animated.sequence/parallel/stagger:
            </Text>
            Compose multiple animations in order, together, or staggered.
          </Text>,
        ]}
      />
      <Divider/>

      <H2>How it works step-by-step</H2>
      <H3>1. Create an Animated.Value</H3>
      <P>To hold the starting state of the animation.</P>
      <H3>2. Define an animation</H3>
      <P>Describing how the value changes.</P>
      <H3>3. Start the animation</H3>
      <H3>4. Use the animated value</H3>
      <P>In styles of animated components.</P>
      <Divider/>

      <H2>Example</H2>
      <CodeBlock>
        {`import React, { useRef, useEffect } from 'react';
import { Animated, View, Text } from 'react-native';

export default function FadeInExample() {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,  // Use native driver for better performance
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity }}>
      <Text>Fade-in text</Text>
    </Animated.View>
  );
}`}
      </CodeBlock>
      <P>
        This example uses 'Animated.timing' to smoothly animate
        the text’s opacity from 0 to 1 over half a second,
        creating a fade-in effect when the component mounts.
      </P>
      <Divider/>

      <H2>Advantages</H2>
      <BulletList
        items={[
          <Text>
            <Text style={{ fontWeight: 'bold' }}>
              Clean and readable:
            </Text>
            You declare what happens, not how to update every frame.
          </Text>,
          <Text>
            <Text style={{ fontWeight: 'bold' }}>
              Powerful:
            </Text>
            Supports complex animation sequences, springs, interpolation.
          </Text>,
          <Text>
            <Text style={{ fontWeight: 'bold' }}>
              Performance:
            </Text>
            With 'useNativeDriver: true', animations run on native thread, avoiding JS thread lag.
          </Text>,
          <Text>
            <Text style={{ fontWeight: 'bold' }}>
              Interpolations:
            </Text>
            You can map animated values to different output ranges.
          </Text>,
        ]}
      />
      <Divider/>

      <H2>Use Cases</H2>
      <BulletList
        items={[
          "Fading elements in/out (opacity)",
          "Moving or sliding components (translateX/Y)",
          "Scaling or rotating views",
          "Creating animated gestures or drag & drop effects",
          "Combining multiple animations (parallel, sequence)",
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
