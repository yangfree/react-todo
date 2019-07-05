import React from 'react';
import ReactDOM, { render } from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./static/less/todo.less";
import Head from "./component/Head";
import Body from "./component/Body";
import Footer from "./component/Footer";




const root = document.getElementById('root');
render(<main className='panel panel-default'>
  <Head></Head>
  <Body></Body>
  <Footer></Footer>
</main>, root);

