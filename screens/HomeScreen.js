// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Load posts from Firebase later
    setPosts([
      { id: '1', content: 'مرحباً بك في W' },
      { id: '2', content: 'Welcome to W!' },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>W</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.post}>{item.content}</Text>}
      />
      <View style={styles.buttons}>
        <Button title="New Post" onPress={() => navigation.navigate('NewPost')} />
        <Button title="Chat" onPress={() => navigation.navigate('Chat')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  post: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 5,
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
