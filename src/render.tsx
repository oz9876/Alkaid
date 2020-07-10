import React, {createElement, useEffect} from 'react';
import allComponents,{UIList} from './UI';
import CommonContainer from './components/CommonContainer';
import get from 'lodash/get'; // 关于get方法 https://segmentfault.com/a/1190000015605531
import ReactDOM from 'react-dom';


const renderViewId: any = 'h5-container';
export const renderView = function(dragData:any, event:Event, DomTree:any){

    console.log('DomTree:', DomTree)
    console.log(dragData, event)
    // // 判断当前dragData的来源，如果是在预览组件中，应为剪切，其他应为复制
    // let list:any = [];
    // for (const i of DomTree){
    //     console.log(i)
    //     const dom:any = renderComponent(i.name);
    //     console.log(dom)
    // }

    // 应该是遍历转虚拟dom，然后组装成树，一次渲染
    const iframe: any = document.getElementById('activity-edit-container');
    const dom = iframe.contentDocument.getElementById(renderViewId)
    // ReactDOM.render的参数是 虚拟Dom 和 元素
    // useEffect(() => {
        const res = renderComponent(DomTree);
        console.log('渲染树：', res, dom)
        
        ReactDOM.render(res, dom);
    // },[DomTree,dom])
    // ReactDOM.render(<div className='232'/>, dom);
}
const AllComponents = function(){
    const components: any = {};
    UIList.map(componentName => {
        components[componentName] = (props: any) => <CommonContainer {...props} containerName={componentName}/>;
    });
    return components;
}();
// 
export const renderComponent = function(VirtualDOMTree:any){



    // 1、如果根容器为空，应该加一个默认容器
    // 2、把树结构放到createElement第三个参数里


    // React.createELement() 创建虚拟Dom
    // 参数1： string 表示要创建的元素类型
    // 参数2: obj/null 要表示元素的属性节点
    // 参数3： 类型不限 表示当前元素的子节点
    console.log('AllComponents ', AllComponents);
    let resultProps: any, componentConfig:any;
    componentConfig = VirtualDOMTree.componentConfig
    resultProps = {
        componentConfig,
        path: '[0]',
        domTreeKeys: [componentConfig.key],
      };

    return createElement(get(AllComponents, 'Box'),resultProps)
}

