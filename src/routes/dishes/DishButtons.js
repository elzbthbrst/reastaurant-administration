import { Button, Space } from "antd";
import { deleteDish, clearEditDish } from '../../store/actions/dishActions'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

export default function DishButtons({ dish }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function onDeleteClick(dish) {
        dispatch(deleteDish(dish))
    }
    function onEditBtnClick(dish) {
        if (dish) {
            navigate(`/dishes/${dish.id}/edit`)
            dispatch(clearEditDish())
        }
    }
    return (
        <Space wrap>
            <Button onClick={() => onEditBtnClick(dish)}> <EditOutlined /> Edit </Button>
            <Button danger onClick={() => onDeleteClick(dish)}> <DeleteOutlined />  Delete </Button>
        </Space>
    )
}