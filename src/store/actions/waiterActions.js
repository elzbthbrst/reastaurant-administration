import WaiterApi from '../../api/WaiterApi'
import { showError } from '../../extra/errorMessage'

export const ACTION_CREATE_WAITER ='ACTION_CREATE_WAITER'
export const ACTION_CREATE_EDIT_WAITER ='ACTION_CREATE_EDIT_WAITER'
export const ACTION_DELETE_WAITER ='ACTION_DELETE_WAITER'
export const ACTION_UPDATE_LIST ='ACTION_UPDATE_LIST'
export const ACTION_SET_WAITER_LIST ='ACTION_SET_WAITER_LIST'
export const ACTION_CLEAR_EDIT_WAITER ='ACTION_CLEAR_EDIT_WAITER'

export function fetchWaiterList() {
    return (dispatch) => {
        WaiterApi.getList().then((serverList) => {
            dispatch(setWaiterList(serverList))
        }).catch(e => showError(e))
    }
}

export function fetchOneWaiter(id) {
    return (dispatch) => {
        WaiterApi.getOne(id).then((waiter) => {
            dispatch(setEditWaiter(waiter))
        }).catch(e => showError(e))
    }
}

export function deleteWaiter(waiter) {
    return (dispatch) => {
        WaiterApi.delete(waiter.id).then(() => {
            dispatch(remove(waiter))
        }).catch(e => showError(e))
    }
}

export function save(waiter) {
    return (dispatch) => {
        if(waiter.id) {
        WaiterApi.update(waiter.id, waiter).then((waiter) => {
            dispatch(updateList(waiter))
        }).catch(e => showError(e))
    } else {
        WaiterApi.create(waiter).then((serverWaiter) => {
            dispatch(create(serverWaiter)) 
        }).catch(e => showError(e))
    }
    }
    
}

export function create(waiter) {
    return{ type: ACTION_CREATE_WAITER, payload: waiter}
}

export function remove(waiter) {
    return{ type: ACTION_DELETE_WAITER, payload: waiter}
}

export function clearEditWaiter() {
    return{ type: ACTION_CLEAR_EDIT_WAITER}
}

export function setEditWaiter(waiter) {
    return{ type: ACTION_CREATE_EDIT_WAITER, payload: waiter}
}

export function updateList(waiter) {
    return{ type: ACTION_UPDATE_LIST, payload: waiter}
}

export function setWaiterList(serverList) {
    return{ type: ACTION_SET_WAITER_LIST, payload: serverList}
}

