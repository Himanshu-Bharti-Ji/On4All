import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const userDefaultState = {
    _id: null,
    firstName: null,
    lastName: null,
    email: null,
    token: null
};

const initialState = {
    user: userDefaultState,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const login = createAsyncThunk(
    "auth/admin-login",
    async (user, thukAPI) => {
        try {
            return await authService.login(user);
        } catch (error) {
            return thukAPI.rejectWithValue(error);
        }
    }
)


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
                isError = true;
                state.isSuccess = false;
                state.user = null;
            })
    },
});


export default authSlice.reducer;