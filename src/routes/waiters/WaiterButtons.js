import { Button, Space } from "antd";
import { deleteWaiter, clearEditWaiter } from '../../store/actions/waiterActions'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

export default function WaiterButtons({ waiter }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function onDeleteClick(waiter) {
        dispatch(deleteWaiter(waiter))
    }

    function onEditBtnClick(waiter) {
        if (waiter) {
            navigate(`/waiters/${waiter.id}/edit`)
            dispatch(clearEditWaiter())
        }
    }
    
    return (
        <Space wrap>
            <Button onClick={() => onEditBtnClick(waiter)}> <EditOutlined /> Edit </Button>
            <Button danger onClick={() => onDeleteClick(waiter)}> <DeleteOutlined />  Delete </Button>
        </Space>
    )
}