import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  P,
  Divider,
  CodeBlock
} from '../../../components';

export default function ReuseReactKnowledgeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Reuse React Knowledge</H1>
      <P>
        React Native supports the same
        state management patterns as React for the web.
        There’s no need to learn anything new here—just apply
        what you already know.
      </P>
      <Divider/>

      <H2>useState</H2>
      <CodeBlock>
        {`import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
}`}
      </CodeBlock>
      <Divider/>

      <H2>useEffect</H2>
      <P>
        Identical usage for fetching data
        or reacting to lifecycle changes:
      </P>
      <CodeBlock>
        {`useEffect(() => {
  console.log('Component mounted');
}, []);`}
      </CodeBlock>
      <Divider/>

      <H2>useContext</H2>
      <CodeBlock>
        {`const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Screen />
    </ThemeContext.Provider>
  );
}

function Screen() {
  const theme = useContext(ThemeContext);
  return <Text>Current theme: {theme}</Text>;
}`}
      </CodeBlock>
      <Divider/>

      <H2>Redux / Zustand / Recoil</H2>
      <P>
        These libraries can also be used in React Native
        without change. Just make sure to integrate them
        into your component tree as usual.
      </P>
      <CodeBlock>
        {`import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}`}
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
