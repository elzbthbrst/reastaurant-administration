export default class OrderApi {
    static API = `https://mock-api-5678.nw.r.appspot.com/orders/`
    static request(url = '', method = 'GET', body) {
        return fetch(OrderApi.API + url, {
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
                throw new Error('cant retrieve ORDER from server')
            })
    }

    static getList() {
        return OrderApi.request().catch(() => {
            throw new Error('cant retrieve order list from server')
        }
        )
    }

    static getOne(id) {
        return OrderApi.request(id).catch(() => {
            throw new Error('cant retrieve one order  from server')
        }
        )
    }

    static create(order) {
        return OrderApi.request('', 'POST', order).catch(() => {
            throw new Error('cant create order on server')
        }
        )
    }
    static delete(id) {
        return OrderApi.request(id, 'DELETE').catch(() => {
            throw new Error('cant delete order on server')
        }
        )
    }

    static update(id, changes) {
        return OrderApi.request(id, 'PUT', changes).catch(() => {
            throw new Error('cant update order on server')
        }
        )
    }

}



