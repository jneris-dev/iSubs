import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export function PrivacyPolicy() {
    return (
        <View style={styles.container}>
            <Text>Privacy Policy Screen</Text>
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