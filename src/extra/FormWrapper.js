import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Space, Spin } from 'antd';

export default function FormWrapper ({ id, editId, singleFetch, listFetch, children, }) {
    const dispatch = useDispatch()

    useEffect(() => {
        if (id && !editId) {
            dispatch(singleFetch(id))
        }

        if (listFetch) {
            dispatch(listFetch())
        }
    }, [dispatch, id, editId, listFetch, singleFetch])

    if (id && !editId) {
        return (
            <Space size="middle">
                <Spin size="large" />
            </Space>
        )
    }

    return (
        <div>{children}</div>
    )
}
