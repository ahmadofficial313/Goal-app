import { View, TextInput, StyleSheet ,Button, Keyboard, Modal, Image } from "react-native"
import { useState } from 'react';

function Goalinput(props){
    const[goalText, setGoalText]= useState('');

    function goalHandler(text){
        setGoalText(text)
   }

   function addGoalHandle(){
    props.addGoal(goalText)
    Keyboard.dismiss()
    setGoalText('');

   }
    return(
      <Modal visible={props.visible} animationType="slide ">
        <View style={styles.inputContainer} >
          <Image style={styles.image} source={require('../assets/images/a.png')}/>
        <TextInput placeholder='Enter your course goal' value={goalText} onChangeText={goalHandler} style={styles.textInput}/>
         <View style={styles.buttonContainer}>
          <View style={styles.Button}>
          <Button title='Add Goal' onPress={addGoalHandle} color="#4286F5"/>
          </View>
          <View style={styles.Button}>
          <Button title='Cancel' onPress={props.onCancel} color="#34A854"/>
          </View>
         </View>
       </View> 
       </Modal>


    )
}
export default Goalinput
const styles= StyleSheet.create({
    inputContainer:{
        paddingHorizontal:16,
        justifyContent:'center',
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
        flex:1,
        alignItems:'center',
        backgroundColor:'#F1F1F2'
        
   
     },
     textInput:{
       borderWidth:1,
       borderColor:'#cccccc',
       width:'100%',
      padding:10,
       borderRadius: 5,
       fontSize:18,
      
     },
     buttonContainer:{
      flexDirection:'row',

     },
     Button:{
      width:100,
      marginHorizontal:8,
      marginTop:10,
      
     },
     image:{
      marginHorizontal:10,
      height:250,
      width:300
     },
})