import React, {createElement} from 'react';
import allComponents from './UI';
import get from 'lodash/get'; // 关于get方法 https://segmentfault.com/a/1190000015605531
import ReactDOM from 'react-dom';


const renderViewId: any = 'activity-edit-container';
export const renderView = function(dragData:any, event:Event){
    console.log(dragData, event)
    // 判断当前dragData的来源，如果是在预览组件中，应为剪切，其他应为复制
    const dom:any = renderComponent(dragData.name);

    ReactDOM.render(dom, document.getElementById(renderViewId));
}

// 
export const renderComponent = function(componentName:string){
    return createElement(get(allComponents, componentName,''))
}
