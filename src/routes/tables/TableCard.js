import '../../style/App.css'
import { Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { clearEditTable, deleteTable } from '../../store/actions/tableActions'

export default function TableCard({ table }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function onEditBtnClick() {
        if (table) {
            dispatch(clearEditTable(table))
            navigate(`/tables/${table.id}/edit`)
        }
    }
    function onDelBtnClick() {
        dispatch(deleteTable(table))
    }

    return (
            <Card
                className ='table-card'
                size="small"
                title={<h1>
                    Table number {table.number}
                </h1>}
                extra={
                    <Button type='primary' onClick={onEditBtnClick}> <EditOutlined /> Edit</Button>
                }
            >
                <Button danger onClick={onDelBtnClick}> <DeleteOutlined /> Delete Table</Button>
            </Card>
    )
}