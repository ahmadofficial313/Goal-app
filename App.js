import { StyleSheet, Text, View , FlatList, Button, Image, SafeAreaView,} from 'react-native';
import Goalinput from './components/Goalinput'
import { useState } from 'react';
import Goalitem from './components/Goalitem';
import ImageSlider from './components/ImageSlider'
export default function App() {
  const[goalList, setGoalList]= useState([ ])
  const [modalIsVisble,setModalIsVisible]= useState(false)
  
  function addGoalHandler(goalText){
    setGoalList((prev)=>[...prev, {text:goalText, id:Math.random().toString()}])
    setModalIsVisible(false);
    
  }
  function startGoalModal(){
    setModalIsVisible(true);  
  }  
  function endGoalModal(){
    setModalIsVisible(false);
  } 

  function deleteGoalHandler(id){
   setGoalList((cGoal)=>{
    return cGoal.filter((goal)=> goal.id !==id)
   }) 
  }
  return (
    <>
    <View style={styles.appContainer}>
      <Text style={{textAlign:'center' ,fontSize:20, color:'#4286F5', marginTop:5, fontWeight:'800'}}>My Goal App</Text>
    
     
          <ImageSlider/>     
      
      <View style={styles.list}>
          <Text style={{fontWeight:'bold',color:'#EB4435', fontSize:20}} >
            List of Your goals...
          </Text>
          <View style={styles.Button}>
               <Button title='Add new Goal' onPress={startGoalModal} color="#FBBC05"/>
            </View>
        
        
      </View>
      <Goalinput visible={modalIsVisble}  addGoal={addGoalHandler} onCancel={endGoalModal}/> 
      <View style={styles.goalContainer} >  
     
      
      <FlatList data={goalList} alwaysBounceVertical='false' renderItem={(itemData)=>{
        return(
         <Goalitem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>
        )
      }}
      keyExtractor={(item, index)=>{
        return item.id;
      }}
      /> 
      
       
  
      
     
       </View>
       
    </View> 
    <View style={styles.foot}>
      <Text style={styles.text}>Copyright &copy; My Goal App - All rights are reserved</Text>
    <Text style={styles.text}>Powered by Dev Entity</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop:10,
  
    flex:3,
    marginTop:30
    
    
    
  }, 
  
 
  goalContainer:{
  flex:5,
  paddingHorizontal:16
  },
  list:{
    flexDirection:'row',
    alignItems:'baseline',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
    paddingVertical:2,
    marginTop:20,
    marginHorizontal:16
    
  },
  Button:{
    width:'40%',
    marginHorizontal:8,
  
    
   },
   foot:{
    alignItems:'center',
    backgroundColor:'#34A854',
    
    position:'static',
    bottom:0,
    paddingVertical:10
   },
   text:{
    color:'white'
   },
   images:{
  
    height:200,
    width:330,
    borderBottomWidth:1
   },
 
});
