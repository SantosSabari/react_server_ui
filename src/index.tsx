import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Errorpage from './pages/errorpage';
import Contacts from './pages/contacts';
import { Provider } from 'react-redux';
import store, { RootState } from './store';
import Javascript from './pages/javascript_questions';
import LoginPage from './pages/session/login-page';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
          {/* <RouterProvider router={Router}></RouterProvider> */}
          <App></App>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
