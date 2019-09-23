import { createStore, combineReducers } from 'redux'

let userReducer = (state = {}, action) => {
    switch (action.type) {
        case "SAVE_USERDATA":
            state = action.data;
            return state;
        default:
            return state
    }
}
//创建仓库
let store = createStore(userReducer)

window.store = store

//抛出
export default store