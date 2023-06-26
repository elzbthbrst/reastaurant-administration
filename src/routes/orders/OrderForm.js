import '../../style/App.css'
import { Form, Select, Button, Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectOrderEdit, selectOptions } from '../../store/selectors'
import { fetchJointListTbWtDs } from '../../store/actions/jointActions'
import { save, fetchOneOrder } from '../../store/actions/orderActions'
import { orderRules } from '../../extra/form-rules/orderRules';
import { getDishList } from '../../extra/order-functions/getDishList';
import OrderFormSelectDishes from './OrderFormSelectDishes';
import FormWrapper from '../../extra/FormWrapper';


export default function OrderForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let { id } = useParams()
    const orderEdit = useSelector(selectOrderEdit)
    const options = useSelector(selectOptions)
    const [form] = Form.useForm();

    function onFormSubmit(value) {
        const dishList = getDishList(value.dishes)
        const order = {
            ...orderEdit,
            ...value,
            "dishes": dishList
        };
        dispatch(save(order))
        navigate('/')
    }
    return (
        <FormWrapper editId={orderEdit?.id} id={id} singleFetch={fetchOneOrder} listFetch = {fetchJointListTbWtDs}>
            <Row
            justify="center"
            className='margin-top-30'
        >
            <Col lg={10}
                md={14}
                sm={24}>
                <Form
                    form={form}
                    layout="horizontal"
                    onFinish={onFormSubmit}
                    initialValues={orderEdit}
                    labelCol={{ span: 8, }}
                >
                    <Form.Item
                        name="tableId"
                        label="Chose Table"
                        rules={orderRules.tableId}
                    >
                        <Select
                            className='width-200'
                            options={options.table}
                        />
                    </Form.Item>
                    <Form.Item
                        name="waiterId"
                        label="Chose Waiter"
                        rules={orderRules.waiterId}
                    >
                        <Select
                            className='width-200'
                            options={options.waiter}
                        />
                    </Form.Item>

                    <h5> Chose Dishes </h5>

                    <OrderFormSelectDishes options={options} />

                    <Form.Item >
                        <Button type="primary" htmlType="submit">Save</Button>
                    </Form.Item>

                </Form>
            </Col>
        </Row>
        </FormWrapper>
        
    )
}