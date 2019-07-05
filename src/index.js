import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

// import css
import "bootstrap/dist/css/bootstrap.css";
import "./static/less/todo.less";

// import Component
import Head from "./component/Head";
import Body from "./component/Body";
import Footer from "./component/Footer";



// 获取页面root
const root = document.getElementById('root');

render(<Provider store={store}>
  <main className='panel panel-default'>
    <Head></Head>
    <Body></Body>
    <Footer></Footer>
  </main>
</Provider>, root);

