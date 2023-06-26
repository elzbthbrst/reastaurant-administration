import { Row, Col, Table, Button } from 'antd';
import { Link} from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchDishList} from '../../store/actions/dishActions'
import {getDishColumns} from '../../extra/columns/getDishColumns'
import {selectDishList} from '../../store/selectors'

export default function DishList() {
    const list = useSelector(selectDishList)
    const dispatch = useDispatch()
    const columns = getDishColumns()

    useEffect(() => {
        dispatch(fetchDishList())
    }, [dispatch])

    return (
        <>
            <Row justify='center'>
                <Col span={8}>
                    <Button type="primary">
                        <Link to='/dishes/create'>Add Dish</Link>
                    </Button>
                </Col>
            </Row>
            <Row justify='center'>
                <Col span={20}>
                    <Table  size='middle' rowKey={'id'} columns={columns} dataSource={list} />
                </Col>
            </Row>
        </>

    )
}