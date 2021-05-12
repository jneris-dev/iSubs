import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { Icon } from 'react-native-eva-icons';
import { useNavigation } from '@react-navigation/core';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function NewSub() {
    const navegation = useNavigation();

    function handleHome() {
        navegation.navigate('Home');
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <KeyboardAvoidingView
                    style={styles.content}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.wrap}>
                            <Text style={styles.heading}>Selecione uma assinatura</Text>
                            <View style={styles.selectSig}>
                                <View>
                                    <SvgFromUri
                                        uri={`https://jneris.com.br/api/src/assets/iSubs/signatures/prime-videos.svg`}
                                        style={styles.imageSig}
                                    />
                                </View>
                                <View style={{ marginLeft: 22 }}>
                                    <Text style={styles.titleSig}>Prime Vídeos</Text>
                                    <Text style={styles.subtitleSig}>Entretenimento</Text>
                                </View>
                                <View style={{ marginLeft: 'auto' }}>
                                    <Text style={styles.iconSig}>
                                        <Icon name='arrow-ios-downward-outline' fill={colors.heading} style={styles.iconSig} />
                                    </Text>
                                </View>
                            </View>
                            <Text style={styles.headingInfos}>Selecione uma assinatura</Text>
                            <Text style={styles.label}>Valor</Text>
                            <TextInput style={styles.input} />
                            <Text style={styles.label}>Plano</Text>
                            <TextInput style={styles.input} />
                            <Text style={styles.label}>Ciclo</Text>
                            <TextInput style={styles.input} />
                            <Text style={styles.label}>Lembre-me</Text>
                            <TextInput style={styles.input} />
                            <TouchableOpacity
                                style={styles.button}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.buttonLabel}>Adicionar</Text>
                            </TouchableOpacity>
                            <Text style={styles.finish} onPress={handleHome}>
                                Finalizar Cadastro
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background_light,
        paddingHorizontal: 30,
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
    },
    wrap: {
        flex: 1,
        paddingVertical: 35
    },
    heading: {
        fontFamily: fonts.heading,
        fontSize: 13,
        color: colors.heading,
        textAlign: 'center',
    },
    selectSig: {
        width: '100%',
        borderRadius: 5,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 13,
        marginTop: 12,
        marginBottom: 27,
    },
    imageSig: {
        width: 55,
        height: 45,
    },
    titleSig: {
        fontFamily: fonts.heading,
        fontSize: 14,
        color: colors.heading,
        textTransform: 'capitalize',
    },
    subtitleSig: {
        fontFamily: fonts.text,
        fontSize: 12,
        color: colors.placeholder,
    },
    iconSig: {
        width: 20,
        height: 16,
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
    wrapInfos: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    headingInfos: {
        fontFamily: fonts.heading,
        fontSize: 13,
        color: colors.heading,
        textAlign: 'center',
        marginBottom: 13
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
    finish: {
        fontFamily: fonts.text,
        fontSize: 13,
        color: colors.heading,
        marginTop: 20,
        textAlign: 'center',
    }
})