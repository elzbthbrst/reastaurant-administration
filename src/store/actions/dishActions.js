import DishApi from '../../api/DishApi'
import {showError} from '../../extra/errorMessage'

export const ACTION_CREATE_DISH ='ACTION_CREATE_DISH'
export const ACTION_SET_EDIT_DISH ='ACTION_SET_EDIT_DISH'
export const ACTION_DELETE_DISH ='ACTION_DELETE_DISH'
export const ACTION_UPDATE_LIST ='ACTION_UPDATE_LIST'
export const ACTION_SET_DISH_LIST ='ACTION_SET_DISH_LIST'
export const ACTION_CLEAR_EDIT_DISH = 'ACTION_CLEAR_EDIT_DISH'

export function fetchDishList() {
    return (dispatch) => {
        DishApi.getList().then((serverList) => {
            dispatch(setDishList(serverList))
        }).catch(e => showError(e))
    }
}

export function fetchOneWDish(id) {
    return (dispatch) => {
        DishApi.getOne(id).then((dish) => {
            dispatch(setEditDish(dish))
        }).catch(e => showError(e))
    }
}

export function deleteDish(dish) {
    return (dispatch) => {
        DishApi.delete(dish.id).then(() => {
            dispatch(remove(dish))
        }).catch(e => showError(e))
    }
}

export function save(dish) {
    return (dispatch) => {
        if(dish.id) {
        DishApi.update(dish.id, dish).then((dish) => {
            dispatch(updateList(dish))
        }).catch(e => showError(e))
    } else {
        DishApi.create(dish).then((serverDish) => {
            dispatch(create(serverDish)) 
        }).catch(e => showError(e))
    }
    }
    
}

export function create(dish) {
    return{ type: ACTION_CREATE_DISH, payload: dish}
}

export function remove(dish) {
    return{ type: ACTION_DELETE_DISH, payload: dish}
}

export function clearEditDish() {
    return{ type: ACTION_CLEAR_EDIT_DISH}
}

export function setEditDish(dish) {
    return{ type: ACTION_SET_EDIT_DISH, payload: dish}
}

export function updateList(dish) {
    return{ type: ACTION_UPDATE_LIST, payload: dish}
}


export function setDishList(serverList) {
    return{ type: ACTION_SET_DISH_LIST, payload: serverList}
}

