import {
    ACTION_CREATE_TABLE,
    ACTION_CREATE_EDIT_TABLE,
    ACTION_DELETE_TABLE,
    ACTION_UPDATE_LIST,
    ACTION_SET_TABLE_LIST,
    ACTION_CLEAR_EDIT_TABLE
} from '../actions/tableActions'

export const DEFAULT_TABLE = {
    "number": ''
}

const initialState = {
    list: [],
    tableEdit: DEFAULT_TABLE
}

export default function tableReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_CREATE_TABLE: {
            return {
                ...state,
                list: [
                    ...state.list,
                    { ...payload }
                ]
            }
        }
        case ACTION_CREATE_EDIT_TABLE: {
            return { ...state, tableEdit: payload }
        }
        case ACTION_CLEAR_EDIT_TABLE: {
            return { ...state, tableEdit: DEFAULT_TABLE }
        }
        case ACTION_DELETE_TABLE: {
            const newList = state.list.filter(el => el.id !== payload.id)
            return { ...state, list: newList }
        }
        case ACTION_UPDATE_LIST: {
            const updateLIst = state.list.map(el => el.id === payload.id ? payload : el)
            return { ...state, list: updateLIst, tableEdit: DEFAULT_TABLE }
        }
        case ACTION_SET_TABLE_LIST:
            return { ...state, list: payload, tableEdit: DEFAULT_TABLE }
        default: return state
    }
}