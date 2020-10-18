import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import HouseList from "../components/houseList";
import { TextInput } from 'react-native-gesture-handler';

let customFonts  = {
  'FuturaH': require('../assets/fonts/futurah.ttf'),
  'FuturaL': require('../assets/fonts/futural.ttf'),
};

export default class Where extends React.Component  {
  state = {
    fontsLoaded: false,
    playing: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();



  }

 

  


  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>

     
   
          <View>
            <Text style={{position:'relative',fontSize:40,marginTop:'10%',color:'#2f2e41', fontFamily:'FuturaH', width:'95%', marginLeft:'5%'}}>Hey there!</Text>
            <Text style={{position:'relative',fontSize:20,marginTop:'2.5%',color:'#2f2e41', fontFamily:'FuturaL', width:'95%', marginLeft:'5%'}}>Tell us more about you so that we
can help you make the right choice</Text>
            <Image source={require('../assets/home.png')} style={styles.house}></Image>
            <Text style={{position:'relative',fontSize:20,marginTop:'2.5%',color:'#2f2e41', fontFamily:'FuturaH', width:'95%', marginLeft:'5%'}}>1. What's your profession?</Text>
            <TextInput placeholder='Profession' style={{position:'relative',fontSize:20,margin:'auto', paddingLeft:'5%', color:'#798497', fontFamily:'FuturaL', marginTop:'5%', backgroundColor:'#EAEAEA',padding:'2.5%', width:'80%', borderRadius:5,alignSelf:'center'}}></TextInput>
            <Text style={{position:'relative',fontSize:20,marginTop:'2.5%',color:'#2f2e41', fontFamily:'FuturaH', width:'95%', marginLeft:'5%'}}>2. What's your annual income?</Text>
            <TextInput placeholder='$' style={{position:'relative',fontSize:20,margin:'auto', paddingLeft:'5%', color:'#798497', fontFamily:'FuturaL', marginTop:'5%', backgroundColor:'#EAEAEA',padding:'2.5%', width:'80%', borderRadius:5,alignSelf:'center'}}></TextInput>
          </View>

          <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaH', marginTop:'2.5%', backgroundColor:'#2f2e41', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.props.navigation.navigate('Home')}>WHERE2MOVE</Text>
    
 
      
      
    </View>
    );
    }
    else {
    return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    backgroundColor:'#f5f5f5'
  },
  left:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    left:'5%',
    position:'absolute',
  },
  right:{
    height:'7%',
    width:'7%',
    top:'2.5%',
    resizeMode:'contain',
    right:'5%',
    position:'absolute'
  },
  middle:{
    height:'60%',
    width:'60%',
    marginTop:'5%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
  },
  house:{
    height:'40%',
    width:'70%',
    marginTop:'7.5%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
    borderRadius:10,
  },
 
  playing:{
      width:'70%',
      height:'35%',
      elevation:1,
      backgroundColor:'#FFF',
      alignSelf:'center',
      marginTop:'15%',
      borderRadius:20
  }
  
});