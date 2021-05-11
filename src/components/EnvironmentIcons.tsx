import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';

interface EnviromentProps extends RectButtonProps {
    id: string;
    icon: string;
}

export function EnviromentIcons({
    id,
    icon,
    ...rest
}: EnviromentProps) {
    return (
        <SvgFromUri
            uri={`https://jneris.com.br/api/src/assets/iSubs/signatures/${icon}.svg`}
            style={styles.mySubsIcon}
        />
    )
}

const styles = StyleSheet.create({
    mySubsIcon: {
        maxWidth: 30,
        maxHeight: 30,
        marginLeft: -10,
    },
})

