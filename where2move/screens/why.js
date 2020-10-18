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

export default class Why extends React.Component  {
  state = {
    fontsLoaded: false,
    playing: false,
    cost: 0,
    employment: 0,
    rent: 0,
    mortgage: 0,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  getLoc(){
    fetch('http://tamudatathon.azurewebsites.net/api/getdata', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({"city": "NY"})
})
    .then((response) => response.json())
    .then((responseJson) => {
console.log(responseJson);
this.setState({cost: responseJson.data.cost}) 
this.setState({rent: responseJson.data.rent}) 
this.setState({mortgage: responseJson.data.mortgage}) 
this.setState({employment: responseJson.data.employment}) 
    })
    .catch((error) => {
        console.error(error);
    });
  }

  componentDidMount() {
    this._loadFontsAsync();
    this.getLoc();



  }

 

  


  render(){
    if (this.state.fontsLoaded) {
    return (
    <View style={styles.container}>

     
   
          <View>
            <Text style={{position:'relative',fontSize:40,marginTop:'10%',color:'#364f6b', fontFamily:'FuturaH', width:'95%', marginLeft:'5%'}}>Why there?</Text>
            {/* <Image source={require('../assets/math.png')} style={styles.house}></Image> */}
            {/* <Text style={{position:'relative',fontSize:20,marginTop:'1%',color:'#2f2e41', fontFamily:'FuturaL', width:'95%', marginLeft:'5%'}}>Lorel ipsum</Text> */}
            
            <Text style={{position:'relative',fontSize:20,marginTop:'25%',color:'#2f2e41', fontFamily:'FuturaH', width:'95%', marginLeft:'5%'}}>Median Contract Rent</Text>
            <Text style={{position:'relative',fontSize:35,marginTop:'5%',textAlign:'center', color:'#2f2e41', fontFamily:'FuturaH'}} >${this.state.rent}</Text>
            <Text style={{position:'relative',fontSize:20,marginTop:'2.5%',color:'#2f2e41', fontFamily:'FuturaH', width:'95%', marginLeft:'5%'}}>Mortgage</Text>
            <Text style={{position:'relative',fontSize:35,marginTop:'5%',textAlign:'center', color:'#2f2e41', fontFamily:'FuturaH'}} >${this.state.mortgage}</Text>
            <Text style={{position:'relative',fontSize:20,marginTop:'2.5%',color:'#2f2e41', fontFamily:'FuturaH', width:'95%', marginLeft:'5%'}}>Cost of Living</Text>
            <Text style={{position:'relative',fontSize:35,marginTop:'5%',textAlign:'center', color:'#2f2e41', fontFamily:'FuturaH'}} >${this.state.cost}</Text>
            <Text style={{position:'relative',fontSize:20,marginTop:'2.5%',color:'#2f2e41', fontFamily:'FuturaH', width:'95%', marginLeft:'5%'}}>Employability Score</Text>
            <Text style={{position:'relative',fontSize:35,marginTop:'5%',textAlign:'center', color:'#2f2e41', fontFamily:'FuturaH'}} >{this.state.employment}</Text>
          </View>

          <Text style={{position:'relative',fontSize:20,margin:'auto', textAlign:'center', color:'#FFF', fontFamily:'FuturaH', marginTop:'15%', backgroundColor:'#2f2e41', padding:'5%', width:'70%', borderRadius:10, alignSelf:'center', elevation:1}} onPress={()=>this.props.navigation.navigate('Home')}>BACK</Text>
    
 
      
      
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
    height:'30%',
    width:'30%',
    marginTop:'5%',
    resizeMode:'contain',
    zIndex:3,
    alignSelf:'center',
  },
  house:{
    height:'20%',
    width:'40%',
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