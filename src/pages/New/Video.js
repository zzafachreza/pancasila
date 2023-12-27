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
import Video from 'react-native-video';
import { useState } from 'react';


export default function ({ navigation }) {




    useEffect(() => {
        setTimeout(() => {
            //   navigation.replace('Kdi')
        }, 1500)
    }, []);

    const [open, setOpen] = useState(false);

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
                }}>Materi Pembelajaran</Text>

                <View style={{
                    padding: 20,
                }}>



                    <Video onLoad={() => {
                        setOpen(true)
                    }} source={{

                        uri: 'https://okeadmin.com/puzzle.mp4',
                        type: 'video/mp4'
                    }}   // Can be a URL or a local file.
                        // Callback when video cannot be loaded
                        fullscreen={true}
                        resizeMode='contain'
                        controls={true}
                        style={{
                            width: '100%',
                            height: 300,
                        }} />
                    {!open && <ActivityIndicator size="large" color={colors.primary} />}
                    <MyGap jarak={20} />
                    <MyButton warna={colors.primary} title="Selanjutnya" onPress={() => {
                        getData('user').then(res => {
                            if (!res) {
                                navigation.replace('Login')
                            } else {
                                navigation.replace('Home')
                            }
                        })

                    }} />
                </View>




            </View>




        </View>
    );
}

const styles = StyleSheet.create({});
