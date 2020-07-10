import { SETBGIMG, SETDRAGDATA, SETDRAGDATATODOMTREE } from './constants';

// 动作

export interface ISETBGIMGAction {
    type: SETBGIMG
}
 
export interface ISETDRAGDATAAction {
    type: SETDRAGDATA
    data: Object
}
export interface ISETDRAGDATATODOMTREEAction {
    type: SETDRAGDATATODOMTREE
    data: Object
}

// 定义 modifyAction 类型，包含 ISETDRAGDATAAction 和 ISETDRAGDATAAction 接口类型
export type ModifyAction = ISETBGIMGAction | ISETDRAGDATAAction | ISETDRAGDATATODOMTREEAction;
 
// 设置背景
export const setBgImg = (): ISETBGIMGAction => ({
    type: SETBGIMG
})

// 存入 拖拽组件信息
export const setDragData = (data:object): ISETDRAGDATAAction => ({
    type: SETDRAGDATA,
    data: data
})

// 存入 拖拽组件到Dom树
export const setDragDataToDomTree = (data:object): ISETDRAGDATATODOMTREEAction => ({
    type: SETDRAGDATATODOMTREE,
    data: data
})
