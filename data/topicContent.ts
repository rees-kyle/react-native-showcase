export const topicContentMap: Record<string, () => Promise<string>> = {
  'Installing React Native CLI or using Expo': () =>
    import('../content/setup_and_environment/installation').then((m) => m.default),
  'Differences between Expo and React Native CLI': () =>
    import('../content/setup_and_environment/differences').then((m) => m.default),
};
