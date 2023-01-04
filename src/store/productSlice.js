import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    product : [],
    infiniteScroll : {
        infinite : false,
        infinite_active : true
    }
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAllProducts : (state, action) => {
            const data = action.payload;
            if(data.length === 0 ) {
                state.infiniteScroll.infinite_active = false
            }
            if(state.product) {
                state.product = [...state.product , ...data];
            } else {
                state.product = data;
            }
            
        },
        infiniteScrollControll : (state, action) => {
            const data = action.payload;
            state.infiniteScroll.infinite = data;
        }

    },
})

// Action creators are generated for each case reducer function
export const { getAllProducts, infiniteScrollControll } = productSlice.actions

export default productSlice.reducer;