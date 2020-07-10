import React, { useCallback, useEffect, useRef, useState } from 'react';
import {useDispatch, useMappedState} from 'redux-react-hook';
import ReactDOM from 'react-dom';

import ComponentsList from "./components-list";
import { bindActionCreators, Dispatch } from 'redux';

// import { connect } from 'react-redux';
import { renderView } from '../../render';
import{
  setDragDataToDomTree
} from '../../redux/actions';
import 'react-sortable-tree/style.css';
import SortableTrees from './SortableTrees';
import config from '../../configs';

// import React from 'react';

import './index.scss'

let dispatch:Dispatch

interface Props {
  dragData: any,
  DomTree: Array<any>,
  // setDragDataToDomTree: (any:any) => any
}

// 当放置被拖数据时


function setTreeData(e:any){
  console.log(e)
}

export default function ActivityEdit() {

  // 定义一个 mapState函数 
  const mapState = useCallback(
    state => ({
      dragData: state.dragData,
      DomTree: state.DomTree
    }),
    [],
  );
  const {dragData, DomTree} = useMappedState(mapState);
  const dispatch = useDispatch();
  function onDrag(e:any){

    // 获取store中的数据
    // const {dragData, setDragDataToDomTree, DomTree} = this.props;
    e.stopPropagation();
    console.log('onDrag:',dragData,e)
    // var data=e.dataTransfer.getData("Text");
    // var data = dragData;
    dispatch(setDragDataToDomTree(dragData))
    
    renderView(dragData, e, DomTree)
  
  }
  function allowDrop(e:any){
    // 设置允许放置，需阻止对元素的默认处理方式。
    e.preventDefault();
    // e.stopPropagation();
  }

  const data = [
    {
      value: 'Input',
      context:'输入框'
    },
    {
      value: 'Button',
      context: '按钮'
    },
    {
      value: 'Box',
      context: '盒子'
    },
    {
      value: 'Col',
      context: '竖向盒子'
    }
  ]
  const treeData=[{
    title: 'Workflow test',
    expanded: true,
    children: [{
      title: 'taskflow test',
    }, {
      title: 'taskflow test1',
      expanded: true,
      children: [{
        title: 'taskflow2-1',
      }, {
        title: 'taskflow2-2',
      }],
    }],
  },{
    title: 'Workflow test',
    children: [{
      title: 'taskflow test',
    }, {
      title: 'taskflow test1',
      expanded: true,
      children: [{
        title: 'taskflow2-1',
      }, {
        title: 'taskflow2-2',
      }],
    }],
  }];

  const [loading, setLoading] = useState(true);
  const divContainer = useRef(null);
  let designPage: any = null;

  // loading完成后执行
  useEffect(() => {
    const iframe: any = document.getElementById('activity-edit-container');
    iframe.contentWindow.addEventListener('dragover', allowDrop);
    iframe.contentWindow.addEventListener('drop', onDrag);

    // if(!loading){
    //   divContainer.current = iframe.contentDocument.getElementById('h5-container')
    //   ReactDOM.render(designPage, divContainer.current)
    // }
    return () => {
      iframe.contentWindow.addEventListener('dragover', allowDrop);
      iframe.contentWindow.addEventListener('drop', onDrag);
    };
  },[loading])

  // 树变化时执行
  useEffect(() => {
    if (divContainer.current){
      console.log('渲染树：',designPage)
      ReactDOM.render(designPage, divContainer.current);
    }
  }, [divContainer.current, designPage]);

  return(
      <div className='activity-edit'>
        <div className='activity-edit-oper card-box-shadow' id="content_box">
          <div className='activity-edit-oper-components'>
            <ComponentsList
              data={data}
              // dispatch={dispatch}
            />
          </div>
          <div className='activity-edit-oper-context'>
            <div id="activity-edit-oper-set" style={{zoom:'0.6'}}>
            {/* <div id="one" onDrop={(event)=>this.dragSatrtHandler(event)} onDragOver={(event)=>this.dragEndHandler(event)}>
                <li draggable="true" data-value='苹果'>苹果</li>
                <li draggable="true" data-value='栗子'>栗子</li>
                <li draggable="true" data-value="橙子">橙子</li>
            </div> */}
              {/* h5展示组件 */}
              {/* <div
                className='activity-edit-container'
                id='activity-edit-container'
                onDrop={(e)=>this.onDrag(e)}
                onDragOver={(e)=>this.allowDrop(e)}
              >
              </div> */}
              {
                loading && <p>加载中</p>
         
              }
              <iframe
                  className='activity-edit-container'
                  id='activity-edit-container'
                  srcDoc={config.iframeSrcDoc}
                  onLoad={useCallback(() => setLoading(false),[])}
                />

              

              <img src={require('../../assets/images/phone-img.png')} className='activity-edit-oper-set-phone'/>
            </div>
            {/* <div id="middle" >
                <button className="iconfont icon-more1-s" id="set_menu_width" title="收缩侧边栏">
                </button>
            </div> */}
            <div id="activity-edit-oper-review">
              <div>
                {/* <SortableTrees
                  treeData={treeData} // treeData是你自己的数据
                  onChangeVal={(treeDatas:any) => { this.setTreeData(treeDatas); }}
                /> */}
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

// function mapStateToProps(state:any) {
//   return {
//     dragData: state['dragData'],
//     DomTree: state['DomTree']
//   };
// }
// function mapDispatchToProps(dispatch:Dispatch) {
//   return bindActionCreators({
//   setDragDataToDomTree
//   },dispatch);
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ActivityEdit, () => true);