import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { StrictMode, Suspense } from 'react';
import { LazyFirst } from '@/pages/first/First.lazy';
import './styles/style.scss';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root)

const router = createHashRouter([
    {
        path: '/',
        element: <StrictMode><App/></StrictMode>,
        children: [
            {
                path: '/first-page',
                element: <Suspense fallback={'Loading...'}><LazyFirst /></Suspense>,
            },
        ]
    }
])

container.render(<RouterProvider router={router} />);