
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter , {history}  from './routers/AppRouter';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';




const jsx = (
    <Provider >
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

