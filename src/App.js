import './style/App.css';
import { Route, Routes} from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { menu, path} from './extra/menu-app';
import OrderRouter from './routes/orders/OrderRouter'
import TableRouter from './routes/tables/TableRouter'
import WaiterRouter from './routes/waiters/WaiterRouter'
import DishRouter from './routes/dishes/DishRouter'
import NotFound from './extra/NotFound'

function App() {
  const { Header, Content } = Layout;
  return (
      <Layout className='screen'>
        <Header className='header'>
          <Menu  mode="horizontal" items={menu}/>
        </Header>
        <Content className='content'>
          <Routes>
            <Route path={path.orders + '*'} element={<OrderRouter />} />
            <Route path={path.waiters + '/*'} element={<WaiterRouter />} />
            <Route path={path.tables + '/*'} element={<TableRouter />} />
            <Route path={path.dishes + '/*'} element={<DishRouter />} />
            <Route path={path.notFound} element={<NotFound />} />
          </Routes>
        </Content>
      </Layout>
  );
}

export default App;




