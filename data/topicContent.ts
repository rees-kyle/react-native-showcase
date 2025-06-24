// data/topicContent.ts

export const topicDetails: Record<string, string> = {
  'Installing React Native CLI or using Expo': `
There are two main ways to get started with React Native: using the **React Native CLI** or **Expo**.

---

### 🟢 Option 1: Using Expo (Beginner-Friendly)

Expo is a toolchain built around React Native that simplifies the development process.

✅ Pros:
- No need to install Android Studio or Xcode
- Easy to set up and run
- Built-in APIs for camera, location, sensors, etc.

🔧 How to install:

\`\`\`bash
npm install -g expo-cli
npx create-expo-app MyApp
cd MyApp
npx expo start
\`\`\`

---

### ⚙️ Option 2: Using React Native CLI (Advanced)

The CLI gives you full control, but setup is more complex. Ideal if you need native modules.

🔧 Prerequisites:
- Node.js
- Android Studio (for Android emulator)
- Xcode (for iOS simulator, Mac only)

🔧 How to install:

\`\`\`bash
npx react-native init MyApp
cd MyApp
npx react-native run-android   # or run-ios
\`\`\`

---

### 📝 Recommendation

If you're just starting out or want fast results, use **Expo**.  
If you need advanced native features or custom native modules, use **React Native CLI**.
`
};
