import { StyleSheet, View, Text, Pressable} from "react-native";
function Goalitem(props){
 

    return(
        <Pressable 
        android_ripple={{ opacity:0.3 }}
         onPress={props.onDeleteItem.bind(this, props.id)} 
         style={({pressed})=>pressed && styles.presseditem}
        
         > 
          <View style={styles.goalItem} >
            
          <Text style={styles.goalText}>{props.text}</Text>
        
          </View>
    </Pressable>
    
    )
}
export default Goalitem;

const styles= StyleSheet.create({
    goalItem:{
        marginTop:10,
        borderRadius:5,
        backgroundColor:'#34A854',
        color:'white',
       
        fontSize:15,
        width:'98%',
        flexDirection:'row',
        alignItems:'baseline' 
      },
      goalText:{
        color:'white',
      padding:8
      },
      presseditem:{
      opacity:0.7
      }
      
})