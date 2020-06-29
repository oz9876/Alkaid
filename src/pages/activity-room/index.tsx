import React from 'react';
import {useHistory} from "react-router-dom";

import './index.scss'
function Card(props: any){

  interface CardProps {
    data?: number|string;
  }
  const history = useHistory();
  const handleClick = (props:CardProps)=>{
    console.log('登录')
    history.push(`/activity-edit/${props.data}`)
  }
  return (
    <ul className='activity-room-card' onClick={()=>handleClick(props)}>
      <div className='activity-room-card-box-item card-box-shadow'>
        {props.children}
      </div>
    </ul>
  )
}



class ActivityRoom extends React.PureComponent {
  // constructor(props: any){
  //   super(props);
    
  // }

  componentWillMount() {
    // fetch('/api/login', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json; charset=utf-8',
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data)
    // })
    // .catch(error => {
    //   console.log(error)
    // })
    console.log(123232,process.env)
  }

  render() {
    return(
      <div className='activity-room'>
        <div className='activity-room-card-box'>
          <Card data={'add'}>
            <div className='activity-room-card-add'>
              {/* <img className='activity-room-card-data' src={require('../../assets/images/h5.png')} alt=''/> */}
              <i className="iconfont icon-untitled44 activity-room-card-add-icon"></i>
            </div>
          </Card>
          {
            new Array(1,2,3,4,5).map((item, index)=>(

            <Card data={item} key={item}>
              <h2 className='activity-room-card-title'>
                感恩父母{index}
              </h2>
              <p className='activity-room-card-remarks'>我是备注我是备注我是备注我是备注我是备注我是备注我是备注我是备注我是备注我是备注我是备注我是备注我是备注我是备注
              </p>
              <img className='activity-room-card-data' src={require('../../assets/images/h5.png')} alt=''/>
            </Card>
            ))
          }
        </div>

      </div>
    );
  }
}

export default ActivityRoom;