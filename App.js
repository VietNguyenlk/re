import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';


// actions object
var increment = {type:'increment'} // or function return object
var initi = {count:0}
function reducer(state=initi,action){
  switch(action.type){
    case 'increment' : return {
      count : state.count +1
    }
    default:
        return state;
  }
};
var store = createStore(reducer);





export default function App() {
  var [count,setCount] =useState(0);
  return (
    <View style={styles.container}>
      <Text>this count is: {count}</Text>
      <Pressable style={{width:100,height:100,backgroundColor: 'gray'}} onPress={()=>{
        store.dispatch(increment);
        console.log(store.getState());
        setCount(store.getState().count)
      }}>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
