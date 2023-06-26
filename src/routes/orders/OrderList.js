import { Row, Col, Table, Button } from 'antd';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectJointOrders } from '../../store/selectors'
import { getOrderColumnsList } from '../../extra/columns/getOrderColumns'
import { fetchJointListOTW } from '../../store/actions/jointActions'

export default function OrderList() {
    const list = useSelector(selectJointOrders)
    const dispatch = useDispatch()
    const columns = getOrderColumnsList()

    useEffect(() => {
        dispatch(fetchJointListOTW())
    }, [dispatch])

    return (
        <>
            <Row justify='center'>
                <Col>
                    <Button type="primary">
                        <Link to='/create_order'>Add Order</Link>
                    </Button>
                </Col>
            </Row>
            <Row justify='center'>
                <Col lg={10}
                    md={14}
                    sm={18}>
                    <Table
                        pagination={{ hideOnSinglePage: true }}
                        size='middle' rowKey={'id'}
                        columns={columns}
                        dataSource={list}
                    />
                </Col>
            </Row>
        </>
    )
}