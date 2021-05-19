import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { Icon } from 'react-native-eva-icons';
import Gravatar from '@krosben/react-native-gravatar';
import { useNavigation } from '@react-navigation/native';
import { RectButtonProps } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface HeaderProps extends RectButtonProps {
    title: string;
}

export function Header({
    title,
    ...rest
}: HeaderProps) {
    const navegation = useNavigation();
    const [userName, setUserName] = useState<string>();
    const [userEmail, setUserEmail] = useState<string>();

    const gravatarImg = `${userEmail}`;

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@isubs:user');
            setUserName(user || '');
        }

        loadStorageUserName();
    }, []);

    useEffect(() => {
        async function loadStorageUserEmail() {
            const email = await AsyncStorage.getItem('@isubs:email');
            setUserEmail(email || '');
        }

        loadStorageUserEmail();
    }, []);

    return (
        <View style={styles.constainer}>
            {title != 'Home'
                ? <Icon
                    name='chevron-left-outline'
                    fill={colors.heading}
                    style={styles.icon}
                    onPress={() => navegation.goBack()}
                /> : <View>
                    <Text style={styles.titleUser}>Olá,</Text>
                    <Text style={styles.subtitleUser}>{userName}</Text>
                </View>
            }
            {title != 'Home' && title != 'Login' && title != 'Register'
                ? <Text style={styles.title}>{title}</Text> : null}
            {title != 'Login' && title != 'Register' && title != 'Configurações'
                ? <Gravatar
                    email={!userEmail ? 'email@email.com' : `${userEmail}`}
                    size={70}
                    defaultImage="retro"
                /> : <View style={styles.icon} />}
        </View>
    )
}

const styles = StyleSheet.create({
    constainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginTop: 20,
        width: '100%',
    },
    title: {
        fontFamily: fonts.heading,
        color: colors.heading,
        fontSize: 13,
        textAlign: 'center'
    },
    titleUser: {
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 13,
    },
    subtitleUser: {
        fontFamily: fonts.heading,
        color: colors.heading,
        fontSize: 20,
    },
    icon: {
        width: 30,
        height: 30,
    }
})