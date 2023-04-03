import { createSlice } from "@reduxjs/toolkit";

export interface IDrawerSlice {
    isOpen: boolean,
}

export interface IDrawerState {
    payload: boolean;
}

const initialState: IDrawerSlice = {
    isOpen: false,
};

export const drawerSlice = createSlice({
    name: "drawer",
    initialState,
    reducers: {
        toogleDrawer: (state) => {
            state.isOpen = !state.isOpen;
        },

        setDrawerState: (state, {payload}: IDrawerState) => {
            state.isOpen = payload;
        },
    }
});

export const {toogleDrawer, setDrawerState} = drawerSlice.actions;

export default drawerSlice.reducer;