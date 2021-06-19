import IRoute from '../interfaces/route';
import TablePage from '../pages/Table';
import CounterPage from '../pages/Counter';

const routes: IRoute[] = [
    {
        path: '/counter',
        name: 'Counter',
        component: CounterPage,
        exact: true
    },
    {
        path: '/table',
        name: 'Table',
        component: TablePage,
        exact: true
    },
]

export default routes;