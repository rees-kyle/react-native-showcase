import React from 'react';
import { ScrollView, StyleSheet, Text, Linking } from 'react-native';
import {
  H1,
  H2,
  H3,
  H4,
  P,
  BulletList,
  CodeBlock,
  Divider
} from '../../../components';

export default function RunningAppsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <H1>Running Apps on Android and iOS Simulators/Emulators</H1>

      <H2>React Native CLI</H2>

      <H3>Android Emulator</H3>
      <H4>Prerequisites:</H4>
      <BulletList
        items={[
          'Install Android Studio (includes Android Emulator and SDK).',
          'Set up the Android Virtual Device (AVD) using Android Studio.',
        ]}
      />

      <H4>Steps:</H4>
      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        1. Install Android Studio
      </P>
      <BulletList
        items={[
          <>
            Download Android Studio{' '}
            <Text
              style={{ color: '#4EA1F4', textDecorationLine: 'underline' }}
              onPress={() => Linking.openURL('https://developer.android.com/studio')}
            >
              here
            </Text>.
          </>,
          'Make sure the Android Emulator and SDK are included during installation.',
        ]}
      />

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        2. Set up the Android Emulator
      </P>
      <BulletList
        items={[
          'Open Android Studio.',
          'Go to Tools > AVD Manager.',
          'Click Create Virtual Device.',
          'Choose a device (e.g., Pixel 3) and follow the steps to create the emulator.',
        ]}
      />

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        3. Start the Android Emulator
      </P>
      <BulletList
        items={[
          'Launch the emulator from AVD Manager or directly from Android Studio.',
        ]}
      />

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        4. Run your React Native App
      </P>
      <BulletList
        items={[
          'Open a terminal in your project directory.',
          'Run the following command to start the app on the emulator:',
        ]}
      />
      <CodeBlock>
        npx react-native run-android
      </CodeBlock>
      <Divider/>

      <H3>iOS Simulator</H3>
      <H4>Prerequisites:</H4>
      <BulletList
        items={[
          'Install Xcode (for macOS users) via the Mac App Store.',
          'Set up the iOS Simulator using Xcode.',
        ]}
      />

      <H4>Steps:</H4>
      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        1. Install Xcode
      </P>
      <BulletList
        items={[
          'Download and install Xcode from the Mac App Store.',
        ]}
      />

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        2. Set up iOS Simulator
      </P>
      <BulletList
        items={[
          'Open Xcode.',
          'Go to Xcode > Preferences > Components.',
          'Download an iOS Simulator (if it isn’t already installed).',
        ]}
      />

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        3. Start the iOS Simulator
      </P>
      <BulletList
        items={[
          'Open Xcode and navigate to Xcode > Open Developer Tool > Simulator.',
        ]}
      />

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>
        4. Run your React Native App
      </P>
      <BulletList
        items={[
          'Open a terminal in your project directory.',
          'Run the following command to start the app on the iOS simulator:',
        ]}
      />
      <CodeBlock>
        npx react-native run-ios
      </CodeBlock>
      <Divider/>

      <H2>Expo</H2>

      <H3>Android</H3>
      <P>
        If you're using <Text style={{ fontWeight: 'bold' }}>Expo</Text>, setting up an Android emulator is not necessary as Expo runs directly on your physical device or using the <Text style={{ fontWeight: 'bold' }}>Expo Go</Text> app.
      </P>

      <H4>Steps:</H4>

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>1. Install Expo Go</P>
      <BulletList
        items={[
          <Text>
            Download Expo Go from the{' '}
            <Text
              style={{ color: '#4EA1F4', textDecorationLine: 'underline' }}
              onPress={() =>
                Linking.openURL(
                  'https://play.google.com/store/apps/details?id=host.exp.exponent'
                )
              }
            >
              Google Play Store
            </Text>.
          </Text>,
        ]}
      />

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>2. Run Expo App</P>
      <BulletList
        items={[
          <Text>
            <Text style={{ fontStyle: 'italic' }}>
              In the terminal, inside your project folder
            </Text>
            , run:
          </Text>,
        ]}
      />

      <CodeBlock>npm start</CodeBlock>

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>3. Scan QR Code</P>
      <BulletList
        items={[
          'The Metro Bundler will open in the browser.',
          'Scan the QR code shown in the browser using the Expo Go app on your Android device.',
        ]}
      />

      <P style={{ fontWeight: 'bold', marginTop: 8 }}>
        Expo will automatically open the app on your device without needing an emulator.
      </P>
      <Divider/>

      <H3>iOS Simulator</H3>
      <P>
        For <Text style={{ fontWeight: 'bold' }}>iOS with Expo</Text>, you can use the{' '}
        <Text style={{ fontWeight: 'bold' }}>Expo Go</Text> app or run it directly on the{' '}
        <Text style={{ fontWeight: 'bold' }}>iOS simulator</Text>.
      </P>

      <H4>Steps:</H4>

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>1. Install Expo Go</P>
      <BulletList
        items={['Download Expo Go from the App Store.']}
      />

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>2. Run Expo App</P>
      <BulletList
        items={[
          <Text>
            <Text style={{ fontStyle: 'italic' }}>
              In the terminal, inside your project folder
            </Text>, run:
          </Text>,
        ]}
      />
      <CodeBlock>npm start</CodeBlock>

      <P style={{ fontWeight: '600', marginTop: 16, marginBottom: 8 }}>3. Scan QR Code</P>
      <BulletList
        items={[
          'The Metro Bundler will open in the browser.',
          'Scan the QR code shown in the browser using Expo Go on your iOS device.',
        ]}
      />

      <P style={{ marginTop: 16 }}>
        Alternatively, if you're on <Text style={{ fontWeight: 'bold' }}>macOS</Text>, you can run the
        app on the <Text style={{ fontWeight: 'bold' }}>iOS simulator</Text>:
      </P>
      <CodeBlock>npm run ios</CodeBlock>

      <P>This will launch the iOS simulator and your app.</P>
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
  }
});
