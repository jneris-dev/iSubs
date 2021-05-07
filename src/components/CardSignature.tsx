import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface CardProps extends RectButtonProps {
    title: string;
    date: string;
    price: string;
    cicle: string;
}

export function CardSignature({
    title,
    date,
    price,
    cicle,
    ...rest
}: CardProps) {
    return (
        <View style={styles.container}>
            <View>
                <SvgFromUri
                    uri={`https://jneris.com.br/api/src/assets/iSubs/signatures/${title}.svg`}
                    style={styles.image}
                />
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{date}</Text>
            </View>
            <View>
                <Text style={[styles.title, { textAlign: 'right' }]}>{price}</Text>
                <Text style={[styles.subtitle, { textAlign: 'right' }]}>/{cicle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 5,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        marginBottom: 23,
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 16,
        color: colors.heading,
        textTransform: 'capitalize',
    },
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 12,
        color: colors.placeholder,
    },
    image: {
        width: 55,
        height: 45,
    },
    price: {
        textAlign: 'right',
    }
})