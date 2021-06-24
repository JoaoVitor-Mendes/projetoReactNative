import React, {useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert, FlatList } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import config from '../../config/config.json';
import { response } from 'express';

const Tab = createBottomTabNavigator();

function CadastroEmpresa() {
  listarTodasEmpresas();
  return (      
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro de Empresa</Text>
      <TextInput
        style={styles.input}
        placeholder="Razão Social: " 
        onChangeText={text=>setRazaoSocial(text)}                
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Fantasia:" 
        onChangeText={text=>setFantasia(text)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="CNPJ" 
        onChangeText={text=>setCpfCnpj(text)}
      />
       
      <TouchableOpacity
          style={styles.btnCadastro} onPress={() => {
            sendForm();
            Alert.alert("","Empresa criada com sucesso!");
          } }       
        // onPress={() => navigation.navigate('Home')}       
        //onPress={() =>  }       
          >
          <Text style={styles.textBtnCadastro} >Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}


async function listarTodasEmpresas()
{
  let response=await fetch(config.urlRoot + 'listEmpresa', {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
    });
     json = await response.json();      

     return(
        [json]
     );
 };

    class ListaEmpresa extends Component {
      state = {
        data: []
      };      

      componentList() {
        this.fetchData();
      };

      fetchData = async () => {
        const response = await fetch();
         const json = await response.json();
         this.setState({data: json.empresa});
      };

      render() {          
        return(
          <View style={styles.container} >
            <FlatList
              data={this.state.data}
             //keyExtractor={item => item.id.toString()}            
             keyExtractor={(x, i) => i}
              renderItem={({ item }) => 
                  <Text>
                     Text
                  </Text>} 
          />
          </View>
     ) ; 
   };
  };


  //async function listEmpresas() {
   // let response = await fetch(config.urlRoot + 'listEmpresa');
    //Alert.alert("", response);
    // json =  response.json();   
  //})
 


export default function Empresa() {
    const  [razaoSocial, setRazaoSocial]=useState(null);
    const  [fantasia, setFantasia]=useState(null);
    const  [cpfCnpj, setCpfCnpj]=useState(null);
              
    async function sendForm(){
        let response=await fetch(config.urlRoot + 'createEmpresa', {
             method: 'POST',
             headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               razao: razaoSocial,
               nomeFantasia: fantasia,
               documento: cpfCnpj
             }) 
        });                 
    }    
    return (
   // <NavigationContainer>
   
   <Tab.Navigator
         tabBarOptions={{
      activeTintColor: "#50d3a7",
      inactiveTintColor: "gray",
      labelStyle: {
        fontSize: 15,
      },
    }} >
      <Tab.Screen name="Cadastro" component={CadastroEmpresa} style={{ fontSize: 20}} />
      <Tab.Screen name="Lista" component={ListaEmpresa} />
    </Tab.Navigator>
  //</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    justifyContent: 'center', //Centered vertically
       alignItems: 'center', // Centered horizontally
       marginTop: 60,
       fontSize: 25,
       bottom: 200,
  },
  input: {
    backgroundColor: '#fff',
    width: 300,
    height: 50,
    marginBottom: 20,
    bottom: 120,
    fontSize: 25,
  },
  btnCadastro: {
    marginTop: 10,
    width: 300,
    height: 45,
    backgroundColor: 'black',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 100,
  },
  textBtnCadastro: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 100,
}

});