import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.TL}>
        <View style={styles.TLbox}>
        <Image style={styles.insideBox} source={{url: 'https://img.sirabee.com/wp-content/uploads/2017/08/sirabee20170815rola01.jpg'}}/>
        <Image style={styles.insideBox} source={{url: 'https://img.sirabee.com/wp-content/uploads/2017/08/sirabee20170815rola01.jpg'}}/>
        </View>
        <View style={styles.TLbox}>
        <Image style={styles.insideBox} source={{url: 'https://img.sirabee.com/wp-content/uploads/2017/08/sirabee20170815rola01.jpg'}}/>
        <Image style={styles.insideBox} source={{url: 'https://img.sirabee.com/wp-content/uploads/2017/08/sirabee20170815rola01.jpg'}}/>
        </View>
        <View style={styles.TLbox}>
        <Image style={styles.insideBox} source={{url: 'https://img.sirabee.com/wp-content/uploads/2017/08/sirabee20170815rola01.jpg'}}/>
        <Image style={styles.insideBox} source={{url: 'https://img.sirabee.com/wp-content/uploads/2017/08/sirabee20170815rola01.jpg'}}/>
        </View>
        <View style={styles.TLbox}>
        <Image style={styles.insideBox} source={{url: 'https://img.sirabee.com/wp-content/uploads/2017/08/sirabee20170815rola01.jpg'}}/>
        <Image style={styles.insideBox} source={{url: 'https://img.sirabee.com/wp-content/uploads/2017/08/sirabee20170815rola01.jpg'}}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TL: {
    height: '85%',
    width: '100%',
    backgroundColor: 'gray',  
    //flexDirection: 'c',
    justifyContent: 'space-between',
    marginBottom: '10%',
  },
  TLbox: {
    height: '25%',
    width: '100%',
    flexDirection: 'row',
    borderColor: 'black',
    justifyContent: 'space-between'
  },
  insideBox: {
    height: '100%',
    width: '48%',
    flexDirection: 'row-reverse',
    borderColor: 'black',
  },
});
