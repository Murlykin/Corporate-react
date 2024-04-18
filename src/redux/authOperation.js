import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../service/AuthUserAPI";
import { toast } from "react-toastify";
import axios from 'axios';



export const signUp = createAsyncThunk(
    "api/help",
    async (userData, thunkAPI) => {
        try {
            const resp = await axios.post("/api/help", userData);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const register = createAsyncThunk("api/help", async (credentials, thunkAPI) => {
    try {
        const data = await api.postUser(credentials);
        return data;
    } catch (error) {
        if (error.response.status === 400) {
            toast.error(`${error.response?.data?.message}!`);
        }
        if (error.response.status === 409) {
            toast.error(`This email already in use `);
        }
        return thunkAPI.rejectWithValue(error.message);
    }
});
