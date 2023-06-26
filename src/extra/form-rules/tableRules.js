const TABLE_TEMPLATE = /^\d{1,2}$/

export function getTableRules(list) {
    return [
        () => ({
            validator(_, value) {
                for(let table of list) {
                    if(table.number === Number(value)) {
                        return Promise.reject(new Error('You should create new table'));
                    }
                }
                return Promise.resolve();
            },
        }),
        {
            pattern: TABLE_TEMPLATE,
            message: 'Must be not longer then 3 symbols'
        },
        {
            required: true,
            message: 'Please input number of table!'
        },

    ]
}

