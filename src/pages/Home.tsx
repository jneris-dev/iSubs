import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CardSignature } from '../components/CardSignature';
import { EnviromentIcons } from '../components/EnvironmentIcons';

import { Header } from '../components/Header';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Home() {
    const navegation = useNavigation();

    function handleSubSingle() {
        navegation.navigate('SubSingle');
    }
    return (
        <SafeAreaView style={styles.constainer}>
            <Header title="Home" />
            <View style={styles.wrapContent}>
                <View style={styles.boxTotal}>
                    <View style={styles.iconTotalBox}>
                        <Text style={styles.iconTotal}>😁</Text>
                    </View>
                    <View>
                        <Text style={styles.priceTotal}>R$ 80,70</Text>
                        <Text style={styles.descTotal}>Total gasto total p/ Mês</Text>
                    </View>
                    <Icon name='more-vertical' fill={colors.heading} style={styles.icon} />
                </View>
                <View style={styles.mySubs}>
                    <Text style={styles.mySubsText}>Suas assinaturas:</Text>
                    <View style={styles.mySubsWrapIcons}>
                        <EnviromentIcons
                            id="1"
                            icon="spotify"
                        />
                        <EnviromentIcons
                            id="2"
                            icon="netflix"
                        />
                        <EnviromentIcons
                            id="3"
                            icon="crunchyroll"
                        />
                    </View>
                </View>
                <View style={styles.wrapCards}>
                    <TouchableOpacity
                        onPress={handleSubSingle}
                        activeOpacity={1}
                    >
                        <CardSignature
                            id="1"
                            title="spotify"
                            slug="spotify"
                            date="Mai 08, 03:00 pm"
                            price="R$19,90"
                            cicle="mensal"
                        />
                    </TouchableOpacity>
                    <CardSignature
                        id="2"
                        title="netflix"
                        slug="netflix"
                        date="Mai 25, 11:00 am"
                        price="R$32,90"
                        cicle="mensal"
                    />
                    <CardSignature
                        id="3"
                        title="crunchyroll"
                        slug="crunchyroll"
                        date="Jan 03, 01:00 pm"
                        price="R$315,00"
                        cicle="anual"
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background_light,
    },
    wrapContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
        marginTop: 30
    },
    boxTotal: {
        backgroundColor: colors.white,
        borderRadius: 5,
        padding: 15,
        height: 90,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    iconTotalBox: {
        width: 45,
        height: 45,
        borderRadius: 30,
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconTotal: {
        fontSize: 20
    },
    priceTotal: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.green
    },
    descTotal: {
        fontSize: 13,
        fontFamily: fonts.text,
        color: colors.placeholder
    },
    mySubs: {
        marginTop: 30,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    mySubsText: {
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 15
    },
    mySubsWrapIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mySubsIcon: {
        maxWidth: 30,
        maxHeight: 30,
        marginLeft: -10,
    },
    icon: {
        width: 20,
        height: 25
    },
    wrapCards: {
        width: '100%',
        marginTop: 35
    }
})