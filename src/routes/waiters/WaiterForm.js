import { Button, Row, Col, Form, Input } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FormWrapper from '../../extra/FormWrapper';
import '../../style/App.css'
import { waiterRules } from '../../extra/form-rules/waiterRules';
import {fetchOneWaiter, save} from '../../store/actions/waiterActions'
import { selectWaiterEdit } from '../../store/selectors';

export default function WaiterForm() {
    const waiterEdit = useSelector(selectWaiterEdit)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { id } = useParams();

    function onFinish(value) {
        const waiter = {
            ...waiterEdit,
            ...value
        }
        dispatch(save(waiter))
        navigate('/waiters')
    }

    return (
        <FormWrapper editId={waiterEdit?.id} id={id} singleFetch={fetchOneWaiter}>
            <Row justify='center' className='margin-top-30'>
            <Col lg={8}
                md={10}
                sm={18}>
                <Form
                    name="basic"
                    labelCol={{ span: 8, }}
                    wrapperCol={{ span: 16, }}
                    initialValues={waiterEdit}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="FirstName"
                        name="firstName"
                        rules={waiterRules.firstName}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={waiterRules.phone}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{ offset: 8, span: 16, }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
        </FormWrapper>
        
    )
}