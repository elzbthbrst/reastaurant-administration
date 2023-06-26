import { Button, Row, Col, Form, Input } from 'antd';
import { dishRules } from '../../extra/formRules/dishRules';
import FormWrapper from '../../extra/FormWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { selectDishEdit } from '../../store/selectors';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchOneWDish, save } from '../../store/actions/dishActions';

export default function DishForm() {
    const dishEdit = useSelector(selectDishEdit)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { id } = useParams();

    const onFinish = (value) => {
        const dish = {
            ...dishEdit,
            ...value
        };
        dispatch(save(dish))
        navigate('/dishes')
    };

    return (
        <FormWrapper editId={dishEdit?.id} id={id} singleFetch={fetchOneWDish}>
            <Row justify='center'>
                <Col lg={8}
                    md={10}
                    sm={18}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8, }}
                        wrapperCol={{ span: 16, }}
                        style={{ maxWidth: 600, marginTop: '30px' }}
                        initialValues={dishEdit}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Dish name"
                            name="name"
                            rules={dishRules.name}
                        >
                            <Input placeholder='Dish Name' />
                        </Form.Item>

                        <Form.Item
                            label="Dish description"
                            name="description"
                            rules={dishRules.description}
                        >
                            <Input placeholder='Dish description' />
                        </Form.Item>

                        <Form.Item
                            label="Dish price"
                            name="price"
                            rules={dishRules.price}
                        >
                            <Input placeholder='Dish price' />
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