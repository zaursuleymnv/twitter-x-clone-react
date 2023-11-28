import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // color: {
    //     primary: '#1d9bf0',
    //     secondary: '#8ecdf8',
    //     base: '#e7e9ea'
    // },
    // backgroundColor: {
    //     primary: '#000',
    //     secondary: '#16181c',
    //     third: '#273340'
    // },
    // fontSize: 16,

    color: {
        primary: '#1d9bf0',
        secondary: '#8ecdf8',
        // base: '#f7f9f9',
        base: 'red',
    },
    backgroundColor: {
        primary: '#15202b',
        secondary: '#1e2732',
        third: '#263340'
    },
    fontSize: 16,
}

const appearance = createSlice({
    name: 'appearance',
    initialState,
    reducers: {
        _setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload
        },
        _setColor: state => {
            state.color = action.payload
        },
        _setFontSize: state => {
            state.fontSize = action.payload
        }
    }
})

export const { _setBackgroundColor, _setColor, _setFontSize } = appearance.actions
export default appearance.reducer