export const orderRules = {
    'tableId' : [
        {
            required: true,
            message: 'You have to chose Table',
        },

    ],
    'waiterId' : [
        {
            required: true,
            message: 'You have to chose Waiter',
        },

    ],
    'dishId' : [
        {
            required: true,
            message: 'Missing sight',
        },

    ],
    'count' : [
        {
            required: true,
            message: 'Missing price',
        },
    ]
}

