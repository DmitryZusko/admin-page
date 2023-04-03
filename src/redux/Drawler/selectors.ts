import { createSelector } from "reselect";
import { RootState } from "../store";


export const drawerStateSelector = ({drawer}: RootState) => drawer;

export const drawerState = createSelector(drawerStateSelector, (state) => state.isOpen);