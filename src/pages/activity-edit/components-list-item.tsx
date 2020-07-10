import React, { createElement, memo, useRef, useState } from 'react';
// import {useHistory} from "react-router-dom";
// import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';
import {useDispatch, useMappedState} from 'redux-react-hook';

import get from 'lodash/get'; // 关于get方法 https://segmentfault.com/a/1190000015605531
import allComponents from '../../UI';
// import config from '../../configs';

import{
  setDragData, ISETDRAGDATAAction
} from '../../redux/actions';

// import React from 'react';

import './index.scss'

export interface ComponentsListItemType {
    value: String,
    context: Number
}

interface ComponentsListItemPropsType {
  // dispatch:Dispatch,
  item: ComponentsListItemType,
  // setDragData: (any:any) => any
}

export default function ComponentsListItem(props: ComponentsListItemPropsType){
  const {
    item,
    // dispatch,
  } = props;
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);

  function renderComponent(item:ComponentsListItemType){
    // return item.value;
    return createElement(get(allComponents, item.value+''));
  }
  function onSetDragData(item: any, event:any){
    event.stopPropagation();
    console.log('onSetDragData: ', item.value)
    dispatch(setDragData({name: item.value+''}))

    // setDragData({name: item.value+''})
  }
  return (
    <ul className='activity-edit-oper-components-list-item'>
      <div draggable
        onDragStart={(e)=>onSetDragData(item,e)}
        id={item.value+''} 
      >
        {
          renderComponent(item)
        }    
      </div>
      {/* <p>{item.value}</p> */}
      <div className=''>
        {item.context}
      </div>
    </ul>
  )
}



// function mapStateToProps() {
//   return {
//   };
// }

// function mapDispatchToProps(dispatch:Dispatch) {
//   return bindActionCreators({
//     setDragData,
//   }, dispatch);
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(memo(ComponentsListItem, () => true));