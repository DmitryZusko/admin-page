import { createSlice } from "@reduxjs/toolkit";


export interface IMapControlSlice {
    lat: number,
    lng: number,
    text: string,
};

export interface IMapcontrolState {
    payload: IMapControlSlice,
};

const initialState: IMapControlSlice = {
    lat: 6.1675627482740945,
    lng: -5.348841257035714,
    text: "Село в Африці",
};

export const mapControlSlice = createSlice({
    name: "map",
    initialState,
    reducers: {
        setNewCoordinates: (state, {payload}: IMapcontrolState) => {
            state.lat = payload.lat;
            state.lng = payload.lng;
            state.text = payload.text;
        },
    }
});

export const {setNewCoordinates} = mapControlSlice.actions;

export default mapControlSlice.reducer;