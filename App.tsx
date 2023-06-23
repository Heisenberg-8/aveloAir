import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, AppRegistry } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton}>
        <Image
          source={require('./assets/Menu.png')}
          style={styles.menuIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Image source={require('./assets/Avelo_White_Logo.png')} style={styles.logo} />
      <TouchableOpacity style={styles.bellButton}>
        <MaterialIcons name='notifications' size={35} color="#4C12A1" />
      </TouchableOpacity>
    </View>
  );
}

const Body = () => {
  return (
    <View style={styles.bodyContainer}>
      <Image
        source={require('./assets/bodyimg.png')}
        style={styles.bodyImage}
        resizeMode="cover"
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name='search' size={25} color="#4C12A1" />
          <Text style={styles.buttonText}> Book a Flight</Text>
          <MaterialIcons name='arrow-forward-ios' size={22} color="#BFBFBF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <MaterialIcons name='local-airport' size={25} color="#4C12A1" />
          <Text style={styles.buttonText}>     Change/Cancel</Text>
          <MaterialIcons name='arrow-forward-ios' size={22} color="#BFBFBF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <MaterialIcons name='person' size={25} color="#4C12A1" />
          <Text style={styles.buttonText}>My Account</Text>
          <MaterialIcons name='arrow-forward-ios' size={22} color="#BFBFBF" />
        </TouchableOpacity>
      </View>
      <Image
        source={require('./assets/bodyimg2.png')}
        style={styles.bodyImage2}
        resizeMode="cover"
      />
    </View>
  );
}

const Settings = () => {
  return (
    <View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    // paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    marginTop: 25,
  },
  menuButton: {
    marginLeft: 24,
  },
  menuIcon: {
    width: 42,
    height: 42,
  },
  bellButton: {
    marginRight: 24,
  },
  logo: {
    alignContent: 'center',
    width: 100,
    height: 38,
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  bodyImage: {
    width: '100%',
    height: 300,
  },
  bodyImage2: {
    marginTop: 5,
    alignItems: 'center',
    width: '89%',
    height: 140,
  },
  buttonsContainer: {
    marginBottom: 20,
    width: '90%',
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#808080',
    borderWidth: 1,
    marginTop: 20,
  },
  buttonText: {
    color: '#4C12A1',
    fontSize: 18,
    marginLeft: -140,
    // fontWeight: 'bold',
  },
});

const App = () => (
  <>
    <Header />
    <Body />
  </>
);

AppRegistry.registerComponent('YourAppName', () => App);

export default App;