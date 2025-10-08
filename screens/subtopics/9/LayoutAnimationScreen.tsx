import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  P,
  BulletList,
  Divider,
  CodeBlock
} from '../../../components';

export default function LayoutAnimationScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>'LayoutAnimation'</H1>
      <P>
        Animations make your app feel smoother
        and more engaging by adding motion effects to UI elements
        — like fading, sliding, scaling,
        or moving components on the screen.
      </P>
      <P>
        React Native provides several ways to handle animations:
      </P>
      <BulletList
        items={[
          "'LayoutAnimation' (simple, declarative, for layout changes)",
          "Animated API (more flexible, supports complex animations)",
          "Reanimated (third-party, advanced, performant animations)",
        ]}
      />
      <P>
        'LayoutAnimation' automatically animates global layout changes
        that happen when the size or position of components change.
      </P>
      <P>
        When you change the layout of elements in your app
        (e.g., by adding/removing a component,
        or changing styles that affect layout),
        'LayoutAnimation' animates those changes smoothly
        without you having to manually define every animation step.
      </P>
      <P>
        It’s easy to use, requires minimal code,
        and works well for simple layout transitions
        such as expanding/collapsing views
        or animating list item insertion/removal.
      </P>
      <P>Limitations:</P>
      <BulletList
        items={[
          "Works only for layout changes (not for animating opacity, colors, or transforms).",
          "Platform differences: works out-of-the-box on iOS but on Android you have to enable it explicitly.",
        ]}
      />
      <Divider/>

      <H2>Example</H2>
      <CodeBlock>
        {`import React, { useState } from 'react';
import { View, Button, LayoutAnimation, Platform, UIManager, StyleSheet } from 'react-native';

// Enable 'LayoutAnimation' on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function LayoutAnimationExample() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    // Animate the next layout change
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <Button title="Toggle Box Size" onPress={toggleExpand} />
      <View style={[styles.box, expanded && styles.expandedBox]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  box: { width: 100, height: 100, backgroundColor: 'blue' },
  expandedBox: { width: 200, height: 200 },
});`}
      </CodeBlock>
      <P>
        When you press the button,
        the blue box smoothly animates between small and large sizes.
      </P>
      <P>
        The key is calling 'LayoutAnimation.configureNext()'
        right before the state change that triggers a layout update.
      </P>
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
