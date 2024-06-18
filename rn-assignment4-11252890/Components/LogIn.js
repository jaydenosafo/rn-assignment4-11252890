import { useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Image} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

const LogIn = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', {name, email});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.welcome}>Welcome Back 👋 </Text>
      <Text style={styles.subTitle}>Let's log in. Apply to jobs!</Text>

      <TextInput
       style={styles.input}
       placeholder="Name"
       value={name}
       onChangeText={setName}
      />

      <TextInput
       style={styles.input}
       placeholder="Email"
       value={email}
       onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.orContinue}>
        <View style={styles.orText}>
         <View style={styles.seperator}/>
         <Text style={styles.orText}>Or continue with</Text>
         <View style={styles.seperator}/>
        </View>
        
        <View style={styles.socials}>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="apple" size={40} color="black" />
        </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
          <AntDesign name="google" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
          <FontAwesome5 name="facebook" size={40} color="#395185" />
          </TouchableOpacity>
        </View>
        <View style={styles.registerText}>
          <Text style={styles.text}>Haven't an account?</Text>
          <TouchableOpacity>
          <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-',
    padding: 20,
    backgroundColor: "#FAFAFD",
    
  },
  title: {
    marginTop: 90,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#356899'
  },
  welcome: {
    fontSize: 27,
    marginBottom: 10,
    color: '#333',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 60,
    color: '#666'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '100%',
    borderRadius: 7
  },
  button: {
    backgroundColor: '#356899',
    padding: 15,
    borderRadius: 6,
    width: '100%',
    marginBottom: 40
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  orText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  seperator: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: ' center',
    padding: 20,
    marginTop: 20,
  },
  icon: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 15,
   
  },
  registerText: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40
  },
  text: {
    color: '#999',
    fontSize: 14
  },
  link: {
    color: '#1976D2',
    fontSize: 14
  }

})

export default LogIn;