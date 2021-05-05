import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export function Register() {
    return (
        <View style={styles.container}>
            <Text>Register Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})