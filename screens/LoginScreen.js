// screens/LoginScreen.js
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const navigation = useNavigation();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: 'YOUR_ANDROID_CLIENT_ID_HERE',
    iosClientId: 'YOUR_IOS_CLIENT_ID_HERE',
    expoClientId: 'YOUR_EXPO_CLIENT_ID_HERE',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      navigation.replace('Home');
    }
  }, [response]);

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.bg}>
      <View style={styles.container}>
        <Text style={styles.title}>W</Text>
        <Button title="Login with Google" onPress={() => promptAsync()} disabled={!request} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 48,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
});
