import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopicButton from '../../components/TopicButton';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export function StylingScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TopicButton
        text="3.1  Flexbox"
        onPress={() => {
          navigation.navigate('Flexbox');
          console.log('Flexbox button pressed.');
        }}
      />
      <TopicButton
        text="3.2  Stylesheet Create Vs Inline Styles"
        onPress={() => {
          navigation.navigate('StylesheetCreateVsInlineStyles');
          console.log('Stylesheet Create Vs Inline Styles button pressed.');
        }}
      />
      <TopicButton
        text="3.3  No CSS Files"
        onPress={() => {
          navigation.navigate('NoCSSFiles');
          console.log('No CSS Files button pressed.');
        }}
      />
      <TopicButton
        text="3.4  Platform Specific Styling"
        onPress={() => {
          navigation.navigate('PlatformSpecificStyling');
          console.log('Platform Specific Styling button pressed.');
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
