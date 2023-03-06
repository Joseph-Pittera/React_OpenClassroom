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
import { ThemeProvider, SurveyProvider } from './utils/context';
import Footer from './components/Footer';
import GlobalStyle from './utils/style/GlobalStyle';

function GlobalLayout({ children }) {
    return (
        <>
            <ThemeProvider>
                <GlobalStyle />
                <Header />
                {children}
                <Footer />
            </ThemeProvider>
        </>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <GlobalLayout>
                <Home />
            </GlobalLayout>
        ),
        errorElement: (
            <GlobalLayout>
                <ErrorPage />
            </GlobalLayout>
        ),
    },
    {
        path: 'survey/:questionNumber',
        element: (
            <GlobalLayout>
                <SurveyProvider>
                    <Survey />
                </SurveyProvider>
            </GlobalLayout>
        ),
    },
    {
        path: 'results',
        element: (
            <GlobalLayout>
                <SurveyProvider>
                    <Results />
                </SurveyProvider>
            </GlobalLayout>
        ),
    },
    {
        path: 'freelances',
        element: (
            <GlobalLayout>
                <Freelances />
            </GlobalLayout>
        ),
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
