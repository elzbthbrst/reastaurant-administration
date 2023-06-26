import '../../style/App.css'
import { Table, Row, Col, Typography, Button, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectOrderBillFull } from '../../store/selectors'
import { fetchDishList } from '../../store/actions/dishActions';
import { fetchOneBillOrder, deleteOrder, clearBillOrder } from '../../store/actions/orderActions'
import {getOrderColumnsBill} from '../../extra/columns/getOrderColumns'
import { getTotalSum } from '../../extra/extra-functions/getTotalSum';
import FormWrapper from '../../extra/FormWrapper';

export default function OrderBill() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const orderBill = useSelector(selectOrderBillFull)
    const totalSum = getTotalSum(orderBill.dishes)
    const billColumns = getOrderColumnsBill()
    let { id } = useParams()

    function onDeleteBtnClick() {
        dispatch(deleteOrder(orderBill))
        navigate('/')
    }

    function onReturnClick() {
        dispatch(clearBillOrder())
        navigate('/')
    }

    return (
        <FormWrapper editId={orderBill?.id} id={id} singleFetch={fetchOneBillOrder} listFetch = {fetchDishList}>
            <Row className='margin-top-30' justify='center'>
                <Col span={10}>
                    <Table pagination={{ hideOnSinglePage: true }} dataSource={orderBill.dishes} rowKey={'id'} columns={billColumns} />
                </Col>
            </Row>
            <Row justify='center'>
                <Col span={4} >
                    <Typography.Title type='success' level={5}>Total {totalSum} </Typography.Title>
                    <Space>
                        <Button onClick={onReturnClick}> Return to Orders</Button>
                        <Button danger onClick={onDeleteBtnClick}> Delete Order</Button>
                    </Space>
                </Col>
            </Row>
        </FormWrapper>

    )
}