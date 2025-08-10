import { configureStore } from "@reduxjs/toolkit";

import loadingReducer from "@/core/presentation/store/loadingSlice";


export const store = configureStore({
    reducer: {
        loading: loadingReducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
