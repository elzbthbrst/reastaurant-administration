const TABLE_TEMPLATE = /^\d{1,2}$/

export const tableRules = {
    'number': [
        {
            pattern: TABLE_TEMPLATE,
            message: 'Must be not longer then 3 symbols'
        },
        {
            required: true,
            message: 'Please input number of table!'
        },
    ],
}

