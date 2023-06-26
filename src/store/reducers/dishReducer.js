import {
    ACTION_CREATE_DISH,
    ACTION_SET_EDIT_DISH,
    ACTION_DELETE_DISH,
    ACTION_UPDATE_LIST,
    ACTION_CLEAR_EDIT_DISH,
    ACTION_SET_DISH_LIST
} from '../actions/dishActions'

export const DEFAULT_DISH = {
    "name": '',
    "description": "",
    "price": ''
}

const initialState = {
    list: [],
    dishEdit: DEFAULT_DISH
}

export default function dishReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_CREATE_DISH: {
            return {
                ...state,
                list: [
                    ...state.list,
                    { ...payload }
                ]
            }
        }
        case ACTION_SET_EDIT_DISH: {
            return { ...state, dishEdit: payload }
        }
        case ACTION_CLEAR_EDIT_DISH: {
            return { ...state, dishEdit: DEFAULT_DISH }
        }
        case ACTION_DELETE_DISH: {
            const newList = state.list.filter(el => el.id !== payload.id)
            return { ...state, list: newList }
        }
        case ACTION_UPDATE_LIST: {
            const updateLIst = state.list.map(el => el.id === payload.id ? payload : el)
            return { ...state, list: updateLIst, dishEdit: DEFAULT_DISH }
        }
        case ACTION_SET_DISH_LIST:
            return { ...state, list: payload, dishEdit: DEFAULT_DISH }
        default: return state
    }
}