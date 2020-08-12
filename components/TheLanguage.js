import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { AppRegistry, Button, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View, SafeAreaView  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-material-dropdown-v2';

const mylang = [{
        value:"English",
        label: "English"
      },
      {
        value:"Yoruba",
        label: "Yoruba"
      },
      {
        value:"Hausa",
        label: "Hausa"
      },
      {
        value:"Igbo",
        label: "Igbo"
      }]

export default class TheLanguage extends React.Component{

	constructor(props){
	    super(props);
	    this.state = {
	      
	    }    

	}


  componentDidMount(){   
  
 
  } 


	render(){
		return(
			<Dropdown
	        label='Select Language'
	        data={mylang}
	        pickerStyle={{borderBottomColor:'transparent',borderWidth: 1, borderColor:'green'}}	        
	        containerStyle = {styles.dropdown} />

		);
	}

}      


const styles = StyleSheet.create({  
  container: {
    flex: 1,
    alignItems: 'center'
  }
});