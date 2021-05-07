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
import Gravatar from '@krosben/react-native-gravatar';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Login() {
    const navegation = useNavigation();

    function handleHome() {
        navegation.navigate('Home');
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
                        <View style={styles.content}>
                            <Gravatar email="site@jneris.com.br" size={250} defaultImage="identicon" />
                        </View>
                        <View style={styles.boxForm}>
                            <Text style={styles.title}>
                                Acessar
                            </Text>
                            <Text style={styles.label}>Nome de Usuário</Text>
                            <TextInput
                                style={[styles.input, { backgroundColor: "#E5E5E5", color: "#A8AAAB" }]}
                                editable={false}
                                value="jneris"
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
                                onPress={handleHome}
                            >
                                <Text style={styles.buttonLabel}>Acessar</Text>
                            </TouchableOpacity>
                            <Text style={styles.forgotPass}>
                                É novo por aqui? Crie uma conta.
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
    arrowIcon: {
        marginTop: 20,
        paddingHorizontal: 20,
        fontSize: 30,
        color: colors.placeholder,
    },
    profileImage: {
        width: 120,
        height: 120,
        marginTop: 30
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