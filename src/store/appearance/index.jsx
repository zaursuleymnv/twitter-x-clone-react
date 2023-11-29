import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // Dark

    color: {
        primary: '#1d9bf0',
        secondary: '#8ecdf8',
        base: '#e7e9ea',
        baseSecondary: '#71767b'
    },
    backgroundColor: {
        name: 'dark',
        primary: '#000',
        secondary: '#16181c',
        third: '#212327',
        modal: '#5b708366'
        
    },
    fontSize: 16,
    boxShadow: 'rgba(255, 255, 255, .2) 0px 0px 15px, rgba(255, 255, 255, .15) 0px 0px 3px 1px',

    // Dark Blue

    // color: {
    //     primary: '#1d9bf0',
    //     secondary: '#8ecdf8',
    //     base: '#f7f9f9',
    //     baseSecondary: '#8b99a5'
    // },
    // backgroundColor: {
    //     name: 'dim',
    //     primary: '#15202b',
    //     secondary: '#1e2732',
    //     third: '#263340',
    //     modal: '#5b708366'
    // },
    // fontSize: 16,
    // boxShadow: 'rgba(255, 255, 255, .2) 0px 0px 15px, rgba(255, 255, 255, .15) 0px 0px 3px 1px',

    // White

    // color: {
    //     primary: '#1d9bf0',
    //     secondary: '#8ecdf8',
    //     base: '#0f1419',
    //     baseSecondary: '#536471'
    // },
    // backgroundColor: {
    //     name: 'light',
    //     primary: '#fff',
    //     secondary: '#f7f9f9',
    //     third: '#eff3f4',
    //     modal: '#00000066'
    // },
    // fontSize: 16,
    // boxShadow: 'rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px',
}

const appearance = createSlice({
    name: 'appearance',
    initialState,
    reducers: {
        _setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload
        },
        _setColor: (state, action) => {
            state.color = action.payload
        },
        _setFontSize: (state, action) => {
            state.fontSize = action.payload
        },
        _setBoxShadow: (state, action) => {
            state.boxShadow = action.payload
        }
    }
})

export const { _setBackgroundColor, _setColor, _setFontSize, _setBoxShadow } = appearance.actions
export default appearance.reducer