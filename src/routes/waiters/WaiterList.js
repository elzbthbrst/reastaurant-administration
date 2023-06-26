import { Row, Col, Table, Button } from 'antd';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWaiterList } from '../../store/actions/waiterActions'
import { getWaiterColumns } from '../../extra/columns/getWaiterColumns'
import { selectWaiterList } from '../../store/selectors'

export default function WaiterList() {
    const list = useSelector(selectWaiterList)
    const dispatch = useDispatch()
    const columns = getWaiterColumns()

    useEffect(() => {
        dispatch(fetchWaiterList())
    }, [dispatch])

    return (
        <>
            <Row justify='center'>
                <Col>
                    <Button type="primary">
                        <Link to='/waiters/create'>Add Waiter</Link>
                    </Button>
                </Col>
            </Row>
            <Row justify='center'>
                <Col lg={12}
                    md={20}
                    sm={24}>
                    <Table
                        pagination={{ hideOnSinglePage: true }}
                        size='middle' rowKey={'id'}
                        columns={columns}
                        dataSource={list} />
                </Col>
            </Row>
        </>

    )
}