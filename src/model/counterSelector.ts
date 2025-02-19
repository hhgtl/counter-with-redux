import {counterState} from "./counterReducer";
import {RootState} from "../app/store";

export const counterSelector = (state: RootState): counterState => state.counter