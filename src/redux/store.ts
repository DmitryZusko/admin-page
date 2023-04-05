import { EnhancedStore , configureStore} from "@reduxjs/toolkit";
import { drawerReducer } from "./Drawler";
import { mapControlReducer } from "./MapControl";


let store: EnhancedStore;

const createStore = <T>(preloadedState?: T) => 
    configureStore({
        reducer: {
            drawer: drawerReducer,
            map: mapControlReducer,
        },
        preloadedState,
    });


export const initializeStore = (preloadedState?: RootState): Store => {

    let newStore = store ?? createStore(preloadedState);

    if(preloadedState && store) {
        newStore = createStore({ ...store.getState(), ...preloadedState});
    };

    if(!store) {
        store = newStore;
    };

    return newStore;
};

export type Store = ReturnType<typeof createStore>;
export type RootState = ReturnType<Store["getState"]>;