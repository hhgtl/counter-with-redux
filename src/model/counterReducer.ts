import {createAction, createReducer} from '@reduxjs/toolkit'

export const incrimentAC = createAction('app/incriment')
export const resetCountAC = createAction('app/resetCount')
export const setMaxValueAC = createAction<{maxValue: number}>('app/setMaxValue')
export const setStartValueAC = createAction<{startValue: number}>('app/setStartValue')
export const setCountAC = createAction<{countValue: number}>('app/setCount')


const initialState: counterState = {
    count: 0,
    maxValue: 5,
    startValue: 0
}

export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(incrimentAC, (state) => {
            state.count += 1
        })
        .addCase(resetCountAC, (state) => {
            state.count = state.startValue
        })
        .addCase(setMaxValueAC, (state, action) => {
            state.maxValue = action.payload.maxValue
        })
        .addCase(setStartValueAC, (state, action) => {
            state.startValue = action.payload.startValue
        }).addCase(setCountAC, (state, action) => {
            state.count = action.payload.countValue
        })

})


export type counterState = {
    count: number
    maxValue: number
    startValue: number
}

