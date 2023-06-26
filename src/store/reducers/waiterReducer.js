import {
    ACTION_CREATE_WAITER,
    ACTION_CREATE_EDIT_WAITER,
    ACTION_DELETE_WAITER,
    ACTION_UPDATE_LIST,
    ACTION_SET_WAITER_LIST,
    ACTION_CLEAR_EDIT_WAITER
} from '../actions/waiterActions'

export const DEFAULT_WAITER = {
    "firstName": '',
    "phone": ''
}

const initialState = {
    list: [],
    waiterEdit: DEFAULT_WAITER
}

export default function waiterReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_CREATE_WAITER: {
            return {
                ...state,
                list: [
                    ...state.list,
                    { ...payload }
                ]
            }
        }
        case ACTION_CREATE_EDIT_WAITER: {
            return { ...state, waiterEdit: payload }
        }
        case ACTION_CLEAR_EDIT_WAITER: {
            return { ...state, waiterEdit: DEFAULT_WAITER }
        }
        case ACTION_DELETE_WAITER: {
            const newList = state.list.filter(el => el.id !== payload.id)
            return { ...state, list: newList }
        }
        case ACTION_UPDATE_LIST: {
            const updateLIst = state.list.map(el => el.id === payload.id ? payload : el)
            return { ...state, list: updateLIst, waiterEdit: DEFAULT_WAITER }
        }
        case ACTION_SET_WAITER_LIST:
            return { ...state, list: payload, waiterEdit: DEFAULT_WAITER }
        default: return state
    }
}