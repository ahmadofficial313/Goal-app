import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, Image, Dimensions } from 'react-native';
const screenWidth= Dimensions.get('window').width;
const IMAGE_HEIGHT = 200;

function ImageSlider() {
  const[activeindex, setActiveindex]=useState(0)
  const flatref=useRef(null)

  //auto scrool
 


  //slider items
  const imageItem = [
    { id: '1', image: require('../assets/images/a.png') },
    { id: '2', image: require('../assets/images/b.png') },
    { id: '3', image: require('../assets/images/c.png') },
    { id: '4', image: require('../assets/images/d.png') },
  ];

  //  renderItem 
  const renderItem = ({ item }) => (
    <View>
      <Image source={item.image} style={{ height: IMAGE_HEIGHT, width: screenWidth}} />
    </View>
  );

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });


  ///handel scroll to get curent index
  const handleScroll=(event )=>{
    const scrollPosition= event.nativeEvent.contentOffset.x;
   
    const index= scrollPosition / screenWidth;
     
    setActiveindex(index)
    
   }

   /// render indicator
  const renderdotIndicator=()=>{
    return imageItem.map((dot,index)=>{
      if(activeindex===index){
        return (
          <View key={index} style={{width:10, height:10, backgroundColor:'#EB4435', borderRadius:5, marginHorizontal:5}}></View>
        ) 
      }
      else{
      return (
        <View key={index} style={{width:10, height:10, backgroundColor:'#cccccc', borderRadius:5, marginHorizontal:5}}></View>
      )}
    })
  }
////auto returing
useEffect(() => {
  const intervalId = setInterval(() => {
    setActiveindex(prevIndex => {
      const nextIndex = (prevIndex + 1) % imageItem.length;
      flatref.current.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      return nextIndex;
    });
    
  }, 3000); // Change interval time as needed

  return () => clearInterval(intervalId); // Cleanup interval on component unmount
}, []);


  return (
    <View style={{marginTop:20}}>
     
      <FlatList
    showsHorizontalScrollIndicator={false}
      ref={flatref}
      getItemLayout={getItemLayout} 
        data={imageItem}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} // Ensure each item has a unique key
        horizontal={true}
        onScroll={handleScroll}
        pagingEnabled={true}
      /> 
      <View style={{flexDirection:'row', justifyContent:'center',marginTop:30}}>{renderdotIndicator()}</View>
    </View>
  );
}

export default ImageSlider;
