import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context as BlogContext } from '../context/BlogContext'

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);

  return <View>
    <Text style={styles.text}>IndexScreen</Text>
    <Button title='Add Post' onPress={addBlogPost} />
    <FlatList
      data={state}
      keyExtractor={blogPost => blogPost.title}
      renderItem={ ({ item }) => {
        return <Text>{item.title}</Text>
      }}
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default IndexScreen;
