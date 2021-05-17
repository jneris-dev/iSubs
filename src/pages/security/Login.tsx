import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
    SafeAreaView,
    Alert,
} from 'react-native';
import Gravatar from '@krosben/react-native-gravatar';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Icon } from 'react-native-eva-icons';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Header } from '../../components/Header';

export function Login() {
    const navegation = useNavigation();
    const [userEmail, setUserEmail] = useState<string>();
    const [userPass, setUserPass] = useState<string>();
    const [visible, setVisibility] = useState(false);

    const icon = !visible ? 'eye' : 'eye-off';

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

    function handleRegister() {
        navegation.navigate('Register');
    }

    async function handleLogin() {
        if (!userEmail && !userPass)
            return Alert.alert('Usuário não cadastrado');
        try {
            navegation.navigate('Home');
        } catch {
            return Alert.alert('Não foi possivel acessar.');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Header title="Login" />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.content}>
                            <Gravatar
                                email={!userEmail ? 'email@email.com' : `${userEmail}`}
                                size={250}
                                defaultImage="retro"
                                style={{ borderRadius: 125 }}
                            />
                        </View>
                        <View style={styles.boxForm}>
                            <Text style={styles.title}>
                                Acessar
                            </Text>
                            <Text style={styles.label}>E-mail</Text>
                            <TextInput
                                style={[styles.input,
                                (!userEmail) && { backgroundColor: '#E5E5E5', color: '#A8AAAB' }
                                ]}
                                value={!userEmail ? 'e-mail não identificado' : userEmail}
                                editable={false}
                            />
                            <Text style={styles.label}>Senha</Text>
                            <View>
                                <TextInput
                                    style={[styles.input, { justifyContent: 'flex-end' },
                                    (!userPass) && { backgroundColor: '#E5E5E5', color: '#A8AAAB' }
                                    ]}
                                    value={!userPass ? 'senha não identificada' : userPass}
                                    editable={false}
                                    secureTextEntry={!userPass ? visible : !visible}
                                    autoCorrect={false}
                                />
                                <TouchableOpacity
                                    onPress={() => setVisibility(!visible)}
                                    style={styles.eyeButton}
                                >
                                    <Icon
                                        name={icon}
                                        fill={colors.red}
                                        width={15}
                                        height={15}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                activeOpacity={0.7}
                                onPress={handleLogin}
                            >
                                <Text style={styles.buttonLabel}>Acessar</Text>
                            </TouchableOpacity>
                            <Text style={styles.forgotPass} onPress={handleRegister}>
                                Não possui uma conta? Crie Agora
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxForm: {
        backgroundColor: colors.background_light,
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 30,
        paddingVertical: 30,
    },
    title: {
        fontFamily: fonts.heading,
        color: colors.heading,
        fontSize: 32,
        textAlign: 'center',
        marginBottom: 25,
    },
    label: {
        fontFamily: fonts.text,
        fontSize: 10,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 5,
        backgroundColor: colors.white,
        color: colors.heading,
        width: '100%',
        alignItems: 'center',
        height: 49,
        fontSize: 15,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    eyeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        borderRadius: 5,
        height: 49,
    },
    eyeIcon: {
        fontSize: 15,
        color: colors.red
    },
    button: {
        width: '100%',
        height: 54,
        borderRadius: 28,
        backgroundColor: colors.red,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLabel: {
        color: colors.white,
        fontFamily: fonts.text,
        fontSize: 17,
        textAlign: 'center',
    },
    forgotPass: {
        fontFamily: fonts.text,
        fontSize: 13,
        color: colors.heading,
        marginTop: 20,
        textAlign: 'center',
    }
})