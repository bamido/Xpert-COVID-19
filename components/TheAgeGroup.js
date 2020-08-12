import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { AppRegistry, Button, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-material-dropdown-v2';

const agegroup = [{
        value:"group1",
        label: "0 - 5"
      },
      {
        value:"group2",
        label: "6 - 12"
      },
      {
        value:"group3",
        label: "13 - 19"
      },
      {
        value:"group4",
        label: "20 - 30"
      },
      {
        value:"group5",
        label: "31 - 40"
      },
      {
        value:"group6",
        label: "41 - 50"
      },
      {
        value:"group7",
        label: "51 - 60"
      },
      {
        value:"group8",
        label: "61 - 65"
      },
      {
        value:"group9",
        label: "66 - and Above"
      }]

export default class TheAgeGroup extends React.Component{

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
	        label='Age Group'
	        data={agegroup}
	        pickerStyle={{borderBottomColor:'transparent',borderWidth: 1}}	        
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