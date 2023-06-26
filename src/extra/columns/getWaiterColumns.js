import WaiterButtons from "../../routes/waiters/WaiterButtons";

export function getWaiterColumns() {
    return [
        {
            title: 'FirstName',
            dataIndex: 'firstName',
            sorter: (x, y) => x.firstName.localeCompare(y.firstName),
            key: 'firstName',
            align: 'center'
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            align: 'center'

        },
        {
            title: 'Actions',
            key: 'actions',
            align: 'center',
            render: (_, waiter) => (
                <WaiterButtons waiter = {waiter}/>
            )
        },
    ];
}