import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
} from 'react-native';
import { MyButton } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';


const MyList = ({ l, v }) => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{
        flex: 0.3,
        fontFamily: fonts.secondary[400],
        fontSize: MyDimensi / 2.2,
        color: colors.black
      }}>{l}</Text>
      <Text style={{
        flex: 0.1,
        fontFamily: fonts.secondary[400],
        fontSize: MyDimensi / 2.2,
        color: colors.black
      }}>:</Text>
      <Text style={{
        flex: 1,
        fontFamily: fonts.secondary[400],
        fontSize: MyDimensi / 2.2,
        color: colors.black
      }}>{v}</Text>
    </View>
  )
}
export default function Splash({ navigation }) {



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
      navigation.replace('Kdi')
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
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Image
          source={require('../../assets/logo.png')}
          style={
            {
              width: MyDimensi / 0.15,
              height: MyDimensi / 0.15,
              resizeMode: 'contain',
              marginBottom: 30,
            }
          }
        />
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={{
          marginTop: 30,
          fontFamily: fonts.secondary[600],
          fontSize: MyDimensi / 1.2,
          color: colors.black
        }}>GAME PUZZLE</Text>
        <Text style={{
          fontFamily: fonts.secondary[800],
          fontSize: MyDimensi / 0.8,
          color: colors.black
        }}>PANCASILA</Text>



      </View>

      <View style={{
        paddingHorizontal: 20,
        justifyContent: 'center',
        flex: 0.5,
      }}>
        <MyList l="Nama" v="Nova Yolanda" />
        <MyList l="NIM" v="180141391" />
        <MyList l="Prodi" v="Pendidikan Guru Sekolah Dasar (PGSD)" />
        <Text style={{
          marginTop: 5,
          fontFamily: fonts.secondary[600],
          fontSize: MyDimensi / 1.78,
          color: colors.black,
        }}>Universitas Muhammadiyah Bangka Belitung</Text>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({});
