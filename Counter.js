
import { Pressable, StyleSheet, Text, View } from 'react-native';
import increment from './redux/actions';
// import reducer from './redux/reducer';
import store from './redux/store';
import { connect } from 'react-redux';


const Counter = ({count,increment}) => {
  console.log(increment)
    return(
        <View style={styles.container}>
        <Text>this count is: {count}</Text>
        <Pressable style={{width:100,height:100,backgroundColor: 'gray'}} onPress={increment}
          
          // store.dispatch(increment);
          // console.log(store.getState());
          // setCount(store.getState().count)
          >
        </Pressable>
      </View>
    )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
var  mapStateToProps= (state)=>({

    count: state.count

  })

var mapDispatchToProps =(dispatch)=>(
{increment:()=>{dispatch(increment)}
})  
export default connect(mapStateToProps,mapDispatchToProps)(Counter);