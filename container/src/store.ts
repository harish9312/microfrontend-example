import { configureStore, createSlice } from '@reduxjs/toolkit'
import { modelReducer } from './reducers/modelReducer';

const userReducer = createSlice({
    name: "user",
    initialState: {
        name: "Harish Soni",
        newName: ""
    },
    reducers: {
        changeName: (state, action) => {
            console.log("action", action)
            return {
                ...state,
                newName: action.payload.name
            }
        }
    }
})

export const store = configureStore({
    reducer: {
        user: userReducer.reducer,
        model: modelReducer.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export const userActions = {
    changeUser: userReducer.actions.changeName
}