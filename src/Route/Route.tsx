import {
    
    createBrowserRouter,
} from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import AddTask from '../pages/AddTask/Task';




export const router = createBrowserRouter(
    [
        {
            path: '/',
           element:<HomePage />
        },
        {
            path: '/addtarea',
           element:<AddTask />
        },
        

    ]
)