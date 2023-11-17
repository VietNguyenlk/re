var initi = {count:5};
function reducer(state=initi,action){
    switch(action.type){
      case 'increment' : return {
        count : state.count +1
      }
      default:
          return state;
    }
  };
  export  default reducer ;