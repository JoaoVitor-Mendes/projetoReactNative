import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },

    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        height: 42,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
    },

    btnLogin: {
        marginTop: 10,
        width: 300,
        height: 45,
        backgroundColor: 'black',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textBtnLogin: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 100,
    }



  });

  export default styles;