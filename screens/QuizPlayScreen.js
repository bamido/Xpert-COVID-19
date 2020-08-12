import React, { Component } from 'react';
import Quiz  from '../components/Quiz';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Speech from 'expo-speech';



export default class QuizPlayScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      quizFinish : false,
      score: 0
    }

  }

  _quizRestart(){
    this.setState({ quizFinish: false, score : 0 })
    this.props.navigation.navigate('Home')
  }

  _onPressBack(){
    const {goBack} = this.props.navigation
      goBack()
  }
  _quizFinish(score){    
    this.setState({ quizFinish: true, score : score })
  }
  _scoreMessage(score){
    if(score <= 30){
      const theresult = "Your risk of having COVID-19 is LOW. Stay home, stay safe"
      Speech.speak(theresult)
      return (<View style={styles.innerContainer} >
                <View style={{ flexDirection: "row"}} >
                  <Icon name="book" size={20} color="white" />
                  <Text style={styles.score}> RESULT</Text>
                </View>
                <Text style={styles.score}>Your risk of having COVID-19 is <Text style={{color: 'lightgreen', fontSize:20}}>LOW</Text></Text>
                <Text style={styles.resultscore}>Stay home, stay safe</Text>
              </View>)
    }else if(score > 30 && score < 40){
      const theresult = "Your risk of having COVID-19 is Medium. Please kindly visit a medical doctor for proper check."
      Speech.speak(theresult)
      return (<View style={styles.innerContainer} >
                  <View style={{ flexDirection: "row"}} >
                    <Icon name="book" size={20} color="white" />
                     <Text style={styles.score}> RESULT</Text>
                  </View>
                  <Text style={styles.score}>Your risk of having COVID-19 is <Text style={{color: 'lightblue', fontSize:20}}>MEDUIM</Text></Text>
                  <Text style={styles.resultscore}>Please kindly visit a medical doctor for proper check. </Text>
                </View>)
    }else if(score >= 40 && score < 60){
      const theresult = "Your risk of having COVID-19 is HIGH. Please see a doctor immediately.Do not panic, isolate yourself from friends and family."
      Speech.speak(theresult)
      return (<View style={styles.innerContainer} >
                  <View style={{ flexDirection: "row"}} >
                    <Icon name="book" size={20} color="white" />
                     <Text style={styles.score}> RESULT</Text>
                  </View>
                  <Text style={styles.resultscore}>Your risk of having COVID-19 is <Text style={{color: 'yellow', fontSize:20}}>HIGH</Text></Text>
                  <Text style={styles.resultscore}>Please see a doctor immediately. Do not panic, isolate yourself from friends and family. </Text>
                </View>)
    }else if(score >= 60){
      const theresult = "Your risk of having COVID-19 is SEVERE. Do not panic, isolate yourself from friends and family. Call 08000-9700-0011, SMS: 08099555577, Whatsapp: 07087110839"
      Speech.speak(theresult)
      return (<View style={styles.innerContainer}>
                 <View style={{ flexDirection: "row"}} >
                     <Icon name="book" size={20} color="white" />
                     <Text style={styles.score}> RESULT</Text>
                  </View>
                  <Text style={styles.resultscore}>Your risk of having COVID-19 is <Text style={{color: 'orange', fontSize:20}}>SEVERE</Text></Text>
                  <Text style={styles.resultscore}>Do not panic, isolate yourself from friends and family. Call 08000-9700-0011, SMS: 08099555577, Whatsapp: 07087110839</Text>
                </View>)
    }

  }
  render() {
    return (
      <View style={{flex:1}}>               
      <View style={styles.container}>        
          <Image style= { styles.backgroundImage } source={require('../assets/images/bg.jpg')}>
      </Image>
       { this.state.quizFinish ? <View >
          <Image                  
          source={require('../assets/images/doctor.jpg')}
                 />
           <View style={styles.circle}>

             { this._scoreMessage(this.state.score) }
             
           </View>           
                <TouchableOpacity onPress={() => this._quizRestart()}  style={{position: 'relative', bottom:50}} >
                  <View style={{paddingTop: 10,paddingBottom: 10, paddingRight: 10, paddingLeft: 10, borderRadius:10, backgroundColor:"darkgreen", width:'50%', marginRight:'25%', marginLeft:'25%'}}>
                    <Text style={{color:'white', textAlign: 'center'}}>RESTART TEST</Text>
                  </View>       
                </TouchableOpacity>

       </View> :  <Quiz quizFinish={(score) => this._quizFinish(score)} /> }

      </View>
      </View>
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
    backgroundColor: '#ffffff',
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
    backgroundImage:{
      position: 'absolute',      
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 0.7,
      width:'100%'
  }
});