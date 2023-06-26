import DishButtons from "../../routes/dishes/DishButtons";

export function getDishColumns() {
    return [
        {
            title: 'Dish Name',
            dataIndex: 'name',
            sorter: (x, y) => x.name.localeCompare(y.name),
            key: 'name',
            width: 200
        },
        {
            title: 'Dish description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Dish price',
            dataIndex: 'price',
            key: 'price',
            width: 100,
            sorter: (x, y) => x.price - y.price,
            align: 'center'
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, dish) => <DishButtons dish = {dish}/>,
            width: 300,
            align: 'center'
        },
    ];
}