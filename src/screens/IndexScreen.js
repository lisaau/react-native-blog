import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(BlogContext);

  useEffect(() => {
    getBlogPosts();

    // getBlogPosts when we go to IndexScreen
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });

    // return if instance of IndexScreen goes away. Turn off any listeners we created
    return () => {
      listener.remove();
    }
  }, [])

  return <View>
    <TouchableOpacity onPress={() => navigation.navigate('Create')}>
      <View style={styles.addPost}>
        <Text style={{padding: 5}}>Add New Post</Text>
        <Feather name="plus" style={styles.icon} />
      </View>
    </TouchableOpacity>

    <FlatList
      data={state}
      keyExtractor={blogPost => blogPost.id.toString()}
      renderItem={ ({ item }) => {
        return <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
          <View style={styles.row}>
            <Text style={styles.title}>{item.title} (id: {item.id})</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Feather name='trash' style={styles.icon} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      }}
    />
  </View>
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  },
  addPost: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
    borderWidth: 1
  }
});

export default IndexScreen;
