import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Header } from '../components/Header';

export function SubSingle() {

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Spotify" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ justifyContent: 'flex-end' }}
            >
                <View style={styles.content}>
                    <View style={styles.wrapTop}>
                        <SvgFromUri
                            uri={"https://jneris.com.br/api/src/assets/iSubs/signatures/spotify.svg"}
                            width={100}
                            height={100}
                        />
                        <Text style={styles.title}>Spotify</Text>
                        <Text style={styles.description}>Música para todos os gostos e de todas as partes do mundo, podcasts e listas personalizadas, tudo com o Spotify, onde você estiver.</Text>
                    </View>
                    <View style={styles.boxInfos}>
                        <Text style={styles.subtitleInfos}>Nível de gasto</Text>
                        <View style={styles.rangeBar}>
                            <View style={[styles.rangeBarValue,
                            { width: '19%', backgroundColor: colors.green, }]}></View>
                        </View>
                        <View style={styles.baseInfos}>
                            <Text style={styles.labelInfos}>Plano</Text>
                            <Text style={styles.valueInfos}>Premium</Text>
                        </View>
                        <View style={styles.baseInfos}>
                            <Text style={styles.labelInfos}>Valor</Text>
                            <Text style={styles.valueInfos}>R$ 19,90</Text>
                        </View>
                        <View style={styles.baseInfos}>
                            <Text style={styles.labelInfos}>Ciclo</Text>
                            <Text style={styles.valueInfos}>Mensal</Text>
                        </View>
                        <View style={styles.baseInfos}>
                            <Text style={styles.labelInfos}>Categoria</Text>
                            <Text style={styles.valueInfos}>Música e áudio</Text>
                        </View>
                        <View style={styles.baseInfos}>
                            <Text style={styles.labelInfos}>Aviso</Text>
                            <Text style={styles.valueInfos}>Mai 08, 03:00 pm</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.white,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
    },
    wrapTop: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        marginTop: 30
    },
    title: {
        fontFamily: fonts.heading,
        fontSize: 24,
        textAlign: 'center',
        marginTop: 17
    },
    description: {
        fontFamily: fonts.text,
        fontSize: 13,
        color: colors.placeholder,
        textAlign: 'justify',
        marginTop: 20
    },
    boxInfos: {
        backgroundColor: colors.background_light,
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 30,
        marginTop: 27,
        flex: 1,
    },
    subtitleInfos: {
        fontFamily: fonts.heading,
        fontSize: 14,
        textAlign: 'center',
        color: colors.heading,
    },
    rangeBar: {
        position: 'relative',
        width: '100%',
        height: 5,
        backgroundColor: '#E9E9E9',
        marginVertical: 20,
        borderRadius: 5
    },
    rangeBarValue: {
        position: 'absolute',
        height: 5,
        left: 0,
        borderRadius: 5
    },
    baseInfos: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E9E9E9',
    },
    labelInfos: {
        fontFamily: fonts.heading,
        fontSize: 13,
        color: colors.heading,
    },
    valueInfos: {
        fontFamily: fonts.text,
        fontSize: 13,
        textAlign: 'right',
        color: colors.placeholder,
    }
})