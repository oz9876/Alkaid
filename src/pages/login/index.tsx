import React from 'react';
import Login from './login';
// import {
//   Link
// } from "react-router-dom";
import './index.scss';

class Home extends React.PureComponent {
  componentWillMount() {
    console.log(process.env)
  }
  render() {
    return(
      <div className="login">
        <main >
          <title className="login-title">
            <img className='login-title-img' src={require('../../assets/images/title.png')} alt='title'/>
            <abbr className="login-title-en">
              Alkaid
            </abbr>
          </title>
          <Login />
        </main>
      </div>
    );
  }
}

export default Home;