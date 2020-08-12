import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { AppRegistry, Button, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Animated  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from './StyledText';
import Icon from 'react-native-vector-icons/Ionicons';
import Animbutton from './Animbutton';
import { Dropdown } from 'react-native-material-dropdown-v2';
import TheAgeGroup from './TheAgeGroup';
import * as Speech from 'expo-speech';


const { width, height } = Dimensions.get('window')
let arrnew = []
const jsonData = {"quiz" : {
  "quiz1" : {
    "question1" : {
      "qnumber" : 1,
      "question" : "Do you have Cough?",
      "imgurl" : require('../assets/images/cough.jpg'),
      "mark" : 2,
      "correctoption" : "option1",
      "options" : {
        "option1" : "Yes",
        "option2" : "No"
      }
    },
    "question2" : {
      "qnumber" : 2,
      "question" : "Do you have Cold or runny nose?",
      "imgurl" : require('../assets/images/runningnose.jpg'),
      "mark" : 2,
      "correctoption" : "option1",
      "options" : {
          "option1" : "Yes",
          "option2" : "No"
        }      
    },
    "question3" : {
      "qnumber" : 3,
      "question" : "Are you having Diarrhea?",
      "imgurl" : require('../assets/images/diarrhea.jpg'),
      "mark" : 2,
      "correctoption" : "option1",
      "options" : {
          "option1" : "Yes",
          "option2" : "No"
        }
    },
    "question4" : {
      "qnumber" : 4,
      "question" : "Are you having sore throat?",
      "imgurl" : require('../assets/images/sorethroat.jpg'),
      "mark" : 2,
      "correctoption" : "option1",
      "options" : {
          "option1" : "Yes",
          "option2" : "No"
        }
    },
    "question5" : {
      "qnumber" : 5,
      "question" : "Are you having body aches?",
      "imgurl" : require('../assets/images/bodyaches.jpg'),
      "mark" : 2,
      "correctoption" : "option1",
      "options" : {
          "option1" : "Yes",
          "option2" : "No"
        }
    },
    "question6" : {
      "qnumber" : 6,
      "question" : "Are you having a headache?",
      "imgurl" : require('../assets/images/headache.jpg'),
      "mark" : 2,
      "correctoption" : "option1",
      "options" : {
        "option1" : "Yes",
        "option2" : "No"
      }
    },
    "question7" : {
      "qnumber" : 7,
      "question" : "Do you have Fever (Temperature 37.5*C and above)?",
      "imgurl" : require('../assets/images/fever.jpg'),
      "mark" : 10,
      "correctoption" : "option1",
      "options" : {
          "option1" : "Yes",
          "option2" : "No"
        }      
    },
    "question8" : {
      "qnumber" : 8,
      "question" : "Are you having difficulty breathing?",
      "imgurl" : require('../assets/images/difficultbreathing.jpg'),
      "mark" : 10,
      "correctoption" : "option1",
      "options" : {
          "option1" : "Yes",
          "option2" : "No"
        }
    },
    "question9" : {
      "qnumber" : 9,
      "question" : "Are you experiencing fatigue?",
      "imgurl" : require('../assets/images/fatigue.jpg'),
      "mark" : 2,
      "correctoption" : "option1",
      "options" : {
          "option1" : "Yes",
          "option2" : "No"
        }
    },
    "question10" : {
      "qnumber" : 10,
      "question" : "What is your age group?",
      "imgurl" : require('../assets/images/agegroup.jpg'),
      "mark" : 2,
      "correctoption" : "option1",
      "options" : {
          "option1" : "Yes",
          "option2" : "No"
        }
    },
    "question11" : {
      "qnumber" : 11,
      "question" : "Are you experiencing loss of sense of smell?",
      "imgurl" : require('../assets/images/smell.jpg'),
      "mark" : 2,
      "correctoption" : "option1",
      "options" : {
        "option1" : "Yes",
        "option2" : "No"
      }
    },
    "question12" : {
      "qnumber" : 12,
      "question" : "Are you experiencing loss of sense of taste?",
      "imgurl" : require('../assets/images/taste.jpg'),
      "mark" : 2,
      "correctoption" : "option1",
      "options" : {
          "option1" : "Yes",
          "option2" : "No"
        }      
    },
    "question16" : {
      "qnumber" : 13,
      "question" : "Do you have direct contact with or are you taking care of a positive COVID-19 PATIENT?",
      "imgurl" : require('../assets/images/contact.jpg'),
      "mark" : 40,
      "correctoption" : "option1",
      "options" : {
        "option1" : "Yes",
        "option2" : "No"
      }
    }
  }
}
}
export default class HomeScreen extends React.Component{

  animatedValue = new Animated.Value(0);

  constructor(props){
    super(props);
    this.qno = 0;
    this.score = 0;
 
    const jdata = jsonData.quiz.quiz1;
    arrnew = Object.keys(jdata).map( function(k) { return jdata[k] });
    this.state = {
      qnumber : arrnew[this.qno].qnumber,
      question : arrnew[this.qno].question,
      imgurl : arrnew[this.qno].imgurl, //"require('../assets/images/" + arrnew[this.qno].imgurl + "')",
      mark : arrnew[this.qno].mark,
      options : arrnew[this.qno].options,
      correctoption : arrnew[this.qno].correctoption,
      countCheck : 0,
      //We will store selected item in this
    selectedItems: []
    }

    

  }

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
    //Set Selected Items
  };

  prev(){
    if(this.qno > 0){
      this.qno--
      this.setState({ question: arrnew[this.qno].question, imgurl : arrnew[this.qno].imgurl, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }
  }
  next(){
    if(this.qno < arrnew.length-1){
      this.qno++
 
      this.setState({ countCheck: 0, qnumber: arrnew[this.qno].qnumber, question: arrnew[this.qno].question, imgurl : arrnew[this.qno].imgurl, mark : arrnew[this.qno].mark, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})
    }else{
      
      this.props.quizFinish(this.score*100/16)
     }
  }


  _answer(status,ans){
    Speech.stop();
 console.log(status);
    //if(status == true){
    if(ans == this.state.correctoption ){
        const count = this.state.countCheck + 1
        this.setState({ countCheck: count })
        if(ans == this.state.correctoption ){
          //this.score += 1
          this.score += this.state.mark
        }
      }else{
        const count = this.state.countCheck - 1
        this.setState({ countCheck: count })
        if(this.state.countCheck < 1 || ans == this.state.correctoption){
        //this.score -= 1
        this.score += 0
       }
      }

       console.log(this.score);

    // move to the next question
    if(this.qno < arrnew.length-1){
      this.qno++
 
      this.setState({ countCheck: 0, qnumber: arrnew[this.qno].qnumber, question: arrnew[this.qno].question, imgurl : arrnew[this.qno].imgurl, mark : arrnew[this.qno].mark, options: arrnew[this.qno].options, correctoption : arrnew[this.qno].correctoption})

    }else{
      
      this.props.quizFinish(this.score*100/100)
    }
 
  }


  componentDidMount(){     
    Animated.timing(this.animatedValue,
    {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
    }).start();
  } 


  render() {
    Speech.speak(this.state.question)
    const mystatus = true
    const myk = 'option1'
    let _this = this
    const currentOptions = this.state.options
    const options = Object.keys(currentOptions).map( function(k) {
      
      return (  <View key={k} style={{margin:10}}>
        {_this.state.qnumber !=10?          
          <Animbutton countCheck={_this.state.countCheck} onColor={currentOptions[k]=='Yes'?"green":"red"} effect={"tada"} _onPress={(status) => _this._answer(status,k)} text={currentOptions[k]}  />
          : null
          }

        
      </View>)
    });      
 
    return (
      
      <Animated.View style={{backgroundColor: 'transparent',paddingTop: 10, flex:1}} >
                  
          <View style={{ flex: 1,flexDirection: 'column', justifyContent: "space-between", alignItems: 'center',}}>
            <Image
                source={this.state.imgurl}
                      style={{ }} />

            <View style={styles.oval} >
              <Text style={styles.welcome}>          
                {"(" + this.state.qnumber + ")"}  {this.state.question}          
              </Text>
           </View>
            <View style={{flexDirection: 'row'}}>
            { options }        
            </View>

            <View style={{flexDirection:"column"}}>
                   
            { _this.state.qnumber ==10?
              <View style={{}}>                     
                <TheAgeGroup />
                <View>

                <TouchableOpacity onPress={() => _this._answer(mystatus,myk)} >
                  <View style={{paddingTop: 5,paddingBottom: 5, paddingRight: 5, paddingLeft: 5, borderRadius:10, backgroundColor:"darkgreen"}}>
                    <Text style={styles.mybtn}>PROCEED <Icon name="md-arrow-round-forward" size={20} color="white" /></Text>
                  </View>       
                </TouchableOpacity ></View>
              </View>: null }                           
                                        
            </View>
            </View>
        
      </Animated.View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  oval: {
  width: width * 90/100,
  borderRadius: 10,
  backgroundColor: 'grey'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 16,
    margin: 10,
    color: "white"
  },
  mybtn: {
    fontSize: 16,
    margin: 5,
    color: "white",
    textAlign: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backgroundImage:{
      position: 'absolute',      
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 0.5,
      width:'100%'
  }
});
