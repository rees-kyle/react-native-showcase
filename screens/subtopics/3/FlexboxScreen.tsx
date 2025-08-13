import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import {
  H1,
  H2,
  H3,
  H4,
  P,
  Divider,
  BulletList,
  CodeBlock,
  Table
} from '../../../components';

export default function FlexboxScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Flexbox</H1>
      <P>
        React Native uses Flexbox by default for layout.
        It works similarly to CSS Flexbox,
        but there are a few differences worth noting.
      </P>
      <Divider/>

      <H2>Key Differences from CSS</H2>
      <BulletList
        items={[
          "Default flexDirection is column (not row like in web).",
          "All units are unitless and interpreted as density-independent pixels (dp).",
        ]}
      />
      <Divider/>

      <H2>Properties</H2>
      <H3>flexDirection</H3>
      <P>Controls the main axis direction.</P>
      <H4>Code:</H4>
      <CodeBlock>
        {`<View style={{ flexDirection: 'row' }}>
  <View style={[styles.box, { backgroundColor: 'red' }]} />
  <View style={[styles.box, { backgroundColor: 'green' }]} />
  <View style={[styles.box, { backgroundColor: 'blue' }]} />
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  box: {
    width: 50,
    height: 50,
    margin: 4,
  },
});`}
      </CodeBlock>
      <H4>Output:</H4>
      <View style={{ flexDirection: 'row' }}>
        <View style={[styles.box, { backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'green' }]} />
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
      </View>
      <Divider/>

      <H3>justifyContent</H3>
      <P>Aligns children along the main axis.</P>
      <H4>Code:</H4>
      <CodeBlock>
        {`<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
  <View style={[styles.box, { backgroundColor: 'red' }]} />
  <View style={[styles.box, { backgroundColor: 'green' }]} />
  <View style={[styles.box, { backgroundColor: 'blue' }]} />
</View>`}
      </CodeBlock>
      <H4>Output:</H4>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={[styles.box, { backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'green' }]} />
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
      </View>
      <Divider/>

      <H3>alignItems</H3>
      <P>Aligns children along the cross axis.</P>
      <H4>Code:</H4>
      <CodeBlock>
        {`<View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
  <View style={[styles.box, { backgroundColor: 'red', height: 40 }]} />
  <View style={[styles.box, { backgroundColor: 'green', height: 60 }]} />
  <View style={[styles.box, { backgroundColor: 'blue', height: 50 }]} />
</View>`}
      </CodeBlock>
      <H4>Output:</H4>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <View style={[styles.box, { backgroundColor: 'red', height: 40 }]} />
        <View style={[styles.box, { backgroundColor: 'green', height: 60 }]} />
        <View style={[styles.box, { backgroundColor: 'blue', height: 50 }]} />
      </View>
      <Divider/>

      <H3>flex</H3>
      <P>Defines how much space a component should take up relative to others.</P>
      <H4>Code:</H4>
      <CodeBlock>
        {`<View style={{ flexDirection: 'row', height: 80 }}>
  <View style={[styles.box, { backgroundColor: 'red', height: 40 }]} />
  <View style={[styles.box, { backgroundColor: 'green', height: 60 }]} />
  <View style={[styles.box, { backgroundColor: 'blue', height: 50 }]} />
</View>`}
      </CodeBlock>
      <H4>Output:</H4>
      <View style={{ flexDirection: 'row', height: 60 }}>
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 2, backgroundColor: 'green' }} />
        <View style={{ flex: 1, backgroundColor: 'blue' }} />
      </View>
      <Divider/>

      <H3>flexWrap</H3>
      <P>Controls whether children should wrap onto multiple lines when there’s not enough space.</P>
      <H4>Code:</H4>
      <CodeBlock>
        {`<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
  <View style={[styles.box, { backgroundColor: 'red' }]} />
  <View style={[styles.box, { backgroundColor: 'green' }]} />
  <View style={[styles.box, { backgroundColor: 'blue' }]} />
  <View style={[styles.box, { backgroundColor: 'orange' }]} />
  <View style={[styles.box, { backgroundColor: 'purple' }]} />
  <View style={[styles.box, { backgroundColor: 'cyan' }]} />
</View>`}
      </CodeBlock>
      <H4>Output:</H4>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <View style={[styles.box, { backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'green' }]} />
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
        <View style={[styles.box, { backgroundColor: 'orange' }]} />
        <View style={[styles.box, { backgroundColor: 'purple' }]} />
        <View style={[styles.box, { backgroundColor: 'cyan' }]} />
      </View>
      <Divider/>

      <H2>Summary</H2>
      <Table
        headers={['Property', 'Description']}
        rows={[
          ['flexDirection', 'Main axis direction (row/column)'],
          ['justifyContent', 'Alignment on main axis'],
          ['alignItems', 'Alignment on cross axis'],
          ['flex', 'Proportional sizing'],
          ['flexWrap', 'Multi-line wrapping'],
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
  box: {
    width: 50,
    height: 50,
    margin: 4,
  },
});
