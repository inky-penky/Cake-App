import { createSlice } from '@reduxjs/toolkit';


const cakeReducer = createSlice({
    name:'cake',
    initialState: 100,
    reducers:{
      buyCake(state, action){
        return {...state,
                cake: state.cake - 1
            }
      }     
    }
  })



export const {buyCake} =  cakeReducer.actions
export default cakeReducer.reducer