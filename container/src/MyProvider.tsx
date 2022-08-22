import React from 'react'
import { store } from './store'

export const MyProvider = ({ Provider, children }) => {
    console.log('>> store', store.getState());
    return <Provider store={store}> {children}</Provider>
}