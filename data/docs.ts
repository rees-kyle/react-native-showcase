// data/docs.ts

export type TopicSection = {
  id: string;
  title: string;
  topics: string[];
};

export const docsData: TopicSection[] = [
  {
    id: "setup",
    title: "Setup & Environment",
    topics: [
      "Installing React Native CLI or using Expo",
      "Differences between Expo and React Native CLI",
      "Running apps on Android and iOS simulators/emulators",
    ],
  },
  {
    id: "core-components",
    title: "Core Components",
    topics: [
      "View, Text, TextInput",
      "ScrollView, FlatList, SectionList",
      "Button, Pressable, TouchableOpacity",
      "Image",
    ],
  },
  {
    id: "styling",
    title: "Styling in React Native",
    topics: [
      "Flexbox (similar to CSS but slightly different defaults)",
      "Stylesheet.create vs inline styles",
      "No CSS files — all styling is JavaScript objects",
      "Platform-specific styling (iOS vs Android)",
    ],
  },
  {
    id: "navigation",
    title: "React Navigation library",
    topics: [
      "Stack Navigator",
      "Tab Navigator",
      "Drawer Navigator",
      "Passing params between screens",
    ],
  },
  {
    id: "platform-apis",
    title: "Platform APIs & Native Features",
    topics: [
      "Permissions and the 'PermissionsAndroid' API",
      "Linking to other apps or URLs",
      "Using 'Platform' module (e.g., 'Platform.OS')",
    ],
  },
  {
    id: "native-modules",
    title: "Native Modules and Third-party Libraries",
    topics: [
      "Using camera, GPS, device storage, etc.",
      "Installing native dependencies via 'npm'/'yarn' and linking",
      "Expo APIs for sensors, media, notifications (if using Expo)",
    ],
  },
  {
    id: "state-context",
    title: "State & Context",
    topics: [
      "Reuse React knowledge (hooks, context, Redux if applicable)",
      "AsyncStorage (for local key-value data)",
      "Secure storage options (Expo SecureStore, react-native-keychain)",
    ],
  },
  {
    id: "networking",
    title: "Networking",
    topics: [
      "'fetch' or Axios for HTTP requests (same as React)",
      "Handling offline mode (e.g., NetInfo API)",
    ],
  },
  {
    id: "animations",
    title: "Animations",
    topics: ["LayoutAnimation", "Animated API (declarative)", "Reanimated (optional, advanced)"],
  },
  {
    id: "debugging-testing",
    title: "Debugging & Testing",
    topics: [
      "Debugging with Flipper and React Native Debugger",
      "Logging via Metro Bundler",
      "Testing using Jest, Detox, React Native Testing Library",
    ],
  },
  {
    id: "deployment",
    title: "Building & Deployment",
    topics: [
      "Building APK/IPA (Android/iOS binaries)",
      "Code signing",
      "Publishing to Play Store / App Store",
    ],
  },
];
