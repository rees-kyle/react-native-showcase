import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  H3,
  P,
  Divider,
  BulletList,
  CodeBlock
} from '../../../components';

export default function TestingScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Testing</H1>
      <P>
        Testing ensures your React Native app works correctly,
        from small functions to full user flows.
      </P>
      <Divider/>

      <H2>Jest (Unit & Snapshot Testing)</H2>
      <P>
        Jest is the default testing framework
        that comes with React Native.
      </P>
      <P>What it’s used for:</P>
      <BulletList
        items={[
          "Unit testing functions and components",
          "Snapshot testing to detect UI regressions",
        ]}
      />
      <H3>Basic Example:</H3>
      <CodeBlock>
        {`import { add } from './utils';

test('adds numbers', () => {
  expect(add(2, 3)).toBe(5);
});`}
      </CodeBlock>
      <H3>Snapshot test:</H3>
      <CodeBlock>
        {`import React from 'react';
import renderer from 'react-test-renderer';
import MyComponent from './MyComponent';

test('renders correctly', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});`}
      </CodeBlock>
      <Divider/>

      <H2>React Native Testing Library (Component Testing)</H2>
      <P>
        Built on top of 'react-test-renderer'
        and focused on testing components
        like users interact with them.
      </P>
      <P>What it’s used for:</P>
      <BulletList
        items={[
          "Testing component behavior and UI output",
          "Simulating user interactions",
        ]}
      />
      <H3>Install:</H3>
      <CodeBlock>
        {`npm install --save-dev @testing-library/react-native`}
      </CodeBlock>
      <H3>Example:</H3>
      <CodeBlock>
        {`import { render, fireEvent } from '@testing-library/react-native';
import Counter from './Counter';

test('increments counter on press', () => {
  const { getByText } = render(<Counter />);
  fireEvent.press(getByText('Increment'));
  expect(getByText('Count: 1')).toBeTruthy();
});`}
      </CodeBlock>
      <Divider/>

      <H2>Detox (End-to-End Testing)</H2>
      <P>
        Detox is used for testing real interactions
        on devices or emulators.
      </P>
      <P>What it’s used for:</P>
      <BulletList
        items={[
          "Full app automation: button taps, screen transitions, async waits",
          "Testing on real devices/emulators",
        ]}
      />
      <H3>Install:</H3>
      <CodeBlock>
        {`npm install --save-dev detox`}
      </CodeBlock>
      <P>
        You also need to configure your 'package.json'
        and build your app for testing.
      </P>
      <H3>Example:</H3>
      <CodeBlock>
        {`describe('Login flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should show login screen', async () => {
    await expect(element(by.id('login-screen'))).toBeVisible();
  });

  it('should log in successfully', async () => {
    await element(by.id('username')).typeText('testuser');
    await element(by.id('password')).typeText('password');
    await element(by.id('login-button')).tap();
    await expect(element(by.id('home-screen'))).toBeVisible();
  });
});`}
      </CodeBlock>
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
