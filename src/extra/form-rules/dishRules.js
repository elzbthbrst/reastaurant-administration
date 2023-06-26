const DISH_PRICE_TEMPLATE = /^\d{1,2}$/
export const dishRules = {
    'name': [
        {
            min: 4,
            message: 'Dish name must be > 3 symbols',
        },
        {
            required: true,
            message: 'Please input dish name!',
        },
    ],
    'description': [
        () => ({
            validator(_, value) {
                let description = value.split(' ')
                if(description.length <= 5) {
                    return Promise.reject(new Error('Description must be longer then 5 words'));
                }
                return Promise.resolve();
            },
        }),
        {
            required: true,
            message: 'Please input dish description!',
        },
    ], 
    'price': [
        {
            pattern: DISH_PRICE_TEMPLATE,
            message: 'Dish price must be < 3 symbols',
        },
        {
            required: true,
            message: 'Please input dish price!',
        },
    ],

}