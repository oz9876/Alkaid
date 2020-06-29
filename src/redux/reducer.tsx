import { ModifyAction } from './actions';
import { SETBGIMG, SETDRAGDATA, SETDRAGDATATODOMTREE } from './constants';
 
// 设置state初始值
const initState = {
  title: '',
  dragData:{},
  bgImgTag: 0,
  DomTree:[] as Array<Object>
}

// export interface IState {
//   title: String,
//   dragData: Object,
//   bgImgTag: number
// }

type IState = Readonly<typeof initState>;

export interface PropsNodeType {
  [propName: string]: {
    childNodes: VirtualDOMType[]
  }
}
export interface VirtualDOMType {
  key: string,
  componentName: string,
  props: any,
  addPropsConfig?: any,
  childNodes?: VirtualDOMType[] | PropsNodeType

}

interface DragDataType {
  defaultProps?: any,
  componentName?: string,
  templateData?: VirtualDOMType,
  dragPath?: string,
  dragParentPath?: string
}

// 处理并返回 state 
export default (state:IState = initState, action: ModifyAction): IState => {
    switch (action.type) {
      case SETDRAGDATA:
        console.log('SETDRAGDATA', action.data)
        return {
          ...state,
          dragData: action.data
        }
      case SETDRAGDATATODOMTREE:
        console.log('SETDRAGDATATODOMTREE', state, action.data)
        const res = state.DomTree.push({dragData: state.dragData})
        return {
          ...state,
          DomTree: state.DomTree
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


