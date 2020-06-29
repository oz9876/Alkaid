import React from 'react';
import {useHistory} from "react-router-dom";
// import {  history  } from 'react-router'
import {Button, Input} from '../../UI';
// import {
//   Link
// } from "react-router-dom";

function LoginBtn(){
  const history = useHistory();
  const handleClick = ()=>{
    console.log('登录')
    history.push("/home")
  }
  return (
    <Button className='login-main-btn' onClick={handleClick}>登 录</Button>
  )
}

class Login extends React.PureComponent {
  constructor(props?:any){
    super(props)
    console.log('history')
  }
  componentWillMount() {

    console.log(process.env)
    // this.history.push("/home")
  }
  render() {
      const inputStyle={
        className:'login-item-input'
      }
    return(
      <article className="login-main">
        <section className='login-main-item'>
            账 号：
            <Input {...inputStyle} />
        </section>
        <section className='login-main-item'>
            密 码：
            <Input {...inputStyle} />
        </section>
        <LoginBtn />
      </article>
    );
  }
}

export default Login;