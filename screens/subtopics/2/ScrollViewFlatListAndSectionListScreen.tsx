import React from 'react';
import {
  ScrollView,
  Text,
  FlatList,
  SectionList,
  StyleSheet
} from 'react-native';

import {
  H1,
  H2,
  H3,
  P,
  CodeBlock,
  Divider,
  BulletList,
  Table
} from '../../../components';

export default function ScrollViewFlatListAndSectionListScreen() {

  const data = [
    { id: '1', title: 'First' },
    { id: '2', title: 'Second' }
  ];

  const sections = [
    { title: 'A', data: ['Alice', 'Arnold'] },
    { title: 'B', data: ['Bob', 'Barbara'] },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled" nestedScrollEnabled
    >
      <H1>ScrollView, FlatList and SectionList</H1>
      <P>
        Three core React Native components used for displaying scrollable content.
        Here's what makes each one unique and how they differ from typical web behavior.
      </P>

      <H2>ScrollView</H2>
      <P>
        A generic scroll container. Think of it like a div with 'overflow: scroll',
        but optimized for small lists or fixed content.
      </P>
      <H3>Code:</H3>
      <CodeBlock>
        {`import { ScrollView, Text } from 'react-native';

<ScrollView>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  {/* ...more items */}
</ScrollView>`}
      </CodeBlock>
      <H3>Use Cases:</H3>
      <BulletList
        items={[
          "Content is small or limited in size.",
          "You want vertical or horizontal scrolling.",
        ]}
      />
      <P>
        All content is rendered up front, so performance drops with large lists.
      </P>
      <Divider/>

      <H2>FlatList</H2>
      <P>
        An optimized, performant list component for large scrollable lists.
      </P>
      <H3>Code:</H3>
      <CodeBlock>
        {`import { FlatList, Text } from 'react-native';

const data = [
  { id: '1', title: 'First' },
  { id: '2', title: 'Second' }
];

<FlatList
  data={data}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <Text style={styles.listItem}>{item.title}</Text>
  )}
  contentContainerStyle={styles.listContainer}
/>`}
      </CodeBlock>
      <H3>Key Props:</H3>
      <BulletList
        items={[
          <Text>
            <Text style={{ fontWeight: 'bold' }}>data</Text> – your array of items
          </Text>,
          <Text>
            <Text style={{ fontWeight: 'bold' }}>renderItem</Text> – function to render each item
          </Text>,
          <Text>
            <Text style={{ fontWeight: 'bold' }}>keyExtractor</Text> – unique key for each item
          </Text>,
        ]}
      />
      <H3>Output:</H3>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item.title}</Text>
        )}
        contentContainerStyle={styles.listContainer}
      />
      <H3>Use Cases:</H3>
      <BulletList
        items={[
          "You have a long list of items.",
          "You need lazy-loading or performance optimization.",
        ]}
      />
      <Divider/>

      <H2>SectionList</H2>
      <P>
        Like 'FlatList',
        but supports grouped sections with headers (like a contacts list sorted by letter).
      </P>
      <H3>Code:</H3>
      <CodeBlock>
        {`import { SectionList, Text } from 'react-native';

const sections = [
  { title: 'A', data: ['Alice', 'Arnold'] },
  { title: 'B', data: ['Bob', 'Barbara'] },
];

<SectionList
  sections={sections}
  keyExtractor={(item, index) => item + index}
  renderItem={({ item }) => (
    <Text style={styles.listItem}>{item}</Text>
  )}
  renderSectionHeader={({ section }) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  )}
  contentContainerStyle={styles.listContainer}
/>`}
      </CodeBlock>
      <H3>Output:</H3>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        contentContainerStyle={styles.listContainer}
      />
      <H3>Use Cases:</H3>
      <BulletList
        items={[
          "You want a list grouped by categories or sections.",
          "You need settings menus or alphabetical lists for example.",
        ]}
      />
      <Divider/>

      <H2>Summary</H2>
      <Table
        headers={['Component', 'Use Case', 'Optimized for Large Lists?', 'Supports Sections?']}
        rows={[
          ['ScrollView', 'Short scrollable content', '❌', '❌'],
          ['FlatList', 'Long, flat list of items', '✅', '❌'],
          ['SectionList', 'Long, grouped list with headers', '✅', '✅'],
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
  listContainer: {
    paddingVertical: 8,
  },
  listItem: {
    padding: 10,
    fontSize: 16,
    color: 'orchid',
    backgroundColor: '#1e1e1e',
    marginBottom: 4,
    borderRadius: 6,
  },
  sectionHeader: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#2a2a2a',
    color: 'orchid',
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 6,
    marginTop: 12,
  }
});
