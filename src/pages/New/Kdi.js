import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Image,
    Animated,
} from 'react-native';
import { MyButton, MyGap } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';


const MyList = ({ nomor, l, v, textAlign = 'left' }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.white,
            borderBottomWidth: nomor == '4.2' ? 0 : 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderTopWidth: nomor == 'No' ? 1 : 0,
        }}>
            <Text style={{
                flex: 0.5,
                marginTop: 1,
                marginLeft: 1,
                padding: 4,
                textAlign: textAlign,
                fontFamily: fonts.secondary[400],
                fontSize: MyDimensi / 2.2,
                color: colors.black,
                backgroundColor: colors.white,

            }}>{nomor}</Text>
            <Text style={{
                flex: 1,
                marginTop: 1,
                marginLeft: 1,
                padding: 4,
                textAlign: textAlign,
                fontFamily: fonts.secondary[400],
                fontSize: MyDimensi / 2.2,
                color: colors.black,
                backgroundColor: colors.white
            }}>{l}</Text>
            <Text style={{
                // borderTopWidth: nomor == '' ? 1 : 0,
                // borderLeftWidth: 1,
                flex: 1,
                marginTop: 1,
                marginLeft: 1,
                marginRight: 1,
                padding: 4,
                textAlign: textAlign,
                fontFamily: fonts.secondary[400],
                fontSize: MyDimensi / 2.2,
                color: colors.black,
                backgroundColor: colors.white

            }}>{v}</Text>
        </View>
    )
}
export default function Kdi({ navigation }) {



    // useEffect(() => {
    //   setTimeout(() => {
    //     getData('user').then(res => {
    //       if (!res) {
    //         navigation.replace('Login')
    //       } else {
    //         navigation.replace('Home')
    //       }
    //     })
    //   }, 1500)
    // }, []);

    useEffect(() => {
        setTimeout(() => {
            //   navigation.replace('Kdi')
        }, 1500)
    }, []);



    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.white,
            }}>
            <View style={{
                flex: 1,
                justifyContent: 'center'
            }}>



                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: MyDimensi / 1.4,
                    color: colors.black,
                    textAlign: 'center'
                }}>Kompetensi Dasar dan Indikator</Text>

                <View style={{
                    padding: 20,
                }}>
                    <MyList nomor="No" l="Kompetensi Dasar" v="Indikator" />
                    <MyList nomor="3.2" l="Memahami arti gambar pada lambang negara “Garuda Pancasila”" v="1.2.1. Mengidentifikasi tempat terpasang  lambang negara Garuda Pancasila   dengan benar" />
                    <MyList nomor="4.2" l="Menceritakan arti gambar pada lambang negara" v="3.2.1. Menceritakan gambar dan simbol apa saja yang terdapat pada lambang negara “Garuda  Pancasila” dengan benar" />
                    <MyList nomor="" l="" v="4.2.1. Mengidentifikasi bagian-bagian dari lambang negara Garuda Pancasila" />
                    <MyGap jarak={20} />
                    <MyButton warna={colors.primary} title="Selanjutnya" onPress={() => navigation.navigate('Video')} />
                </View>




            </View>




        </View>
    );
}

const styles = StyleSheet.create({});
