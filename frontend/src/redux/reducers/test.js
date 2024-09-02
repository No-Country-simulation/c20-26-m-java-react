import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isConnected: false,
};

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setConnectionStatus: (state, action) => {
            state.isConnected = action.payload;
        },
    },
});

export const { setConnectionStatus } = testSlice.actions;

export default testSlice.reducer;