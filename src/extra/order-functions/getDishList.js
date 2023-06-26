export function getDishList(list) {
    let i = 1
    const dishList = list.map((dish) => {
        return {
            id: i++,
            count: parseInt(dish.count),
            dishId: dish.dishId
        }
    });
    return dishList
}