import React from 'react';
import {render} from 'react-dom';
import App from './containers';
import {configStore} from './store';
import {Provider} from 'react-redux';
let store = configStore({userInfo:{city:'北京'}});
render(<Provider store={store}>
    <App/>
</Provider>,document.querySelector('#root'));