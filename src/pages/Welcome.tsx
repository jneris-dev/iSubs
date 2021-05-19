import React, { useEffect, useState } from 'react';
import {
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    View,
    Alert,
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {
    const navegation = useNavigation();
    const [userEmail, setUserEmail] = useState<string>();
    const [userPass, setUserPass] = useState<string>();

    useEffect(() => {
        async function loadStorageUserEmail() {
            const email = await AsyncStorage.getItem('@isubs:email');
            setUserEmail(email || '');
        }

        loadStorageUserEmail();
    }, []);

    useEffect(() => {
        async function loadStorageUserPass() {
            const pass = await AsyncStorage.getItem('@isubs:password');
            setUserPass(pass || '');
        }

        loadStorageUserPass();
    }, []);

    async function handleLogin() {
        if (!userEmail && !userPass)
            return Alert.alert('Usuário não cadastrado');
        try {
            navegation.navigate('Home');
        } catch {
            return Alert.alert('Não foi possivel acessar.');
        }
    }

    function handleRegister() {
        navegation.navigate('Register');
    }

    return (
        <SafeAreaView style={styles.container}>
            <SvgFromUri
                uri={"https://jneris.com.br/api/src/assets/iSubs/wallet.svg"}
                style={styles.image}
            />
            <Text style={styles.title}>
                Controle suas{'\n'}
                Assinaturas Online
            </Text>
            <Text style={styles.subtitle}>
                Consute os gastos de suas assinaturas para não ter surpresas no pagamento.
            </Text>
            <View style={styles.buttonArea}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                    activeOpacity={0.7}
                >
                    <AntDesign
                        name="arrowright"
                        style={styles.buttonIcon}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.newUser} onPress={handleRegister}>
                É novo por aqui? Crie uma conta.
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    image: {
        width: '100%',
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontFamily: fonts.heading,
        textAlign: 'center',
        lineHeight: 38,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: fonts.text,
        color: colors.placeholder,
        textAlign: 'center',
        fontSize: 15
    },
    buttonArea: {
        width: 'auto',
        borderRadius: 40,
        padding: 2,
        borderWidth: 1,
        borderColor: colors.red,
        marginTop: 20,
    },
    button: {
        backgroundColor: colors.red,
        borderRadius: 40,
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonIcon: {
        fontSize: 26,
        color: colors.white,
    },
    newUser: {
        fontFamily: fonts.text,
        fontSize: 13,
        color: colors.heading,
        marginTop: 20,
    }
})