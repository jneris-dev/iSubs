import React from 'react';
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
} from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { SvgFromUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/core';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Register() {
    const navegation = useNavigation();

    function handleLogin() {
        navegation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <MaterialIcons
                    name="keyboard-arrow-left"
                    style={styles.arrowIcon}
                />
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
                                autoCompleteType="username"
                            />
                            <Text style={styles.label}>E-mail</Text>
                            <TextInput
                                style={styles.input}
                                textContentType="emailAddress"
                                autoCompleteType="email"
                                keyboardType="email-address"
                            />
                            <Text style={styles.label}>Senha</Text>
                            <View>
                                <TextInput
                                    style={[styles.input, { justifyContent: 'flex-end' }]}
                                    secureTextEntry={true}
                                    returnKeyType='go'
                                    autoCorrect={false}
                                    keyboardType="visible-password"
                                />
                                <TouchableOpacity
                                    onPress={() => { }}
                                    style={styles.eyeButton}
                                >
                                    <AntDesign
                                        name="eye"
                                        style={styles.eyeIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                activeOpacity={0.7}
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
    arrowIcon: {
        marginTop: 20,
        paddingHorizontal: 20,
        fontSize: 30,
        color: colors.placeholder,
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