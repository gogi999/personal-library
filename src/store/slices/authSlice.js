import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    isLoggedIn: true, 
    loading: false,
    error: null
}

export const fetchRandomUser = createAsyncThunk(
    'auth/fetchRandomUser',
    async () => {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            return data.results[0];
        } catch (error) {
            throw Error(error);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state, action) {
            state.isLoggedIn = false;
        }
    },
    extraReducers: {
        [fetchRandomUser.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchRandomUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        [fetchRandomUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
