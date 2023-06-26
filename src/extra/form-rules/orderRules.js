
const COUNT_TEMPLATE = /^\d{1,2}$/

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
            pattern: COUNT_TEMPLATE,
            message: 'Must be not longer then 3 symbols'
        },
        {
            required: true,
            message: 'Missing price',
        },
    ]
}

