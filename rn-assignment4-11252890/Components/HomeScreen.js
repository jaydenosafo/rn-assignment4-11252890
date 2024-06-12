import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from "react-native";
import {useRouter, Stack} from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen () {
return (
  <SafeAreaView>
    <ScrollView>
    <View>
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.userName}>Eric Atsu</Text>
      <Text style={styles.email}>eric@gmail.com</Text>
      </View>
      <View>
      <Image
        source={require('../assets/profileIcon.png')}
        style={styles.image}
      />
      </View> 
    </View>

    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
      <Feather name="search" size={24} color="black" />
        <TextInput 
         style={styles.searchInput}
         placeholder="Search a job or positon"
        />
      </View>
    </View>
  </View>
    </ScrollView>
  </SafeAreaView>
  
);
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: 10,
  },
  textContainer: {
    flex: 1, 
    flexDirection: 'column', 
    marginLeft: 24,
  },
  userName: {
    fontWeight: '700',
    color: '#0D0D26',
    fontSize: 25,
    lineHeight: 36
  },
  image: {
    width: 55, 
    height: 55, 
    borderRadius: 25,
  },
  email: {
    fontWeight: '200',
    color: '#95969D',
    fontSize: 20,
    fontWeight: '400',
    height: '24'
  },
   searchContainer: {
    width: '90%', 
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 10,
    marginLeft: 20,
    marginTop: 60
  },
  searchWrapper: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  searchInput: {
    flex: 1, 
    marginLeft: 10, 
    fontSize: 16,
    color: 'black',
  },
  
});
