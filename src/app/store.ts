import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {counterReducer} from "../model/counterReducer";
import {loadState, saveState} from "../model/localStorage";
import {throttle} from "lodash";

const rootReducer = combineReducers({
    counter: counterReducer,
})

// создание store
export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadState()
})

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store


store.subscribe(throttle(() => {
    saveState({
        counter: store.getState().counter
    });
}, 1000));