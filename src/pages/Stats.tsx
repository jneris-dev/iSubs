import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export function Stats() {
    return (
        <View style={styles.container}>
            <Text>Stats Screen</Text>
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