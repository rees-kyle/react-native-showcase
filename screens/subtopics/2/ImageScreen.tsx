import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  H3,
  P,
  Divider,
  CodeBlock,
  Table,
  BulletList
} from '../../../components';

export default function ImageScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Image</H1>
      <P>
        Image, the React Native component for displaying pictures.
        It’s functionally similar to the 'img' tag in HTML
        but with a mobile-first API and styling system.
      </P>
      <Divider/>

      <H2>Image Component</H2>
      <P>
        Used to display static or dynamic images
        from local files or remote URLs.
      </P>
      <H3>Code:</H3>
      <CodeBlock>
        {`import { Image } from 'react-native';

<Image
  source={{ uri: 'https://example.com/image.png' }}
  style={{ width: 100, height: 100 }}
/>`}
      </CodeBlock>
      <Divider/>

      <H2>Local Images</H2>
      <P>
        To load images from your project.
      </P>
      <H3>Code:</H3>
      <CodeBlock>
        {`<Image
  source={require('../../../assets/example.webp')}
  style={{ width: 330, height: 150 }}
/>`}
      </CodeBlock>
      <P>
        The require syntax is only for local images — not URLs.
      </P>
      <H3>Output:</H3>
      <Image
        source={require('../../../assets/example.webp')}
        style={{ width: 330, height: 150 }}
      />
      <Divider/>

      <H2>Remote Images</H2>
      <P>
        To load images from a URL.
      </P>
      <H3>Code:</H3>
      <CodeBlock>
        {`<Image
  source={{ uri: 'https://picsum.photos/400/300' }}
  style={{ width: 330, height: 150 }}
/>`}
      </CodeBlock>
      <H3>Output:</H3>
      <Image
        source={{ uri: 'https://picsum.photos/400/300' }}
        style={{ width: 330, height: 150 }}
      />
      <Divider/>

      <H2>Common Props</H2>
      <Table
        headers={['Prop', 'Description']}
        rows={[
          ['source', 'Image URI or `require()` for local files'],
          ['style', 'Defines size, shape, borders, etc.'],
          ['resizeMode', '`cover`, `contain`, `stretch`, `center`, `repeat`'],
          ['onLoad', 'Called when the image has loaded'],
          ['onError', 'Called if loading fails'],
        ]}
        boldColumnIndex={0}
      />
      <Divider/>

      <H2>Summary</H2>
      <BulletList
        items={[
          "Use 'require()' for local assets and '{ uri: ... }' for remote.",
          "Always set 'width' and 'height'.",
          "Customize appearance with 'resizeMode' and 'style'.",
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
