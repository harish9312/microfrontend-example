import { createSlice } from '@reduxjs/toolkit';
import { OrderedMap } from 'immutable';
export const modelReducer = createSlice({
    name: "model",
    initialState: OrderedMap({}),
    reducers: {
        saveInstance: (state, action) => {
            return state.set(action.payload.modelId, action.payload.instance)
        }
    }
})