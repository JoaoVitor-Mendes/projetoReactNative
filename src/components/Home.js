import * as React from 'react';
import { Button, View, Text, Alert } from 'react-native';

import Global from './Global'
import Login from './Login';

 function Home( {navigation}){
  isLogged =  Global.isLoggedIn
  if (isLogged) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Feed Screen</Text>
        </View>
      );
  } else {
   /* <Button onPress={() => navigation.goBack()} title="Go back home" />*/
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('Login')} title="Faça Login para Visualizar!" />
    </View>
    );
  

       /*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Nao Logado</Text>
      </View> */
      
  }
 
}

export default Home;
