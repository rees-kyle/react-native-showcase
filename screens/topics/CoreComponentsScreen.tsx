import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopicButton from '../../components/TopicButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export function CoreComponentsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopicButton
        text="2.1  View, Text and TextInput"
        onPress={() => {
          navigation.navigate('ViewTextAndTextInput');
        }}
      />
      <TopicButton
        text="2.2  ScrollView, FlatList and SectionList"
        onPress={() => {
          navigation.navigate('ScrollViewFlatListAndSectionList');
        }}
      />
      <TopicButton
        text="2.3  Button, Pressable and TouchableOpacity"
        onPress={() => {
          navigation.navigate('ButtonPressableTouchableOpacity');
        }}
      />
      <TopicButton
        text="2.4  Image"
        onPress={() => {
          navigation.navigate('Image');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
    gap: 12,
  },
});
