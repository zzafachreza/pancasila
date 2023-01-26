import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { fonts, windowWidth, colors } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';


export default function ({ navigation }) {

  const [kirim, setKirim] = useState({
    nama: '',
    absen: '',
    kelas: '',
    sekolah: '',
    1: null,
    2: null,
    3: null,
    4: null,
    5: null
  });
  const [loading, setLoading] = useState(false);



  const masuk = () => {


    if (kirim.nama == null && kirim.absen == null && kirim.kelas == null && kirim.sekolah == null) {
      Alert.alert(MYAPP, 'Maaf harus di isi yaa, tidak boleh kosong');
    } else if (kirim.nama == null) {
      alert('Nama tidak boleh kosong');
    } else if (kirim.absen == null) {
      alert('Absen tidak boleh kosong !');
    } else if (kirim.kelas == null) {
      alert('Kelas tidak boleh kosong !');
    } else if (kirim.sekolah == null) {
      alert('Sekolah tidak boleh kosong !');
    } else {


      setLoading(true);
      console.log(kirim);


      setTimeout(() => {
        setLoading(false);
        storeData('user', kirim);
        navigation.replace('SCek')
      }, 800)





    }




  }

  useEffect(() => {

    // const backAction = () => {
    //   Alert.alert("Info Wks", "Apakah kamu yakin akan keluar aplikasi ?", [
    //     {
    //       text: "Cancel",
    //       onPress: () => null,
    //       style: "cancel"
    //     },
    //     { text: "YES", onPress: () => BackHandler.exitApp() }
    //   ]);
    //   return true;
    // };

    // const backHandler = BackHandler.addEventListener(
    //   "hardwareBackPress",
    //   backAction
    // );

    // return () => backHandler.remove();
  }, [])

  return (
    <ScrollView style={{ padding: 10, flex: 1, backgroundColor: colors.white }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5, paddingTop: 10 }}>

        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>


          <Image
            source={require('../../assets/logo.png')}
            style={
              {
                width: 200,
                height: 100,
                resizeMode: 'contain'
              }
            }
          />



        </View>


      </View>
      <MyGap jarak={10} />
      <View style={{ padding: 10, marginVertical: 10, flex: 1 }}>
        <MyInput label="Nama" onChangeText={val => setKirim({
          ...kirim,
          nama: val
        })}
          iconname="person" placeholder="Silahkan masukan nama kamu" />
        <MyGap jarak={10} />
        <MyInput label="Absen" onChangeText={val => setKirim({
          ...kirim,
          absen: val
        })}
          iconname="location" placeholder="Silahkan masukan absen kamu" />
        <MyGap jarak={10} />
        <MyInput label="Kelas" onChangeText={val => setKirim({
          ...kirim,
          kelas: val
        })}
          iconname="home" placeholder="Silahkan masukan kelas kamu" />
        <MyGap jarak={10} />
        <MyInput label="Sekolah" onChangeText={val => setKirim({
          ...kirim,
          sekolah: val
        })}
          iconname="school" placeholder="Silahkan masukan sekolah kamu" />
        <MyGap jarak={10} />

        <MyGap jarak={40} />
        {!loading &&

          <>
            <MyButton
              onPress={masuk}
              title="MULAI"
              warna={colors.primary}
              Icons="grid"
            />
            {/* <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}><Text style={{
              fontSize: windowWidth / 28,
              marginTop: 10,
              fontFamily: fonts.primary[400],
              textAlign: 'center',
              color: colors.secondary
            }}>Belum punya akun ? <Text style={{
              fontSize: windowWidth / 28,
              marginTop: 10,
              fontFamily: fonts.primary[600],
              textAlign: 'center',
              color: colors.secondary
            }}>Daftar disini</Text></Text></TouchableOpacity> */}
          </>
        }

      </View>
      {loading && <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
