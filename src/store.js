import { configureStore,createSlice } from "@reduxjs/toolkit";


let cartitems = createSlice({
    name : 'cartitems' ,
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 1, name : 'Grey Yordan', count : 1},
      ], 
      reducers: {
        newCount(state,action){
            let pick = state.filter(el => el.name === action.payload.name)[0]
            pick.count+=1;
        },

        newItem (state, action){
         return  [...state, action.payload]
        }
      }
})





export let {newCount, newItem} = cartitems.actions

export default configureStore({
    reducer: {
        cartitems : cartitems.reducer,
    }
})