import { NavLink } from 'react-router-dom'
import {UnorderedListOutlined, UserOutlined, CoffeeOutlined, TableOutlined } from '@ant-design/icons'

export const orders = 'orders'
export const tables = 'tables'
export const waiters = 'waiters'
export const dishes = 'dishes'

export const path = {
    orders: '/',
    tables: '/tables',
    waiters: '/waiters',
    dishes: '/dishes',
    notFound: '*'
}

export const menu = [
    {
      label: <NavLink to={path.orders}>Orders</NavLink>,
      key: orders,
      icon: <UnorderedListOutlined />
    },
    {
      label: <NavLink to={path.tables}>Tables</NavLink>,
      key: tables,
      icon: <TableOutlined />
    },
    {
      label: <NavLink to={path.waiters}>Waiters</NavLink>,
      key: waiters,
      icon: <UserOutlined />
    },
    {
      label: <NavLink to={path.dishes}>Dishes</NavLink>,
      key: dishes,
      icon : <CoffeeOutlined />
    },]