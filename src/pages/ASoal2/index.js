import { Image, SafeAreaView, StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts, windowHeight, windowWidth } from '../../utils'
import { MyButton } from '../../components'
import { MYAPP, storeData } from '../../utils/localStorage';

export default function Soal2({ navigation, route }) {

    const [pilih, setPilih] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    });

    const [pilih2, setPilih2] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    });

    const [nilai, setNilai] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    })


    const sendServer = () => {


        if (nilai[2] !== 20) {
            Alert.alert(MYAPP, 'Maaf pilihan kamu masih salah !');
            setDone({
                a1: false,
                a2: false,
                b1: false,
                b2: false,
                c1: false,
                c2: false,
                d1: false,
                d2: false,
                e1: false,
                e2: false,

            })
            setPilih({
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
            });
            setPilih2({
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
            })
            setNilai({
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0
            })
        } else {
            Alert.alert(MYAPP, 'Selamat pilihan kamu benar !');
            storeData('user', {
                nama: route.params.nama,
                absen: route.params.absen,
                kelas: route.params.kelas,
                sekolah: route.params.sekolah,
                1: route.params[1],
                2: 20,
                3: route.params[3],
                4: route.params[4],
                5: route.params[5],

            });
            navigation.goBack();
        }



    }

    const [done, setDone] = useState({
        a1: false,
        a2: false,
        b1: false,
        b2: false,
        c1: false,
        c2: false,
        d1: false,
        d2: false,
        e1: false,
        e2: false,

    })

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            padding: 0,
        }}>

            <View style={{
                flex: 1,
                flexDirection: 'row'


            }}>


                <View style={{
                    paddingHorizontal: 5,
                }}>

                    <Pressable onPress={() => {

                        if (pilih[1] && done.a1) {
                            Alert.alert(MYAPP, 'Kamu sudah memilih ini . . .')
                        } else {
                            setPilih({
                                1: true,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                            });
                            setDone({
                                ...done,
                                a1: true,
                            })
                        }

                    }} style={done.a1 ? styles.tomboldone : pilih[1] ? styles.tombolok : styles.tombol}>

                        <Image source={require('../../assets/p5.png')} style={styles.gambar} />

                    </Pressable >

                    <Pressable onPress={() => {

                        if (pilih[2] && done.b1) {
                            Alert.alert(MYAPP, 'Kamu sudah memilih ini . . .')
                        } else {

                            setPilih({
                                1: false,
                                2: true,
                                3: false,
                                4: false,
                                5: false,
                            })
                            setDone({
                                ...done,
                                b1: true,
                            })

                        }

                    }} style={done.b1 ? styles.tomboldone : pilih[2] ? styles.tombolok : styles.tombol}>
                        <Image source={require('../../assets/p2.png')} style={styles.gambar} />
                    </Pressable >

                    <Pressable onPress={() => {

                        if (pilih[3] && done.c1) {
                            Alert.alert(MYAPP, 'Kamu sudah memilih ini . . .')
                        } else {
                            setPilih({
                                1: false,
                                2: false,
                                3: true,
                                4: false,
                                5: false,
                            })

                            setDone({
                                ...done,
                                c1: true,
                            })
                        }



                    }} style={done.c1 ? styles.tomboldone : pilih[3] ? styles.tombolok : styles.tombol}>
                        <Image source={require('../../assets/p4.png')} style={styles.gambar} />

                    </Pressable >

                    <Pressable onPress={() => {

                        if (pilih[4] && done.d1) {
                            Alert.alert(MYAPP, 'Kamu sudah memilih ini . . .')
                        } else {

                            setPilih({
                                1: false,
                                2: false,
                                3: false,
                                4: true,
                                5: false,
                            })
                            setDone({
                                ...done,
                                d1: true,
                            })
                        }


                    }} style={done.d1 ? styles.tomboldone : pilih[4] ? styles.tombolok : styles.tombol}>
                        <Image source={require('../../assets/p1.png')} style={styles.gambar} />
                    </Pressable >
                    <Pressable onPress={() => {

                        if (pilih[5] && done.e1) {
                            Alert.alert(MYAPP, 'Kamu sudah memilih ini . . .')
                        } else {
                            setPilih({
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: true,
                            })
                            setDone({
                                ...done,
                                e1: true,
                            })


                        }


                    }} style={done.e1 ? styles.tomboldone : pilih[5] ? styles.tombolok : styles.tombol}>
                        <Image source={require('../../assets/p3.png')} style={styles.gambar} />
                    </Pressable >

                </View>
                <View style={{
                    flex: 1,

                }}>
                    <View style={{
                        height: windowHeight,
                        flex: 1,
                    }}>
                        {/* 1x1 */}
                        {pilih[1] && pilih2[1] &&
                            <View style={{
                                top: 60,

                                position: 'absolute',
                                width: 150,
                                left: 0,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '0deg' }],
                            }} />}
                        {/* 1x2 */}
                        {pilih[1] && pilih2[2] &&
                            <View style={{
                                top: 110,
                                left: -15,
                                position: 'absolute',
                                width: 180,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '35deg' }],
                            }} />
                        }
                        {/* 1x3 */}
                        {pilih[1] && pilih2[3] &&
                            <View style={{
                                top: 165,
                                left: -60,
                                position: 'absolute',
                                width: 270,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '55deg' }],
                            }} />
                        }

                        {/* 1x4 */}
                        {pilih[1] && pilih2[4] &&
                            <View style={{
                                top: 220,
                                left: -120,
                                position: 'absolute',
                                width: 370,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '65deg' }],
                            }} />
                        }
                        {/* 1x5 */}
                        {pilih[1] && pilih2[5] &&
                            <View style={{
                                top: 270,
                                left: -145,
                                position: 'absolute',
                                width: 450,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '70deg' }],
                            }} />

                        }



                        {/* 2x1 */}
                        {pilih[2] && pilih2[1] &&
                            <View style={{
                                top: 100,
                                position: 'absolute',
                                width: 160,
                                left: 0,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '140deg' }],
                            }} />}

                        {/* 2x2 */}
                        {pilih[2] && pilih2[2] &&
                            <View style={{
                                top: 170,
                                position: 'absolute',
                                width: 150,
                                left: 0,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '0deg' }],
                            }} />}
                        {/* 2x3 */}
                        {pilih[2] && pilih2[3] &&
                            <View style={{
                                top: 220,
                                position: 'absolute',
                                width: 150,
                                left: 0,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '40deg' }],
                            }} />}

                        {pilih[2] && pilih2[4] &&
                            <View style={{
                                top: 270,
                                position: 'absolute',
                                width: 220,
                                left: -30,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '55deg' }],
                            }} />}

                        {pilih[2] && pilih2[5] &&
                            <View style={{
                                top: 330,
                                position: 'absolute',
                                width: 340,
                                left: -100,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '70deg' }],
                            }} />}


                        {/* 3x1 */}
                        {pilih[3] && pilih2[1] &&
                            <View style={{
                                top: 150,
                                position: 'absolute',
                                width: 270,
                                left: -60,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '120deg' }],
                            }} />}

                        {/* 3x2 */}
                        {pilih[3] && pilih2[2] &&
                            <View style={{
                                top: 210,
                                position: 'absolute',
                                width: 170,
                                left: -10,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '150deg' }],
                            }} />}

                        {/* 3x3 */}
                        {pilih[3] && pilih2[3] &&
                            <View style={{
                                top: 280,
                                position: 'absolute',
                                width: 150,
                                left: 0,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '0deg' }],
                            }} />}

                        {/* 3x3 */}
                        {pilih[3] && pilih2[4] &&
                            <View style={{
                                top: 330,
                                position: 'absolute',
                                width: 150,
                                left: 0,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '45deg' }],
                            }} />}

                        {/* 3x3 */}
                        {pilih[3] && pilih2[5] &&
                            <View style={{
                                top: 380,
                                position: 'absolute',
                                width: 240,
                                left: -40,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '60deg' }],
                            }} />}



                        {/* 4x1 */}
                        {pilih[4] && pilih2[1] &&
                            <View style={{
                                top: 220,
                                position: 'absolute',
                                width: 350,
                                left: -100,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '110deg' }],
                            }} />}

                        {/* 4x2 */}
                        {pilih[4] && pilih2[2] &&
                            <View style={{
                                top: 280,
                                position: 'absolute',
                                width: 250,
                                left: -50,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '120deg' }],
                            }} />}

                        {/* 4x3 */}
                        {pilih[4] && pilih2[3] &&
                            <View style={{
                                top: 330,
                                position: 'absolute',
                                width: 150,
                                left: 0,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '140deg' }],
                            }} />}

                        {/* 4x4 */}
                        {pilih[4] && pilih2[4] &&
                            <View style={{
                                top: 380,
                                position: 'absolute',
                                width: 150,
                                left: 0,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '0deg' }],
                            }} />}

                        {/* 4x5 */}
                        {pilih[4] && pilih2[5] &&
                            <View style={{
                                top: 450,
                                position: 'absolute',
                                width: 150,
                                left: 0,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '40deg' }],
                            }} />}



                        {/* 5x1 */}
                        {pilih[5] && pilih2[1] &&
                            <View style={{
                                top: 280,
                                position: 'absolute',
                                width: 450,
                                left: -150,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '110deg' }],
                            }} />}

                        {/* 5x2 */}
                        {pilih[5] && pilih2[2] &&
                            <View style={{
                                top: 320,
                                position: 'absolute',
                                width: 350,
                                left: -100,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '110deg' }],
                            }} />}

                        {/* 5x3 */}
                        {pilih[5] && pilih2[3] &&
                            <View style={{
                                top: 380,
                                position: 'absolute',
                                width: 220,
                                left: -30,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '120deg' }],
                            }} />}

                        {/* 5x4 */}
                        {pilih[5] && pilih2[4] &&
                            <View style={{
                                top: 430,
                                position: 'absolute',
                                width: 180,
                                left: -10,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '140deg' }],
                            }} />}

                        {/* 5x5 */}
                        {pilih[5] && pilih2[5] &&
                            <View style={{
                                top: 490,
                                position: 'absolute',
                                width: 150,
                                left: 0,
                                height: 1,
                                borderWidth: 1,
                                transform: [{ rotate: '0deg' }],
                            }} />}


                    </View>


                </View>
                <View style={{

                    paddingHorizontal: 5
                }}>
                    <Pressable onPress={() => {
                        setDone({
                            ...done,
                            a2: true,
                        });

                        setTimeout(() => {
                            setNilai({
                                ...nilai,
                                [3]: pilih[5] ? 20 : 0,
                            })
                        }, 500);

                        setTimeout(() => {



                            setPilih2({
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                            });
                            setPilih({
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                            });
                        }, 1000)


                        setPilih2({
                            1: true,
                            2: false,
                            3: false,
                            4: false,
                            5: false,
                        });

                    }} style={done.a2 ? styles.tomboldone2 : pilih2[1] ? styles.tombolok2 : styles.tombol2}>
                        <Text style={styles.judul}>
                            Persatuan Indonesia
                        </Text>
                    </Pressable >

                    <Pressable onPress={() => {

                        setTimeout(() => {
                            setNilai({
                                ...nilai,
                                [5]: pilih[3] ? 20 : 0,
                            })
                        }, 500);


                        setTimeout(() => {

                            setPilih2({
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                            });
                            setPilih({
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                            });
                        }, 1000)


                        setPilih2({
                            1: false,
                            2: true,
                            3: false,
                            4: false,
                            5: false,
                        })
                        setDone({
                            ...done,
                            b2: true,
                        })

                    }} style={done.b2 ? styles.tomboldone2 : pilih2[2] ? styles.tombolok2 : styles.tombol2}>
                        <Text style={styles.judul}>
                            Keadilan Sosial Bagi Seluruh Rakyat Indonesia
                        </Text>
                    </Pressable >

                    <Pressable onPress={() => {

                        setTimeout(() => {
                            setNilai({
                                ...nilai,
                                [1]: pilih[4] ? 20 : 0,
                            })
                        }, 500);


                        setTimeout(() => {

                            setPilih2({
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                            });
                            setPilih({
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                            });
                        }, 1000)


                        setPilih2({
                            1: false,
                            2: false,
                            3: true,
                            4: false,
                            5: false,
                        })

                        setDone({
                            ...done,
                            c2: true,
                        })

                    }} style={done.c2 ? styles.tomboldone2 : pilih2[3] ? styles.tombolok2 : styles.tombol2}>
                        <Text style={styles.judul}>
                            Ketuhanan yang Maha esa

                        </Text>
                    </Pressable >

                    <Pressable onPress={() => {

                        setTimeout(() => {
                            setNilai({
                                ...nilai,
                                [4]: pilih[1] ? 20 : 0,
                            })
                        }, 500);

                        setTimeout(() => {

                            setPilih2({
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                            });
                            setPilih({
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                            });
                        }, 1000)
                        setPilih2({
                            1: false,
                            2: false,
                            3: false,
                            4: true,
                            5: false,
                        })
                        setDone({
                            ...done,
                            d2: true,
                        })

                    }} style={done.d2 ? styles.tomboldone2 : pilih2[4] ? styles.tombolok2 : styles.tombol2}>
                        <Text style={styles.judul}>
                            Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan Perwakilan
                        </Text>
                    </Pressable >
                    <Pressable onPress={() => {

                        setTimeout(() => {
                            setNilai({
                                ...nilai,
                                [2]: pilih[2] ? 20 : 0,
                            })
                        }, 500);

                        setTimeout(() => {

                            setPilih2({
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                            });
                            setPilih({
                                1: false,
                                2: false,
                                3: false,
                                4: false,
                                5: false,
                            });
                        }, 1000)

                        setPilih2({
                            1: false,
                            2: false,
                            3: false,
                            4: false,
                            5: true,
                        })
                        setDone({
                            ...done,
                            e2: true,
                        })

                    }} style={done.e2 ? styles.tomboldone2 : pilih2[5] ? styles.tombolok2 : styles.tombol2}>
                        <Text style={styles.judul}>

                            Kemanusiaan yang adil dan beradab
                        </Text>
                    </Pressable >
                </View>








            </View>
            <MyButton onPress={sendServer} Icons="shield-checkmark" iconColor={colors.black} title="SELESAI" colorText={colors.black} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    gambar: { width: 50, height: 50, },
    judul: { fontFamily: fonts.secondary[400], fontSize: 12, maxWidth: 150 },
    tombol: {
        borderWidth: 1,
        width: 70,
        height: 70,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    tombolok: {
        width: 70,
        borderWidth: 1,
        height: 70,
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary
    },
    tomboldone: {
        width: 70,
        borderWidth: 1,
        height: 70,
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.border,
        opacity: 0.2,
    }
    ,
    tombol2: {
        borderWidth: 1,
        width: 170,
        height: 70,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    tombolok2: {
        width: 170,
        width: '100%',
        borderWidth: 1,
        height: 70,
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary
    },
    tomboldone2: {
        borderWidth: 1,
        height: 70,
        width: 170,
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.border,
        opacity: 0.2,
    }

})