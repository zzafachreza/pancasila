import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    Image,
    ScrollView,
    ImageBackground,
    Dimensions,
    Switch,
    SafeAreaView,
    ActivityIndicator,
    Alert,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import { MyInput, MyGap, MyButton, MyPicker } from '../../components';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { apiURL, api_token, MYAPP } from '../../utils/localStorage';

export default function Register({ navigation }) {



    return (
        <ImageBackground
            style={{
                flex: 1,
                backgroundColor: colors.white,
                padding: 10,
            }}>

            {/* <Switch onValueChange={toggleSwitch} value={isEnabled} /> */}
            <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
                <Text style={{
                    textAlign: 'center',
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 20,
                    marginBottom: 10,
                }}>Petunjuk Penggunaan</Text>

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 5
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>1. </Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>Selesaikan game puzzle dengan benar</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 5
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>2. </Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>Kalau belum bisa menyelesaikan puzzle..maka belum bisa mengerjakan soaal make and match</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 5
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>3. </Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>Lanjut menjawab soal dengan benar dengan menghubungkan simbol dan sila pancasila.                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 5
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>4. </Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>Skormu akan ditampilkan di akhir</Text>
                </View>




                {loading && <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator color={colors.primary} size="large" />
                </View>}
            </ScrollView>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: 620 / 4,
        height: 160 / 4,
    },
});
