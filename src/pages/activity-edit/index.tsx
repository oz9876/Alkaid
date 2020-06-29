import React, {createElement} from 'react';
import ComponentsList from "./components-list";
import { bindActionCreators, Dispatch } from 'redux';

import { connect } from 'react-redux';
import { renderView } from '../../render';
import{
  setDragDataToDomTree
} from '../../redux/actions';
import 'react-sortable-tree/style.css';
import SortableTrees from './SortableTrees';
// import React from 'react';

import './index.scss'

let dispatch:Dispatch

interface Props {
  dragData: any,
  setDragDataToDomTree: (any:any) => any
}

class ActivityEdit extends React.PureComponent<Props> {
  // constructor(props: any){
  //   super(props);
    
  // }

  componentDidMount() {
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


        // var resize = document.getElementById("middle") as any;
        // var left = document.getElementById("activity-edit-oper-set");
        // var right = document.getElementById("activity-edit-oper-review");
        // var box = document.getElementById("content_box");
        // resize.onmousedown = function(v: any){

        //     var startX = v.clientX;
        //     resize.left = resize.offsetLeft;

        //     document.onmousemove = function(e){
        //         var endX = e.clientX;

        //         var moveLen = resize.left + (endX - startX);
        //         var maxT = box.clientWidth - resize.offsetWidth;
        //         console.log(moveLen, maxT)
        //         if(moveLen<59) moveLen = 59;
        //         if(moveLen>maxT-500) moveLen = maxT-500;

        //         resize.style.left = moveLen;
        //         left.style.width = moveLen + "px";
        //         right.style.width = (box.clientWidth - moveLen - 5) + "px";
        //     }
        //     document.onmouseup = function(evt){
        //         evt.stopPropagation()
        //         document.onmousemove = null;
        //         document.onmouseup = null;
        //         resize.releaseCapture && resize.releaseCapture();
        //     }
        //     resize.setCapture && resize.setCapture();
        //     return false;
        // };


   

  }
//   dragSatrtHandler(event:any) {
//     console.log(event.target);
//     if(event.target instanceof HTMLLIElement){
//         let value=event.target.dataset.value;
//         console.log(value);
//         console.log(event.dataTransfer.effectAllowed);
        
//         event.dataTransfer.effectAllowed = 'move';
//         console.log(event.dataTransfer.effectAllowed);
//         event.dataTransfer.setData('text/plain',value);
//         //event.dataTransfer.effectAllowed = 'move';
//     }
//     else{
//         event.preventDefault()
//     }
// }
// dragEndHandler(event:any){

//     if(event.dataTransfer.dropEffect === 'move'){
//         event.target.parentNode.removeChild(event.target);
//     }
//     else{
//         console.log('类型为：'+event.dataTransfer.dropEffect);
//     }
// }
// dragOverHandler(event:any) {
//     event.preventDefault();
// }
// dropHandler(params:any) {
//     console.log('li');
    
//     let li= document.createElement('li');
//     li.textContent=params.dataTransfer.getData('text/plain');
//     params.target.appendChild(li);
// }

// 当放置被拖数据时
onDrag(e:any){
  const {dragData, setDragDataToDomTree} = this.props;
  e.stopPropagation();
  console.log('onDrag:',e)
  // var data=e.dataTransfer.getData("Text");
  // var data = dragData;
  debugger
  setDragDataToDomTree(dragData)
  renderView(dragData, e)

}
allowDrop(e:any){
  // 设置允许放置，需阻止对元素的默认处理方式。
  e.preventDefault();
  // e.stopPropagation();
}
setTreeData(e:any){
  console.log(e)
}
render() {
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
    return(
      <div className='activity-edit'>
        <div className='activity-edit-oper card-box-shadow' id="content_box">
          <div className='activity-edit-oper-components'>
            <ComponentsList
              data={data}
              dispatch={dispatch}
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
              <div
                className='activity-edit-container'
                id='activity-edit-container'
                onDrop={(e)=>this.onDrag(e)}
                onDragOver={(e)=>this.allowDrop(e)}
              >
              </div>
              <img src={require('../../assets/images/phone-img.png')} className='activity-edit-oper-set-phone'/>
            </div>
            {/* <div id="middle" >
                <button className="iconfont icon-more1-s" id="set_menu_width" title="收缩侧边栏">
                </button>
            </div> */}
            <div id="activity-edit-oper-review">
              {/* <div id="two" onDrop={(event)=>this.dropHandler(event)} onDragOver={(event)=>this.dragOverHandler(event)}>
  
              </div> */}
              <SortableTrees
                treeData={treeData} // treeData是你自己的数据
                onChangeVal={(treeDatas:any) => { this.setTreeData(treeDatas); }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state:any) {
  return {
    dragData: state['dragData'],
  };
}
function mapDispatchToProps(dispatch:Dispatch) {
  return bindActionCreators({
  setDragDataToDomTree
  },dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityEdit, () => true);