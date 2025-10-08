import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import {
  H1,
  H2,
  P,
  Divider,
  CodeBlock
} from '../../../components';

export default function PassingParamsBetweenScreensScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Passing Params between Screens</H1>
      <P>
        Pass parameters when navigating to another screen.
        These params let you share data,
        such as IDs, titles, or user input,
        between different parts of your app.
        The target screen can then access and use the params
        through the route object.
      </P>
      <Divider/>

      <H2>1. Pass params with 'navigation.navigate'</H2>
      <P>
        When navigating to another screen,
        you can pass params as the second argument:
      </P>
      <CodeBlock>
        {`navigation.navigate('Details', {
  userId: 42,
  userName: 'Alice',
});`}
      </CodeBlock>
      <Divider/>

      <H2>
        2. Access params in the target screen via 'route.params'
      </H2>
      <CodeBlock>
        {`// DetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) {
  const { userId, userName } = route.params;

  return (
    <View>
      <Text>User ID: {userId}</Text>
      <Text>User Name: {userName}</Text>
    </View>
  );
}`}
      </CodeBlock>
      <Divider/>

      <H2>Full Example</H2>
      <CodeBlock>
        {`// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            userId: 42,
            userName: 'Alice',
          })
        }
      />
    </View>
  );
}`}
      </CodeBlock>
      <CodeBlock>
        {`// DetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) {
  const { userId, userName } = route.params;

  return (
    <View>
      <Text>User ID: {userId}</Text>
      <Text>User Name: {userName}</Text>
    </View>
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
