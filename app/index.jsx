import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import icedCoffeeImg from '@/assets/images/iced-coffee.png'
import { Link } from 'expo-router'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode='cover'
        style= {styles.image}
      >
      <Text style={styles.text}>Coffee Shop</Text>

      <Link href="/menu" style={{marginHorizontal: 'auto'}} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Our Menu</Text>
       </Pressable>
      </Link>
      <Link href="/contact" style={{marginHorizontal: 'auto'}} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Contact US</Text>
       </Pressable>
      </Link>
      </ImageBackground>
      
    </View>
  )
}

export default app 

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 10,
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5',
    padding: 4,
  },
  button:{
    height: 50,
    width: 150,
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.75)',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
  image:{
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
})