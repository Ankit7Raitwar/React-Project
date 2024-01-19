import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../feature/todoSlice';

export const visal = configureStore({
    reducer: todoReducer
})