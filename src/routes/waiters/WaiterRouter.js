import {Route, Routes} from 'react-router-dom'
import NotFound from '../../extra/NotFound'
import WaiterList from './WaiterList'
import WaiterForm from './WaiterForm'

export default function WaiterRouter() {
    return (
        <Routes>
        <Route path = '/' element= {<WaiterList/>}/>
        <Route path = '/create' element= {<WaiterForm/>}/>
        <Route path = '/:id/edit' element= {<WaiterForm/>}/>
        <Route path = '/*' element= {<NotFound/>}/>
      </Routes>
    )
}