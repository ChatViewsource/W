// screens/NewPostScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NewPostScreen() {
  const [content, setContent] = useState('');
  const navigation = useNavigation();

  const handlePost = () => {
    // Later: Upload to Firebase
    console.log('Post submitted:', content);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Post</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="اكتب منشورك هنا..."
        onChangeText={setContent}
        value={content}
      />
      <Button title="نشر" onPress={handlePost} disabled={!content.trim()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height: 150,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
});
