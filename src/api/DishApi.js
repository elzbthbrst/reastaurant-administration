export default class DishApi {
    static API = `https://mokapi-server.onrender.com/dishes/`
    static request(url = '', method = 'GET', body) {
        return fetch(DishApi.API + url, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error('cant retrieve dish list from server')
            })
    }

    static getList() {
        return DishApi.request().catch(() => {
            throw new Error('cant retrieve dish list from server')
        }
        )
    }

    static getOne(id) {
        return DishApi.request(id).catch(() => {
            throw new Error('cant retrieve one dish  from server')
        }
        )
    }

    static create(dish) {
        return DishApi.request('', 'POST', dish).catch(() => {
            throw new Error('cant create dish on server')
        }
        )
    }
    static delete(id) {
        return DishApi.request(id, 'DELETE').catch(() => {
            throw new Error('cant delete dish on server')
        }
        )
    }

    static update(id, changes) {
        return DishApi.request(id, 'PUT', changes).catch(() => {
            throw new Error('cant update dish on server')
        }
        )
    }

}



