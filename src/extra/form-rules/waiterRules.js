const PHONE_TEMPLATE = /^\d{3}-\d{2}-\d{2}$/
const FIRST_NAME_TEMPLATE = /^[A-Z]{1}[a-z]{2,10}$/

export const waiterRules = {
    'firstName': [
        {
            pattern: FIRST_NAME_TEMPLATE,
            message: 'Must start from uppercase symbol',
        },
        {
            min: 4,
            message: 'FirstName must be > 3 symbols',
        },
        {
            required: true,
            message: 'Please input your username!',
        },
    ],
    'phone': [
        {
            pattern: PHONE_TEMPLATE,
            message: 'Must be 000-00-00',
        },
        {
            required: true,
            message: 'Please input your phone!',
        },
    ],
}