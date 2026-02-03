import './styles/style.scss';
import './styles/Home.css';
import './styles/Services.css';
import './styles/ListOfItems.css';
import './styles/UserCard.css';
import './styles/NewRecord.css';
import './styles/MapComponent.css';
import {Suspense} from "react";
import routes from './routes/Router';
import {RouterProvider} from 'react-router-dom';
import {CircularProgress} from "@mui/material";

function App() {
  return (
    <div className="app">
        <Suspense
            fallback={
                <CircularProgress/>
            }
        >
            <RouterProvider router={routes}/>
        </Suspense>

    </div>
  );
}

export default App;

