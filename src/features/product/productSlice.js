import {createAsyncThunk,createSlice}from'@reduxjs/toolkit'

import {fetchAllProucts,fetchProductsByFillters}from'./productApi'
const initialState = {
  products:[],
  status:''
};
export const fetchAllProuctsAsync = createAsyncThunk('product/fetchCount',async()=>{
  const response = await fetchAllProucts()
  return response.data;
})

export const fetchProductsByFilltersAsync = createAsyncThunk('product/fetchProductFilter',async(filter)=>{
  const response = await fetchProductsByFillters(filter);
  return response.data;
})
 const productSlice = createSlice({
  name:'product',
  initialState,
  reducers:{
    
  },
  extraReducers:{
    [fetchAllProuctsAsync.pending] :(state,action)=>{
      state.loading = 'loading'
    },
    [fetchAllProuctsAsync.fulfilled]:(state,action)=>{
      state.products= action.payload;
      state.status = 'idle'
    },
    [fetchProductsByFilltersAsync.pending]:(state,action)=>{
      state.loading = 'loading'
    },[
      fetchProductsByFilltersAsync.fulfilled
    ]:(state,action)=>{
      state.loading = 'idle';
      state.products = action.payload
    }
     
  }
})
export const selectAllProducts =(state)=>state.product.products;
export default productSlice.reducer