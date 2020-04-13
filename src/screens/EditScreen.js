import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from '../context/BlogContext';
import { TextInput } from "react-native-gesture-handler";


const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find( blogPost => blogPost.id === navigation.getParam('id'));

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <Text>Edit Title:</Text>
            <TextInput value={title} onChangeText={ newTitle => setTitle(newTitle) } />
        </View>
    );
};

const styles = StyleSheet.create({});

export default EditScreen;