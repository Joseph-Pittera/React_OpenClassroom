import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Results from './pages/Results';
import ErrorPage from './components/Error';
import Header from './components/Header';
import Freelances from './pages/Freelances';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Home />
            </>
        ),

        errorElement: (
            <>
                <Header />
                <ErrorPage />
            </>
        ),
    },
    {
        path: 'survey/:questionNumber',
        element: (
            <>
                <Header />
                <Survey />
            </>
        ),
    },
    {
        path: 'results',
        element: (
            <>
                <Header />
                <Results />
            </>
        ),
    },
    {
        path: 'freelances',
        element: (
            <>
                <Header />
                <Freelances />
            </>
        ),
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
