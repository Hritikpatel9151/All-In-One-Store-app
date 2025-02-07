import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  cart:[],
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const {product} = action.payload;
            const existingProduct = state.cart.find(p => p.id === product.id);
            if(existingProduct){
                return state;
            }
            return{...state, cart:[...state.cart, {...product, quantity:1}]};
        },
        removeFromCart:(state,action)=>{
            const {productId} = action.payload;
            return{...state, cart:state.cart.filter(p=>p.id!==productId)};
        },
        incrementQuantity:(state,action)=>{
            const {productId} = action.payload;
            return{...state, cart:state.cart.map(p=>p.id===productId? {...p, quantity:p.quantity+1}:p)};
        },
        decrementQuantity:(state,action)=>{
            const {productId} = action.payload;
            return{...state, cart:state.cart.map(p=>p.id===productId&&p.quantity>1? {...p, quantity:p.quantity-1}:p)};
        },
    },
})
export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity} =cartSlice.actions;

export default cartSlice.reducer;
