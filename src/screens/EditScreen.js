import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons'

const EditScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Edit Screen {navigation.getParam('id')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default EditScreen;