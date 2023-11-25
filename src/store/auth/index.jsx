import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: 'zaur_suleymnv',
        fullname: 'Zaur Suleymanov',
        avatar: 'https://pbs.twimg.com/profile_images/1727084867484016640/VVbQYbhD_400x400.jpg',
    },
    accounts: [
        {
            id: 1,
            username: 'zaur_suleymnv',
            fullname: 'Zaur Suleymanov',
            avatar: 'https://pbs.twimg.com/profile_images/1727084867484016640/VVbQYbhD_400x400.jpg',
        },
        {
            id: 2,
            username: 'elchinmirzayev',
            fullname: 'Elchin Mirzayev',
            avatar: 'https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/333292770_3352666998289712_8597528398118172149_n.jpg?stp=dst-jpg_s100x100&_nc_cat=110&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=X4dEbLQmI0AAX-NyIB4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-waw1-1.cdninstagram.com&oh=00_AfCKvqbx1AaNkIg2l1ZlL4ttoti-xygPq9IW-BizX5DDVQ&oe=6565364E',
        },
    ]
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if(state.currentAccount && action.payload == state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions
export default auth.reducer