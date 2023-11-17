import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import increment from './redux/actions';
// import reducer from './redux/reducer';
import store from './redux/store';
import { Provider } from 'react-redux';
import Counter from './Counter';




export default function App()
 {
  var [count,setCount] =useState(0);
 
  return (
    <Provider store={store}> 

      <Counter/>
      <Counter/>
    </Provider>
  );
}


