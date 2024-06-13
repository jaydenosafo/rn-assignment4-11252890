import { useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Image} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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
      <Text style={styles.welcome}>Welcome Back </Text>
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
        <View style={styles.seperator}/>
        <Text style={styles.orText}>Or continue with</Text>
        <View style={styles.socials}>
        <TouchableOpacity></TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={require('../assets/Google.png')} style={styles.button}/>
          </TouchableOpacity>
          <TouchableOpacity >
            <Image source={require('../assets/facebook.png')} style={styles.button}/>
          </TouchableOpacity>
        </View>
        <Text style={styles.registerText}>Haven't an account? <Text style={styles.registerLink}>Register</Text></Text>
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
  },
  title: {
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
    width: '100%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
  

})

export default LogIn;