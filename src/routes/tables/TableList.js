import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { Col, Row, Button } from 'antd';
import '../../style/App.css'
import TableCard from './TableCard';
import { fetchTableList } from '../../store/actions/tableActions';
import { selectTableList } from '../../store/selectors'

export default function TableList() {
    const list = useSelector(selectTableList)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTableList())
    }, [dispatch])

    return (
        <div >
            <Row justify='center' >
                <Col span={16}>
                    <Button type="primary">
                        <Link to='/tables/create'>Add Table</Link>
                    </Button>
                </Col>
            </Row>
            <Row justify='center'>
                <Col span={20} md= {24} className='d-flex  margin-center'>
                    {list.map(table => <TableCard table={table} key={table.id} />)}
                </Col>
            </Row>


        </div>
    )
}