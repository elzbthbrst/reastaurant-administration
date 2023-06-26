import OrderApi from '../../api/OrderApi'
import TableApi from '../../api/TableApi'
import WaiterApi from '../../api/WaiterApi'
import DishApi from '../../api/DishApi'
import { setOrderList } from './orderActions'
import { setTableList } from './tableActions'
import { setWaiterList } from './waiterActions'
import { setDishList } from './dishActions'
import { showError } from '../../extra/errorMessage'

export function fetchJointListOTW() {
    return (dispatch) => {
        Promise.all([
            OrderApi.getList(),
            TableApi.getList(),
            WaiterApi.getList()
        ])
            .then((res) => {
                dispatch(setOrderList(res[0]))
                dispatch(setTableList(res[1]))
                dispatch(setWaiterList(res[2]))
            })
            .catch(err => showError(err))
    }
}

export function fetchJointListTbWtDs() {
    return (dispatch) => {
        Promise.all([
            TableApi.getList(),
            WaiterApi.getList(),
            DishApi.getList()
        ])
            .then((res) => {
                dispatch(setTableList(res[0]))
                dispatch(setWaiterList(res[1]))
                dispatch(setDishList(res[2]))
            })
            .catch(e => showError(e))
    }

}
