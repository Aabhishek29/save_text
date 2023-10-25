import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    user: {},
    isAuth: false
}

const counterData = createSlice({
    name: "data",
    initialState,
    reducers: {
        toggleAuth: (state) => {
            state.isAuth = !state.isAuth;
        }
        // toggleLikeCities: (state, action) => {
        //     console.log(`The value we get is ${action.payload}`)
        //     state.citiesInfo[action.payload].like = !state.citiesInfo[action.payload].like
        // }
    }
})

export default counterData;