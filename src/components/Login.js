import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Alert, Button, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/index'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import config from '../../config/config.json';

import Home from './Home';
import Empresa from './Empresa';
import Produto from './Produto';
import Representante from './Representante';
import Usuario from './Usuario';
import Global from './Global'

function LoginScreen({ navigation }) {
      const [usuario, setUsuario] = useState('none');
     const [login, setLogin] = useState(null);
     const [senha, setSenha] = useState(null);
     Global.isLoggedIn = false;

    async function sendForm()
    {
        let response=await fetch(config.urlRoot + 'login', {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: login,
            pass: senha
          })
        });
        let json=await response.json();
        if(json === 'error'){
          Alert.alert("Erro", "Login inválido");
        } else {
          Global.isLoggedIn = true;
          navigation.navigate('Home');
          //Global.setIsLoggedIn(true);
          //Alert.alert("", Global.isLoggedIn)
        }
    }

    return (
    <View style={styles.container}>
    <Image
      source={require('../assets/logo_login.jpeg')}
      style={styles.logo}
    />
    <TextInput
      style={styles.input}
      placeholder="Usuário" onChangeText={text=>setLogin(text)}
    />

    <TextInput
      style={styles.input}
      secureTextEntry={true}
      placeholder="Senha"  onChangeText={text=>setSenha(text)}
    />

    <TouchableOpacity
        style={styles.btnLogin}
       // onPress={() => navigation.navigate('Home')}       
       onPress={() =>  sendForm()}
       >
        <Text style={styles.textBtnLogin} >Login</Text>
    </TouchableOpacity>

    </View>
 
  );
}

/*function HomeScreen({ navigation }) {   
        return (          
            navigation.navigate('Home')
        );
}*/

const Drawer = createDrawerNavigator();

class  Login extends React.Component {
  render(){
    return (      
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Empresa" component={Empresa} />
        <Drawer.Screen name="Representante" component={Representante} />
        <Drawer.Screen name="Produto" component={Produto} />
        <Drawer.Screen name="Usuario" component={Usuario} />
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }   
}

  registerRootComponent(Login);
//export default Login;



