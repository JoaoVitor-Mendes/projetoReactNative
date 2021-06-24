import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import config from '../../config/config.json';


async function sendForm()
{
    let response=await fetch(config.urlRoot + 'listEmpresa', {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
    });
    let json=await response.json();   
 }


export default function Representante() {
  return (
    <View style={styles.container}>
     <TouchableOpacity
          style={styles.btnCadastro} onPress={() => {
            //Alert.alert("",config.urlRoot + 'listEmpresa');
              sendForm();   
          } }       
        // onPress={() => navigation.navigate('Home')}       
        //onPress={() =>  }       
          >
          <Text>Cadastrar</Text>
      </TouchableOpacity>
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
});