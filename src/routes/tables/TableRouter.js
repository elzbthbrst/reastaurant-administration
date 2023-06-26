import {Route, Routes} from 'react-router-dom'
import TableList from './TableList'
import TableForm from './TableForm'
import NotFound from '../../extra/NotFound'


export default function TableRouter() {
    return (
        <Routes>
        <Route path = '/' element= {<TableList/>}/>
        <Route path = '/create' element= {<TableForm/>}/>
        <Route path = '/:id/edit' element= {<TableForm/>}/>
        <Route path = '/*' element= {<NotFound/>}/>
      </Routes>
    )
}