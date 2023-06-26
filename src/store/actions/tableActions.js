import TableApi from '../../api/TableApi'
import { showError } from '../../extra/errorMessage'

export const ACTION_CREATE_TABLE = 'ACTION_CREATE_TABLE'
export const ACTION_CREATE_EDIT_TABLE = 'ACTION_CREATE_EDIT_TABLE'
export const ACTION_DELETE_TABLE = 'ACTION_DELETE_TABLE'
export const ACTION_UPDATE_LIST = 'ACTION_UPDATE_LIST'
export const ACTION_SET_TABLE_LIST = 'ACTION_SET_TABLE_LIST'
export const ACTION_CLEAR_EDIT_TABLE = 'ACTION_CLEAR_EDIT_TABLE'

export function fetchTableList() {
    return (dispatch) => {
        TableApi.getList().then((serverList) => {
            dispatch(setTableList(serverList))
        }).catch(e => showError(e))
    }
}

export function fetchOneTable(id) {
    return (dispatch) => {
        TableApi.getOne(id).then((table) => {
            dispatch(setEditTable(table))
        }).catch(e => showError(e))
    }
}

export function deleteTable(table) {
    return (dispatch) => {
        TableApi.delete(table.id).then(() => {
            dispatch(remove(table))
        }).catch(e => showError(e))
    }
}

export function save(table) {
    return (dispatch) => {
        if (table.id) {
            TableApi.update(table.id, table).then((table) => {
                dispatch(updateList(table))
            }).catch(e => showError(e))
        } else {
            TableApi.create(table).then((serverTable) => {
                dispatch(create(serverTable))
            }).catch(e => showError(e))
        }
    }

}

export function create(table) {
    return { type: ACTION_CREATE_TABLE, payload: table }
}

export function remove(table) {
    return { type: ACTION_DELETE_TABLE, payload: table }
}

export function setEditTable(table) {
    return { type: ACTION_CREATE_EDIT_TABLE, payload: table }
}

export function clearEditTable() {
    return { type: ACTION_CLEAR_EDIT_TABLE }
}

export function updateList(table) {
    return { type: ACTION_UPDATE_LIST, payload: table }
}

export function setTableList(serverList) {
    return { type: ACTION_SET_TABLE_LIST, payload: serverList }
}

