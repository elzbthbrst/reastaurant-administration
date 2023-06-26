import { createSelector } from 'reselect'

export const selectDishList = state => state.dish.list
export const selectDishEdit= state => state.dish.dishEdit

export const selectWaiterList = state => state.waiter.list
export const selectWaiterEdit= state => state.waiter.waiterEdit

export const selectTableList = state => state.table.list
export const selectTableEdit= state => state.table.tableEdit

export const selectOrderList = state => state.order.list
export const selectOrderEdit= state => state.order.orderEdit
export const selectOrderBill= state => state.order.orderBill

export const selectJointOrders = createSelector(
    selectTableList,
    selectWaiterList,
    selectOrderList,
    (tableList, waiterList, orderList) => {
       const newTableList = tableList.reduce((list, table)=>{
        list[table.id] = table

        return list
       },{})

       const newWaiterList = waiterList.reduce((list, waiter)=>{
        list[waiter.id] = waiter

        return list
       },{})

       return orderList.map((order) => ({
        ...order,
        table: newTableList[order.tableId],
        waiter: newWaiterList[order.waiterId]
       })) 
    }
)

export const selectOptions = createSelector(
    selectTableList,
    selectWaiterList,
    selectDishList,
    (tableList, waiterList, dishList) => {
        const newTableList = tableList.map((table) => {
            return {
                'label' : `Table number ${table.number}` ,
                'value' : table.id
            }
        })

        const newWaiterList = waiterList.map((waiter) => {
            return {
                'label' : waiter.firstName ,
                'value' : waiter.id
            }
        })

        const newDishList = dishList.map((dish) => {
            return {
                'label' : dish.name ,
                'value' : dish.id
            }
        })

        return {
            table: newTableList,
            waiter: newWaiterList,
            dish : newDishList
        }

    }
)

export const selectOrderBillFull = createSelector(
    selectDishList,
    selectOrderBill, 
    (dishList, orderBill ) => {
        const newDishList = dishList.reduce((list, dish) => {
            list[dish.id] = dish

            return list
        }, {})
        const orderDishes = orderBill.dishes.map((dish) => {
            return {
                ...dish,
                'name' : newDishList[dish.dishId].name,
                'price' : newDishList[dish.dishId].price,
            }
        })
        return {
            ...orderBill,
            'dishes' : orderDishes,
        }
    }
)


export const selectOrderEditSelect = createSelector(
    selectOrderEdit,
    (orderEdit) => {
        const dishes = orderEdit.dishes.map((dish) => {
            return dish.dishId
        })
        return {
            ...orderEdit,
            "dishes": dishes
        }
    }
)