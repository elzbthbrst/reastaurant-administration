import '../../style/App.css'
import { Button, Form, Input, Row, Col } from 'antd';
import { getTableRules } from '../../extra/form-rules/tableRules';
import { useSelector, useDispatch } from 'react-redux';
import { selectTableEdit, selectTableList } from '../../store/selectors';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchOneTable,  save, fetchTableList} from '../../store/actions/tableActions';
import FormWrapper from '../../extra/FormWrapper';

export default function TableForm() {
    const tableEdit = useSelector(selectTableEdit)
    const list = useSelector(selectTableList)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { id } = useParams();
    const rules = getTableRules(list)
    function onFinish(value) {
        const table = {
            ...tableEdit,
            number : Number(value.number)
        }

        dispatch(save(table))
        navigate('/tables')
    }

    return (
        <FormWrapper editId={tableEdit?.id} id={id} singleFetch={fetchOneTable} listFetch ={fetchTableList} list ={list} >
            <Row justify='center' className='margin-top-30'>
            <Col lg={8}
                md={10}
                sm={18}>
                <Form
                    initialValues={tableEdit}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Number"
                        name="number"
                        rules={rules}
                    >
                        <Input placeholder='Table Number' />
                    </Form.Item>

                    <Form.Item >
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