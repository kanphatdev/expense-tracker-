import { createSlice } from '@reduxjs/toolkit';
const intialState ={
    categories:[],
    transaction:[]
}

export const expenSlice = createSlice({
name:'expense',
intialState,
reducers:{
getTransaction:(state)=>{

}
}

})

export const {getTransaction}= expenSlice.actions;
export default expenSlice.reducer;