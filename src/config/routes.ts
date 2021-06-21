import IRoute from '../interfaces/route'
import CounterPage from '../pages/Counter'
import TablePage from '../pages/Table'

const routes: IRoute[] = [
  {
    path: '/counter',
    name: 'Counter',
    component: CounterPage,
    exact: true,
  },
  {
    path: '/table',
    name: 'Table',
    component: TablePage,
    exact: true,
  },
]

export default routes
