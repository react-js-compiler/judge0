import {combineReducers} from"redux"
import theme from "./theme";
import language_id from "./language_id";
export const allReducer = combineReducers({
    theme : theme,
    language_id: language_id
})