import { createSelector } from "reselect";
import { RootState } from "../store";


export const mapStateSelector = ({map}: RootState) => map;

export const currentLatitude = createSelector(mapStateSelector, (state) => state.lat);

export const currentLongitude = createSelector(mapStateSelector, (state) => state.lng);

export const currentCaption = createSelector(mapStateSelector, (state) => state.text);