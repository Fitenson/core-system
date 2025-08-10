import { createSlice } from "@reduxjs/toolkit";


const loadingState = createSlice({
    name: 'loading',
    initialState: { global: false },
    reducers: {
        setLoading(state, action) {
            state.global = action.payload;
        }
    }
});

export const { setLoading } = loadingState.actions;
export default loadingState.reducer;
