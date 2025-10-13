import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopicButton from '../../components/TopicButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export function AnimationsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopicButton
        text="9.1  LayoutAnimation"
        onPress={() => {
          navigation.navigate('LayoutAnimation');
        }}
      />
      <TopicButton
        text="9.2  Animated API"
        onPress={() => {
          navigation.navigate('AnimatedAPI');
        }}
      />
      <TopicButton
        text="9.3  Reanimated"
        onPress={() => {
          navigation.navigate('Reanimated');
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
