import React, {useEffect, useCallback} from "react";
// import { Provider } from "react-redux";
// import store from "./store";
// import ReactDOM from "react-dom";
// import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';
import {useDispatch, useMappedState} from 'redux-react-hook';

import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  NavLink

  // Link
} from "react-router-dom";

import routes from './router';

import { StoreState } from './redux/types';

import{
  setBgImg,
} from './redux/actions';

import { RouteWithSubRoutes } from './assets/common';
import { RouteInterface } from './assets/interface';
import { addBaseSet } from './service';

// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

function Header(props: any){


  useEffect(() => {
    // setTimeout(()=>{
    //   addBaseSet({
    //     data:{
    //       id:1,
    //       name:'张三',
    //       bgimg:'http://app.h5.ihaozhuo.com/Alkaid/bg.jpg'
    //     }
    //   });

    // }, 1000)
  }, []);

  const history = useHistory();
  if(history.location.pathname !== '/login'){
    return (
      <header className='app-header'>
        <NavLink to="/" exact className='app-header-link'>
          <div className='app-header-title'>
            <img className='app-header-title-img' src={require('./assets/images/title.png')} alt='title'/>
            Alkaid
          </div>
        </NavLink>
        {/* <div className='app-header-search'>
          <Input/>
        </div> */}
        <ul className='app-header-nav'>
          <NavLink to="/activity-room" activeClassName="active">
            <li>创作</li>
          </NavLink>
          <NavLink to="/design" exact activeClassName="active">
            <li>设计</li>
          </NavLink>
          <NavLink to="/doc" exact activeClassName="active">
            <li>文档</li>
          </NavLink>
          <NavLink to="/building-block-gallery" exact activeClassName="active">
            <li>组件</li>
          </NavLink>
          <NavLink to="/resource" exact activeClassName="active">
            <li>资源</li>
          </NavLink>
          
          <i className="iconfont icon-skin app-header-nav-skin" onClick={()=>props.toggleSkin()}></i>
        </ul>
      </header>
    )
  } else {
    return(
      <div/>
    )
  }
}


// 创建类型接口
// export interface IProps {
//   value: number,
//   bgImgTag: number,
//   setBgImg: Function
// }

function App(){

  const dispatch = useDispatch();
  const toggleSkin = ()=>{
    dispatch(setBgImg())
  }
  const mapState = useCallback(
    state => ({
      bgImgTag: state.bgImgTag
    }),
    [],
);
  const {bgImgTag} = useMappedState(mapState);
  // public render() {
  //   const toggleSkin = () =>{
  //     this.props.setBgImg()
  //   }

    return (
      <Router >
        <div className="App">
          <Header toggleSkin={()=>toggleSkin()}/>
          <div className='weqweqw'>{bgImgTag}</div>
          <Switch >
            <main className='app-main'>
              {routes.map((route: RouteInterface, i: number) => {
                return RouteWithSubRoutes(route, i)
              })}
            </main>
          </Switch>

        </div>
      </Router>
    );
  // }
}


export default App;


// function mapStateToProps(state:any) {
//   return {
//     bgImgTag: state.bgImgTag,
//   };
// }

// function mapDispatchToProps(dispatch:Dispatch) {
//   return bindActionCreators({
//     setBgImg,
//   }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);


// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <Router routes={routes} /> */}
//       <Route
//         key={index}
//         path={route.path}
//         render={props => (
//           <route.component {...props} routes={route.routes} />
//         )}
//       />
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
