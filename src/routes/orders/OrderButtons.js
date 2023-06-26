import { Button, Space } from "antd";
import { WalletOutlined, EditOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import {  useDispatch } from 'react-redux';
import { clearBillOrder, clearEditOrder } from '../../store/actions/orderActions'

export default function OrderButtons({order}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function onBillBtnClick(order) {
        if (order) {
            navigate(`/${order.id}/bill`)
            dispatch(clearBillOrder())
        }
    }

    function onEditBtnClick(order) {
        if (order) {
            navigate(`/${order.id}/edit`)
            dispatch(clearEditOrder())
        }
    }
    return (
        <Space wrap>
            <Button onClick={() => onEditBtnClick(order)}> <EditOutlined /> Edit </Button>
            <Button type="primary" onClick={() => onBillBtnClick(order)}> <WalletOutlined /> Show Bill </Button>
        </Space>
    )
}