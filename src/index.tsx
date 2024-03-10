import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { LazyFirst } from '@/pages/first/First.lazy';
import './styles/style.scss';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/first-page',
                element: <Suspense><LazyFirst /></Suspense>,
            },
        ]
    }
])

container.render(<RouterProvider router={router}/>);