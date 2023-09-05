export default class TableApi {
    static API = `https://mokapi-server.onrender.com/tables/`
    static request(url = '', method = 'GET', body) {
        return fetch(TableApi.API + url, {
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
                throw new Error('cant retrieve table list from server')
            })
    }

    static getList() {
        return TableApi.request().catch(() => {
            throw new Error('cant retrieve table list from server')
        }
        )
    }

    static getOne(id) {
        return TableApi.request(id).catch(() => {
            throw new Error('cant retrieve one table  from server')
        }
        )
    }

    static create(table) {
        return TableApi.request('', 'POST', table).catch(() => {
            throw new Error('cant create table on server')
        }
        )
    }
    static delete(id) {
        return TableApi.request(id, 'DELETE').catch(() => {
            throw new Error('cant delete table on server')
        }
        )
    }

    static update(id, changes) {
        return TableApi.request(id, 'PUT', changes).catch(() => {
            throw new Error('cant update table on server')
        }
        )
    }

}



