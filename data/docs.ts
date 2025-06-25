// data/docs.ts

export type Topic = {
  title: string;     // Short label shown in SectionScreen
  fullTitle: string; // Full title shown in TopicScreen
};

export type TopicSection = {
  id: string;
  title: string;
  topics: Topic[];
};

export const docsData: TopicSection[] = [
  {
    id: "setup",
    title: "Setup & Environment",
    topics: [
      {
        title: "Installation",
        fullTitle: "Installing React Native CLI or using Expo",
      },
      {
        title: "Differences",
        fullTitle: "Differences between Expo and React Native CLI",
      },
    ],
  },
  {
    id: "core-components",
    title: "Core Components",
    topics: [
      {
        title: "View & Text",
        fullTitle: "Using View, Text, and TextInput",
      },
      {
        title: "Lists",
        fullTitle: "Using ScrollView, FlatList, and SectionList",
      },
      {
        title: "Buttons",
        fullTitle: "Using Button, Pressable, and TouchableOpacity",
      },
      {
        title: "Images",
        fullTitle: "Displaying Images with Image Component",
      },
    ],
  },
  // Add the rest of your topics as needed
];