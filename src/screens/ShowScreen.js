import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find( blogPost => blogPost.id === navigation.getParam('id'))

    return (
        <View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id')})}
            >
                <View style={styles.editPost}>
                    <Text style={{padding: 5}}>Edit Post</Text>
                    <EvilIcons name="pencil" style={styles.icon} />
                </View>
            </TouchableOpacity>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        fontSize: 35
    },
    editPost: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
        borderWidth: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20,
        alignSelf: 'center'
    },
    content: {
        margin: 10 
    }
});

export default ShowScreen;