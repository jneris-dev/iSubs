import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface CategoryProps extends RectButtonProps {
    id: string;
    title: string;
    currency: string;
    price: string;
    count: string;
    rate: string;
    category: string;
}

export function CategoryStats({
    id,
    title,
    currency,
    price,
    count,
    rate,
    category,
    ...rest
}: CategoryProps) {
    return (
        <View style={styles.category}>
            <View style={styles.categoryText}>
                <Text style={[
                    styles.categoryTitleBullet,
                    (category == 'games') &&
                    { color: colors.games },
                    (category == 'productivity') &&
                    { color: colors.productivity },
                    (category == 'training') &&
                    { color: colors.training },
                    (category == 'music') &&
                    { color: colors.music }
                ]}>
                    ●
                </Text>
                <Text style={styles.categoryTitle}>
                    {title}
                </Text>
                <Text style={styles.categorySubtitle}>
                    {currency}{price} - {count} ass.
                </Text>
            </View>
            <View style={styles.categoryBar}>
                <View style={[
                    styles.categoryBarValue,
                    { width: `${rate}` },
                    (category == 'games') &&
                    { backgroundColor: colors.games },
                    (category == 'productivity') &&
                    { backgroundColor: colors.productivity },
                    (category == 'training') &&
                    { backgroundColor: colors.training },
                    (category == 'music') &&
                    { backgroundColor: colors.music }
                ]}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    categoryText: {
        position: 'relative',
    },
    categoryTitle: {
        fontFamily: fonts.text,
        fontSize: 15,
        color: colors.heading,
        paddingLeft: 15,
    },
    categoryTitleBullet: {
        position: 'absolute',
        left: 0,
    },
    categorySubtitle: {
        fontFamily: fonts.text,
        fontSize: 10,
        color: colors.placeholder,
        paddingLeft: 15,
    },
    categoryBar: {
        position: 'relative',
        width: 100,
        height: 5,
        backgroundColor: '#E9E9E9',
        marginVertical: 20,
        borderRadius: 5
    },
    categoryBarValue: {
        position: 'absolute',
        height: 5,
        right: 0,
        borderRadius: 100,
    },
})