import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  H3,
  P,
  Divider,
  BulletList,
  CodeBlock
} from '../../../components';

export default function ReanimatedScreen() {
  return (
    <ScrollView style={styles.container}>
      <H1>Reanimated</H1>
      <P>
        An advanced animation library built for
        creating high-performance, complex animations
        that run directly on the UI thread.
        By offloading animations from the JavaScript thread,
        it ensures smooth, jank-free performance
        even under heavy load. It's an optional tool,
        ideal for gesture-based interactions
        and demanding animation scenarios.
      </P>
      <P>
        It provides more control, performance, and flexibility
        than the basic Animated API.
      </P>
      <Divider/>

      <H2>Benefits</H2>
      <BulletList
        items={[
          "Runs animations synchronously on the native UI thread using a custom worklet system",
          "Smooth even during complex gesture-based animations",
          "Works well with 'react-native-gesture-handler'",
          "Enables gesture-driven animations (e.g. draggable bottom sheets, swipes, snapping transitions)",
          "Supports layout animations, shared transitions, and complex chaining",
        ]}
      />
      <Divider/>

      <H2>Installation</H2>
      <P>Non-Expo:</P>
      <CodeBlock>
        {`npm install react-native-reanimated
npx pod-install`}
      </CodeBlock>
      <P>Expo:</P>
      <CodeBlock>
        {`npx expo install react-native-reanimated`}
      </CodeBlock>
      <P>Also add this line to 'babel.config.js':</P>
      <CodeBlock>
        {`plugins: ['react-native-reanimated/plugin']`}
      </CodeBlock>
      <Divider/>

      <H2>Key Features</H2>
      <BulletList
        items={[
          <Text>
            <Text style={{ fontWeight: 'bold' }}>
              useSharedValue():
            </Text>
            store animatable values on the UI thread
          </Text>,
          <Text>
            <Text style={{ fontWeight: 'bold' }}>
              useAnimatedStyle():
            </Text>
            bind styles to shared values
          </Text>,
          <Text>
            <Text style={{ fontWeight: 'bold' }}>
              withTiming(), withSpring(), withDelay():
            </Text>
            animate shared values
          </Text>,
          <Text>
            <Text style={{ fontWeight: 'bold' }}>
              Worklets:
            </Text>
            lightweight JS functions that run on the UI thread
          </Text>,
        ]}
      />
      <Divider/>

      <H2>Example</H2>
      <CodeBlock>
        {`import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export default function FadeInReanimated() {
  const opacity = useSharedValue(0); // Initial opacity

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 500 }); // Animate to 1
  }, []);

  return (
    <Animated.View style={animatedStyle}>
      <Text>Reanimated Fade-In</Text>
    </Animated.View>
  );
}`}
      </CodeBlock>
      <P>
        This component uses React Native Reanimated
        to smoothly fade in text. It starts with opacity at 0
        and animates it to 1 over 500ms
        when the component mounts.
      </P>
      <Divider/>

      <H2>Usage</H2>
      <P>Use when you're building:</P>
      <BulletList
        items={[
          "Gesture-heavy apps (drag, swipe, pan)",
          "Smooth animations tied to user input",
          "Performance-critical interfaces",
          "Animated components that must not drop frames",
        ]}
      />
      <P>Skip it if:</P>
      <BulletList
        items={[
          "You only need simple opacity, translate, or scale animations",
          "You’re fine with 'Animated' or 'LayoutAnimation'",
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
