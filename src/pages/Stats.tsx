import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { CategoryStats } from '../components/CategoryStats';
import { Header } from '../components/Header';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Stats() {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Estatísticas" />
            <SvgFromUri
                uri={"https://jneris.com.br/api/src/assets/iSubs/stats.svg"}
                style={styles.image}
            />
            <View style={styles.boxInfos}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.boxAllMoney}>
                        <Text style={styles.titleAllMoney}>Histórico de Gasto</Text>
                        <Text style={styles.cashAllMoney}>R$ 285,50</Text>
                    </View>
                    <View style={styles.categories}>
                        <CategoryStats
                            id="1"
                            title="Entretenimento"
                            currency="R$"
                            price="223"
                            count="6"
                            rate="60%"
                            category="training"
                        />
                        <CategoryStats
                            id="2"
                            title="Produtividade"
                            currency="R$"
                            price="97"
                            count="2"
                            rate="20%"
                            category="productivity"
                        />
                        <CategoryStats
                            id="3"
                            title="Jogos"
                            currency="R$"
                            price="187"
                            count="4"
                            rate="40%"
                            category="games"
                        />
                        <CategoryStats
                            id="4"
                            title="Música e áudio"
                            currency="R$"
                            price="19"
                            count="1"
                            rate="10%"
                            category="music"
                        />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    image: {
        width: '100%',
        marginBottom: 20,
        marginTop: 24
    },
    boxInfos: {
        backgroundColor: colors.background_light,
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 30,
        paddingHorizontal: 30,
        marginTop: 15,
        flex: 1,
    },
    boxAllMoney: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        paddingVertical: 11,
        borderRadius: 5,
        marginBottom: 29
    },
    titleAllMoney: {
        fontFamily: fonts.text,
        fontSize: 10,
        color: colors.placeholder,
        marginBottom: 3
    },
    cashAllMoney: {
        fontFamily: fonts.heading,
        fontSize: 20,
        color: colors.heading,
    },
    categories: {
        flex: 1,
        width: '100%',
    },
})