import React from 'react';
import { Text, View, Image, StyleSheet, Header, ImageBackground, Dimensions  } from 'react-native';

const ImageHeader = () => {

 return(
  <View style={{ backgroundColor: '#ffffff' }}>
    <ImageBackground  style= { styles.backgroundImage } source={require('../assets/images/topbg.jpg')}>
    	<View style={styles.content}>
    		<View style={styles.left}></View>
	        <View style={styles.center}>
	        	<Text style={styles.titletext}>
	        		Xpert Covid-19 Self Test
	        	</Text>
	        </View>
	        <View style={styles.right}></View>
    	</View>
    </ImageBackground >
     

  </View>
)};

const styles = StyleSheet.create({

   backgroundImage:{
      position: 'relative',      
      left: 0,
      top: 0,
      right: 0,
      opacity: 0.7,
      width:'100%',      
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height * 0.03,
    height: Dimensions.get('window').height * 0.12,
  },
  left: {
    marginHorizontal: 5,
  },
  center: {
    marginHorizontal: 5,    
  },
  right: {
    marginHorizontal: 5,
  },
   titletext:{
   color: '#000',
    fontWeight: 'bold',
    fontSize: 22,
    paddingBottom:20
   }
});

export default ImageHeader;