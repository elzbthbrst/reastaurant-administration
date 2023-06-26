import { Route, Routes } from 'react-router-dom'
import DishList from './DishList'
import DishForm from './DishForm'
import NotFound from '../../extra/NotFound'

export default function DishRouter() {
  return (
    <Routes>
      <Route path='/' element={<DishList />} />
      <Route path='/create' element={<DishForm />} />
      <Route path='/:id/edit' element={<DishForm />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}