import OrderButtons from "../../routes/orders/OrderButtons";

export function getOrderColumnsList() {

    return [
        {
            title: 'Table',
            dataIndex: 'table',
            key: 'table',
            render: (_, order) => order.table.number,
            align: 'center'
        },
        {
            title: 'Waiter',
            dataIndex: 'waiter',
            key: 'waiter',
            render: (_, order) => order.waiter.firstName,
            align: 'center'

        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, order) => (
                <OrderButtons order ={order}/>
            ),
            align: 'center'
        },
    ];
}

export function getOrderColumnsBill() {
    return [
        {
            title: 'Dish Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            align: 'center'

        },
        {
            title: 'Count',
            dataIndex: 'count',
            key: 'count',
            align: 'center'
        },
        {
            title: 'Amount',
            key: 'amount',
            render: (_, dish) => dish.count * dish.price,
            align: 'center'
        },
    ];
}