import { ModifyAction } from './actions';
import { SETBGIMG, SETDRAGDATA, SETDRAGDATATODOMTREE } from './constants';
import { VirtualDOMType } from '../types'
import { addComment } from '@babel/types';
 
// 逻辑、整合

// 默认组件
const DEFAULT_BOX: VirtualDOMType = {
  key: `n${Date.now()}`,
  componentName: 'Box',
  props: { style: { height: '100%' } },
  childNodes: [],
};

// 设置state初始值
const initState = {
  title: '',
  dragData:{
    name:''
  } as DragDataType,
  bgImgTag: 0,
  DomTree:{
    componentConfig: DEFAULT_BOX
  }
}


// export interface IState {
//   title: String,
//   dragData: Object,
//   bgImgTag: number
// }

type IState = Readonly<typeof initState>;

// export interface PropsNodeType {
//   [propName: string]: {
//     childNodes: VirtualDOMType[]
//   }
// }


export interface DragDataType {
  name: string,
}


// 添加组件，把元素名转成虚拟dom需要的虚拟Dom对象

function getComponentVirtualDOM(state:IState){
  const {DomTree,dragData} = state
  var VirtualDOMTree:VirtualDOMType=DomTree.componentConfig;
  const {name} = dragData;

  const data = VirtualDOMTree.childNodes as VirtualDOMType[];
  data.push({
    key: `n${Date.now()}`,
    componentName: name,
    props: { style: { width: '100%' } },
    childNodes: [],
  })

  return {
    componentConfig: VirtualDOMTree
  }
}


// 处理并返回 state 
export default (state:IState = initState, action: ModifyAction): IState => {
    switch (action.type) {
      case SETDRAGDATA:
        console.log('SETDRAGDATA', action.data)
        return {
          ...state,
          dragData: action.data as DragDataType
        }
      case SETDRAGDATATODOMTREE:
        console.log('SETDRAGDATATODOMTREE', state, action.data)
        // const res = state.DomTree.push(state.dragData)

        //
        const newDomTree = getComponentVirtualDOM(state)
        console.log('reducer->newDomTree:', newDomTree)
        return {
          ...state,
          DomTree: newDomTree
          // DomTree: state.DomTree.push(action.data)
        }
      case SETBGIMG:
        console.log('SETBGIMG', state.bgImgTag)
        return {
          ...state,
          bgImgTag: state.bgImgTag+1
        }
      default:
        return state
    }
}

