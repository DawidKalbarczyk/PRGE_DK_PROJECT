import {createHashRouter} from "react-router-dom";
import {Home, ListOfItems, About, Map, Services, NewRecord, TableSelection} from './LazyImports';
const routes = createHashRouter(
    [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/map',
            element: <Map/>
        },
        {
            path: '/services',
            element: <Services/>
        },
        {
            path: '/list',
            element: <ListOfItems/>
        },
        {
            path: '/tableselection',
            element: <TableSelection/>
        },
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '*',
            element: <div>404</div>
        },
        {
            path: '/newrecord',
            element: <NewRecord/>
        }
    ]
)

export default routes;