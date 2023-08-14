import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import { SliderBox } from "react-native-image-slider-box";
import { color } from 'react-native-reanimated';


export default function Home({ navigation }) {
  const [user, setUser] = useState({});
  const isFocused = useIsFocused();
  useEffect(() => {


    if (isFocused) {
      __getTransaction();
    }

  }, [isFocused]);

  const __getTransaction = () => {
    getData('user').then(res => {
      console.log(res)
      setUser(res);
    })



  }




  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white,
    }}>
      {/* header */}
      <View style={{
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}>
        <View style={{
          flexDirection: 'row',
        }}>
          <View style={{
            flex: 1,
          }}>
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: windowWidth / 28,
              color: colors.black
            }}>Selamat datang, {user.nama}</Text>
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: windowWidth / 28,
              color: colors.black
            }}>{MYAPP}</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30
          }}>
            <Icon type='ionicon' name='person' color={colors.black} />

          </TouchableOpacity>

        </View>
      </View>


      <Text style={{
        textAlign: 'center',
        marginVertical: 10,
        fontFamily: fonts.secondary[600]
      }}>Pilihlah nomor di bawah ini</Text>
      <View style={{
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ImageBackground source={require('../../assets/logo.png')} style={{
          width: 350,
          height: 380,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 35,
        }}>

          <View style={{
            position: 'absolute',
            zIndex: 100,
          }}>
            {user[1] == null && <TouchableOpacity onPress={() => navigation.navigate('ASoal1', user)} activeOpacity={1} style={{
              width: 50,
              backgroundColor: colors.primary,
              justifyContent: 'center',
              alignItems: 'center',
              height: 60,
              marginTop: 40,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}>
              <Text style={{
                color: colors.black,
                fontFamily: fonts.secondary[800],
                fontSize: 20
              }}>1</Text>


            </TouchableOpacity>}

            {user[1] !== null && user[5] == null && <View style={{
              width: 50,
              backgroundColor: colors.black,
              justifyContent: 'center',
              alignItems: 'center',
              height: 60,
              marginTop: 40,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              position: 'relative'
            }}>


              <Image source={require('../../assets/star.png')} style={{
                width: 40,
                height: 40,
                top: 5,
                position: 'absolute'
              }} />

            </View>}
          </View>

          <View>
            <View style={{
              width: 100,

              justifyContent: 'center',
              flexDirection: 'row',
            }}>
              <TouchableOpacity onPress={() => navigation.navigate('ASoal4', user)} activeOpacity={1} style={{
                width: 60,
                backgroundColor: user[4] == null ? '#646BFE' : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                height: 70
              }}>
                <Text style={{
                  color: colors.white,
                  fontFamily: fonts.secondary[800],
                  fontSize: 20
                }}>{user[4] == null ? 4 : ''}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('ASoal3', user)} activeOpacity={1} style={{
                width: 60,
                backgroundColor: user[3] == null ? '#8EFD4B' : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                height: 70
              }}>
                <Text style={{
                  color: colors.black,
                  fontFamily: fonts.secondary[800],
                  fontSize: 20
                }}>{user[3] == null ? 3 : ''}</Text>
              </TouchableOpacity>
            </View>
            <View style={{
              width: 100,
              flexDirection: 'row',
              justifyContent: 'center',

            }}>
              <TouchableOpacity onPress={() => navigation.navigate('ASoal5', user)} activeOpacity={1} style={{
                width: 60,
                backgroundColor: user[5] == null ? '#F05BFD' : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                height: 80,
                borderBottomLeftRadius: 100,
              }}>
                <Text style={{
                  color: colors.black,
                  fontFamily: fonts.secondary[800],
                  fontSize: 20
                }}>{user[5] == null ? 5 : ''}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('ASoal2', user)} activeOpacity={1} style={{
                width: 60,
                backgroundColor: user[2] == null ? 'yellow' : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                height: 80,
                borderBottomRightRadius: 140,
              }}>
                <Text style={{
                  color: colors.black,
                  fontFamily: fonts.secondary[800],
                  fontSize: 20
                }}>{user[2] == null ? 2 : ''}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

      </View>
      {user[1] !== null && user[2] !== null && user[3] !== null && user[4] !== null && user[5] !== null && <Text style={{
        textAlign: 'center',
        marginVertical: 10,
        color: colors.primary,
        fontFamily: fonts.secondary[600]
      }}>Selamat, Kamu telah menyelesaikan permainan</Text>}

      {user[1] !== null && user[2] !== null && user[3] !== null && user[4] !== null && user[5] !== null && <TouchableOpacity style={{
        padding: 10,
        backgroundColor: colors.secondary
      }}

        onPress={() => {
          axios.post(apiURL + 'nilai', user).then(res => {
            console.log(res.data);
            navigation.navigate('SHasil', {
              user: user,
              nilai: (user[1] === null ? 0 : parseInt(user[1])) + (user[2] === null ? 0 : parseInt(user[2])) + (user[3] === null ? 0 : parseInt(user[3])) + (user[4] === null ? 0 : parseInt(user[4])) + (user[5] === null ? 0 : parseInt(user[5]))
            })
          })
        }}
      ><Text style={{
        fontFamily: fonts.secondary[600],
        fontSize: windowWidth / 20,
        textAlign: 'center'
      }}>Skormu Lihat disini</Text></TouchableOpacity>}

      {/* <Text style={{
        margin: 5,
        textAlign: 'center',
        fontFamily: fonts.secondary[600]
      }}>Skor Kamu : {(user[1] === null ? 0 : parseInt(user[1])) + (user[2] === null ? 0 : parseInt(user[2])) + (user[3] === null ? 0 : parseInt(user[3])) + (user[4] === null ? 0 : parseInt(user[4])) + (user[5] === null ? 0 : parseInt(user[5]))}</Text>
 */}


    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: windowHeight,
    height: windowWidth / 2,
  },
  imageContainer: {
    flex: 1,
    marginBottom: 1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});