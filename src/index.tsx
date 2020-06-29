import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './redux/reducer';
import * as serviceWorker from './serviceWorker';
import { initDB , addBaseSet} from './service';

const tableIndexs = [
    {
      name:'name',
      keyPath: 'id',
      options: { unique: true } 
    },
    {
      name:'bgimg',
      keyPath: 'id', //'http://app.h5.ihaozhuo.com/Alkaid/bg2.jpg',
      options: { unique: true } 
    }
]
initDB('alkaid', 'baseset', { autoIncrement: true }, tableIndexs).then(()=>{
    addBaseSet({
        data:{
        id:1,
        name:'张三',
        bgimg:'http://app.h5.ihaozhuo.com/Alkaid/bg.jpg'
        }
    });
});

// 1、创建 store
const store = createStore(reducer);
 
ReactDOM.render(
    // 2、然后使用react-redux的Provider将props与容器连通起来
    <Provider store={ store }>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();