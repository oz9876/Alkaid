import React from 'react';
// import {
//   Link
// } from "reacimport { isUserWhitespacable } from '@babel/types';
// import {useHistory} from "react-router-dom";
// import { Input } from '../../UI'
import './index.scss';



function Card(props: any){
  // const history = useHistory();
  // const handleClick = (path: string)=>{
  //   history.push(path)
  // }
  return (
    <ul className='home-masonry-card card-box-shadow'>
      {props.children}
    </ul>
  )
}


class Home extends React.PureComponent {
  componentWillMount() {
    console.log(process.env)

  }
  handleClickCard(){
    
  }
  render() {
    return(
      <div className="home">
        <div className='masonry' >
          <Card onClick={this.handleClickCard}>
            <h2 className='home-masonry-card-title'>
              昨日（2020/3/4）数据统计
            </h2>
            <img className='home-masonry-card-data' src={require('../../assets/images/demo1.png')} alt=''/>
          </Card>
          <Card>
            2
            <div>qweqweqweqw</div>
            <div>qweqweqweqw</div><div>qweqweqweqw</div>
            <div>qweqweqweqw</div>
          </Card>

          <Card>
            3
            <img className='home-masonry-card-data' src={require('../../assets/images/demo1.png')} alt=''/>
            <img className='home-masonry-card-data' src={require('../../assets/images/demo1.png')} alt=''/>

          </Card>
          <Card>
            4
            <div>qweqweqweqw</div>
            <div>qweqweqweqw</div><div>qweqweqweqw</div>
            <div>qweqweqweqw</div>
          </Card><Card>
            qweqweqweqw
          </Card>
          <Card>
            <div>qweqweqweqw</div>
            <div>qweqweqweqw</div><div>qweqweqweqw</div>
            <div>qweqweqweqw</div>
          </Card><Card>
            qweqweqweqw
          </Card>
          
        </div>
      </div>
    );
  }
}

export default Home;