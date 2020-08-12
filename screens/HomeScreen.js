import React, { Component } from 'react';
import Quiz  from '../components/Quiz';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native';
import {Card, CardItem, Thumbnail,Button, Header, Footer, Icon, Left, Right, Title, Body, Container, Content} from 'native-base';
import * as Speech from 'expo-speech';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class HomeScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      quizFinish : false,
      score: 0
    }

  }


  componentDidMount(){   
  
    Speech.speak('This is a COVID-19 self assessment tool that was' +
      'calibrated based on World Health Organization (WHO) guidelines. It is not a diagnostic tool.' + 
      'Click on proceed button to start the test.')
 
  } 
  

  render() {
    return (
      <Container>
    <Content>
      <TouchableOpacity>
        <View style={{borderWidth:0}}>
          <CardItem>
            <Left>
              <Thumbnail
                 source={require('../assets/images/splash/icon.png')} small />
              <Body>
                <Text style={styles.protext}>COVID-19 SELF TEST</Text>                
                <Text style={styles.protext}>{new Date().toDateString()}</Text>
              </Body>
            </Left>
          </CardItem>
          {
            
            <CardItem cardBody>

              <Image
                 source={require('../assets/images/covid19.jpg')}
                style={{ height:300, width:null, flex: 1 }} />
            </CardItem> 
          }
          <CardItem>
            <Body>
              <Text style={{ fontSize: 16, fontWeight:'900', color:'black', marginBottom: 5, textAlign: 'center'}}>
                This is a COVID-19 self assessment DEMO tool that was calibrated based on WHO guidelines. It is not a diagnostic tool.
              </Text>                            
            </Body>
          </CardItem>
              
          
        </View>
      </TouchableOpacity>
       <TouchableOpacity onPress={() => this.props.navigation.navigate('QuizPlay')} >
              <View style={{paddingTop: 10,paddingBottom: 10, paddingRight: 10, paddingLeft: 10, borderRadius:5, backgroundColor:"brown", width:'50%', marginRight:'25%', marginLeft:'25%'}}>
                <Text style={{color:'white', textAlign: 'center'}}>PROCEED</Text>
              </View>       
            </TouchableOpacity>

    </Content>

  </Container>
    );
  }
}
const scoreCircleSize = 300
const styles = StyleSheet.create({
  score: {
    color: "white",
    fontSize: 16,
    fontStyle: 'italic'
  },
  resultscore: {
    color: "white",
    fontSize: 16,
    textAlign: 'center',
    padding:15
  },
  circle: {
    position: 'relative',
    top:-65,
    justifyContent: 'center',
    alignItems: 'center',
    width: scoreCircleSize,
    height: scoreCircleSize,
    borderRadius: scoreCircleSize/2,
    backgroundColor: "#0083A6",
    padding:10
  },
  square: {
   
    padding: 5,
    backgroundColor: "green"
  },
  innerContainer: {
    /* flex: 1, */
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'
    },
    toolbarButton:{
        width: 55,
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1
    },
    protext:{
      fontSize: 10,
    }
});