import {Route, Routes} from 'react-router-dom'
import OrderList from './OrderList'
import OrderForm from './OrderForm'
import OrderBill from './OrderBill'
import NotFound from '../../extra/NotFound'

export default function OrderRouter() {
    return (
        <Routes>
        <Route path = '/' element= {<OrderList/>}/>
        <Route path = '/create_order' element= {<OrderForm/>}/>
        <Route path = '/:id/edit' element= {<OrderForm/>}/>
        <Route path = '/:id/bill' element= {<OrderBill/>}/>
        <Route path = '/*' element= {<NotFound/>}/>
      </Routes>
    )
}