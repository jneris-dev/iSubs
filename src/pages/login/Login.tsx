import React from 'react';
import {
    Image,
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

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function Login() {
    return (
        <SafeAreaView style={styles.main}>
            <KeyboardAvoidingView style={styles.main}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <Image
                            source={require('../../assets/profile.png')}
                            width={150}
                            height={150}
                        />
                    </View>
                    <View style={styles.boxForm}>
                        <Text style={styles.title}>
                            Acessar
                        </Text>
                        <Text style={styles.label}>Nome de Usuário</Text>
                        <TextInput
                            style={[styles.input]}
                        />
                        <Text style={styles.label}>Senha</Text>
                        <TextInput
                            style={[styles.input]}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.buttonLabel}>Acessar</Text>
                        </TouchableOpacity>
                        <Text style={styles.forgotPass}>
                            É novo por aqui? Crie uma conta.
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        width: '100%',
    },
    boxForm: {
        backgroundColor: colors.background_light,
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 30,
        paddingVertical: 25,
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
        paddingHorizontal: 10,
        marginBottom: 20,
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