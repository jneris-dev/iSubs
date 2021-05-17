import React, { useState } from 'react';
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
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Icon } from 'react-native-eva-icons';
import { SvgFromUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Header } from '../../components/Header';

export function Register() {
    const navegation = useNavigation();
    const [isFilled, setIsFilled] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [name, setName] = useState<string>();
    const [emailAddress, setEmailAddress] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [visible, setVisibility] = React.useState(false);

    const icon = !visible ? 'eye' : 'eye-off';

    function handleLogin() {
        navegation.navigate('Login');
    }

    async function handleNewSub() {
        if (!name)
            return Alert.alert('Insira todas as informações para proceguir');
        if (!emailAddress)
            return Alert.alert('Insira um endereço de email para proceguir');
        if (!password)
            return Alert.alert('Insira uma senha para proceguir');
        try {
            await AsyncStorage.setItem('@isubs:user', name);
            await AsyncStorage.setItem('@isubs:email', emailAddress);
            await AsyncStorage.setItem('@isubs:password', password);
            navegation.navigate('NewSub');
        } catch {
            return Alert.alert('Não foi possivel criar sua conta.');
        }
    }

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputChangeName(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    function handleInputChangeEmail(value: string) {
        setIsFilled(!!value);
        setEmailAddress(value);
    }

    function handleInputChangePass(value: string) {
        setIsFilled(!!value);
        setPassword(value);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <Header title="Register" />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <SvgFromUri
                            uri={"https://jneris.com.br/api/src/assets/iSubs/bro.svg"}
                            style={styles.image}
                        />
                        <View style={styles.boxForm}>
                            <Text style={styles.title}>
                                Criar Conta
                            </Text>
                            <Text style={styles.label}>Como podemos chamar você?</Text>
                            <TextInput
                                style={styles.input}
                                autoCompleteType="name"
                                onChangeText={handleInputChangeName}
                                onBlur={handleInputBlur}
                            />
                            <Text style={styles.label}>E-mail</Text>
                            <TextInput
                                style={[styles.input, { textTransform: 'lowercase' }]}
                                textContentType="emailAddress"
                                autoCapitalize="none"
                                autoCompleteType="email"
                                keyboardType="email-address"
                                onChangeText={handleInputChangeEmail}
                                onBlur={handleInputBlur}
                            />
                            <Text style={styles.label}>Senha</Text>
                            <View>
                                <TextInput
                                    style={[styles.input, { justifyContent: 'flex-end' }]}
                                    returnKeyType='go'
                                    secureTextEntry={!visible}
                                    autoCorrect={false}
                                    onChangeText={handleInputChangePass}
                                    onBlur={handleInputBlur}
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
                                onPress={handleNewSub}
                            >
                                <Text style={styles.buttonLabel}>Cadastrar</Text>
                            </TouchableOpacity>
                            <Text style={styles.forgotPass} onPress={handleLogin}>
                                Já tenho uma conta. Acessar
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
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    image: {
        width: 178,
        height: 459,
        top: 5,
        position: 'absolute',
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
        marginBottom: 10,
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
        marginTop: 10,
        textAlign: 'center',
    }
})