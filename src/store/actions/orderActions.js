import OrderApi from '../../api/OrderApi'
import { showError } from '../../extra/errorMessage'

export const ACTION_CREATE_ORDER ='ACTION_CREATE_ORDER'
export const ACTION_SET_EDIT_ORDER ='ACTION_SET_EDIT_ORDER'
export const ACTION_DELETE_ORDER ='ACTION_DELETE_ORDER'
export const ACTION_UPDATE_LIST ='ACTION_UPDATE_LIST'
export const ACTION_SET_ORDER_LIST ='ACTION_SET_ORDER_LIST'
export const ACTION_CLEAR_EDIT_ORDER ='ACTION_CLEAR_EDIT_ORDER'
export const ACTION_SET_BILL_ORDER = 'ACTION_SET_BILL_ORDER'
export const ACTION_CLEAR_BILL_ORDER = 'ACTION_CLEAR_BILL_ORDER'

export function fetchOrderList() {
    return (dispatch) => {
        OrderApi.getList().then((serverList) => {
            dispatch(setOrderList(serverList))
        }).catch(e => showError(e))
    }
}

export function fetchOneOrder(id) {
    return (dispatch) => {
        OrderApi.getOne(id).then((order) => {
            dispatch(setEditOrder(order))
        }).catch(e => showError(e))
    }
}

export function fetchOneBillOrder(id) {
    return (dispatch) => {
        OrderApi.getOne(id).then((order) => {
            dispatch(setBillOrder(order))
        }).catch(e => showError(e))
    }
}

export function deleteOrder(order) {
    return (dispatch) => {
        OrderApi.delete(order.id).then(() => {
            dispatch(remove(order))
        }).catch(e => showError(e))
    }
}

export function save(order) {
    return (dispatch) => {
        if(order.id) {
        OrderApi.update(order.id, order).then((order) => {
            dispatch(updateList(order))
        }).catch(e => showError(e))
    } else {
        OrderApi.create(order).then((serverOrder) => {
            dispatch(create(serverOrder)) 
        }).catch(e => showError(e))
    }
    }
    
}

export function create(order) {
    return{ type: ACTION_CREATE_ORDER, payload: order}
}

export function remove(order) {
    return{ type: ACTION_DELETE_ORDER, payload: order}
}


export function setEditOrder(order) {
    return{ type: ACTION_SET_EDIT_ORDER, payload: order}
}

export function setBillOrder(order) {
    return{ type: ACTION_SET_BILL_ORDER, payload: order}
}

export function clearEditOrder() {
    return{ type: ACTION_CLEAR_EDIT_ORDER}
}

export function clearBillOrder() {
    return{ type: ACTION_CLEAR_BILL_ORDER}
}

export function updateList(order) {
    return{ type: ACTION_UPDATE_LIST, payload: order}
}

export function setOrderList(serverList) {
    return{ type: ACTION_SET_ORDER_LIST, payload: serverList}
}

