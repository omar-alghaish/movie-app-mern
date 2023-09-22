import { createSlice } from "@reduxjs/toolkit";

const initialState ={
themeMode: "dark"
}

export const themeModeSlice = createSlice({
    name: "ThemeMode",
    initialState,
    reducers:{
setThemeMode: (state, action) =>{
    state.themeMode = action.payload
}
    }
})


export const {
setThemeMode
} = themeModeSlice.actions;

export default themeModeSlice.reducer