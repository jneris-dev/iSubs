import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { Icon } from 'react-native-eva-icons';
import Gravatar from '@krosben/react-native-gravatar';

import colors from '../styles/colors';

export function Header() {
    return (
        <View style={styles.constainer}>
            <Icon name='options-2-outline' fill={colors.heading} style={styles.icon} />
            <Gravatar email="site@jneris.com.br" size={80} defaultImage="identicon" />
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        width: '100%',
    },
    icon: {
        width: 25,
        height: 25,
    }
})