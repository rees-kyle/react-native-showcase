import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopicButton from '../../components/TopicButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export default function SetupAndEnvironmentScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopicButton
        text="2.1  View, Text and TextInput"
        onPress={() => {
          navigation.navigate('ViewTextAndTextInput');
          console.log('View, Text and TextInput button pressed.');
        }}
      />
      <TopicButton
        text="2.2  ScrollView, FlatList and SectionList"
        onPress={() => {
          navigation.navigate('ScrollViewFlatListAndSectionList');
          console.log('ScrollView, FlatList and SectionList button pressed.');
        }}
      />
      <TopicButton
        text="2.3  Button, Pressable and TouchableOpacity"
        onPress={() => {
          navigation.navigate('ButtonPressableTouchableOpacity');
          console.log('Button, Pressable and TouchableOpacity button pressed.');
        }}
      />
      <TopicButton
        text="2.4  Image"
        onPress={() => {
          navigation.navigate('Image');
          console.log('Image button pressed.');
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
