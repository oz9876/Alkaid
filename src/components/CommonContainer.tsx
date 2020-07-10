import React, { createElement, forwardRef, useEffect, useMemo, useRef } from 'react';
import allComponents,{UIList} from '../UI';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import each from 'lodash/each';
import isObject from 'lodash/isObject';
import isUndefined from 'lodash/isUndefined';
import keys from 'lodash/keys';

import {VirtualDOMType} from '../types';
import {diffProps, filterProps} from '../utils';
// import config from '../configs';
import get from 'lodash/get'; // 关于get方法 https://segmentfault.com/a/1190000015605531


// 渲染子组件
function renderNodes(childNodes: VirtualDOMType[], path: string, parentProps:any){

    const resultChildNodes = childNodes.map((node, index)=>{
        const {componentName, props, key}=node;
        // 组件默认配置
        const { propsConfig } = get(allComponents, componentName);
        const { className = [], animateClass } = props;
        const handleProps = filterProps(props) || {};
        let propsResult={};
        // 判断是不是自定义组件
        if(UIList.includes(componentName)){
    
        } else {
        }
        propsResult={
            key,
            path,
            // parentPath,
            draggable: true,
            componentConfig: node,
            index,
            ...handleProps,
            className: handlePropsClassName( className, animateClass),
            // onClick: (e: Event) => changeSelectedStatus(e, node, resultDomTreeKeys,hoverKey, selectedKey,undefined, resultPath, parentPath),
            // onMouseOver: (e: Event) => onMouseOver(e, key,isEmpty(selectedComponentInfo)),
            // onDragEnter: getDropTargetInfo,
            // onDragStart: (e: Event) => onDragStart(e, path, node, parentPath),
        }
    
        return createElement(get(allComponents, componentName), formatSpecialProps(propsResult, propsConfig));
    })

    /** 如果该组件子节点或者属性子节点要求为单组件返回子组件的第一组件*/
    if (resultChildNodes.length==1) {
        return resultChildNodes[0];
    } else {
        return resultChildNodes;
    }
}

export const formatSpecialProps = (props: any, propsConfig: any) => {
    const nextProps = props;
    each(props, (v:any, k:any) => {
      if (get(propsConfig, k)) {
        if (!isObject(v)) {
           if (propsConfig[k].type === 'function') {
            const funcTemplate = get(propsConfig, `${k}.placeholder`);
            if (funcTemplate) {
              nextProps[k] = () => eval(funcTemplate);
            } else {
              nextProps[k] = () => {
              };
            }
          }
        } else if (isObject(v) && !isEmpty(propsConfig[k].childPropsConfig) && isEqual(keys(v), keys(propsConfig[k].childPropsConfig))) {
          formatSpecialProps(v, propsConfig[k].childPropsConfig);
        }
      } else if (isUndefined(v)) {
        delete nextProps[k];
      }
  
    });
    return nextProps;
  };
// 属性处理（包括子组件处理）
function handleProps(parentProps:any){
    const {
        componentConfig,
        containerName,
        parentPath,
        path,
        index,
        domTreeKeys = [],
        dispatch,
        // hoverKey,
        // selectedComponentInfo,
        // selectedComponentInfo: {selectedKey,  domTreeKeys:selectedDomTreeKeys=[] },
        ...rest
    } = parentProps;

    const  { key, componentName, props, childNodes ,addPropsConfig }=componentConfig;
    
    // const propsResult = useMemo(()=>diffProps(rest, cloneDeep(props)),[rest, props]);
    const propsResult = diffProps(rest, cloneDeep(props))||{animateClass:{},className:{}};

    const { animateClass, className } = propsResult ;
    // const { mirrorModalField, nodePropsConfig, propsConfig } = get(allComponents, componentName);
    // const { mirrorModalField, nodePropsConfig, propsConfig } = useMemo(() => get(allComponents, componentName), []);

    // propsResult.className = useMemo(() => handlePropsClassName(className, animateClass), [className, animateClass]);
    propsResult.className = handlePropsClassName(className, animateClass);

    if(!isEmpty(childNodes)){
        propsResult.children = renderNodes(childNodes as VirtualDOMType[], path,parentProps);
    }
    return {
        ...formatSpecialProps(propsResult, merge({}, addPropsConfig)),
        // ...formatSpecialProps(propsResult, merge({}, propsConfig, addPropsConfig)),
        // onMouseOver: (e: any) => onMouseOver(e, key,noHasSelectedInfo),
        // onDragEnter: (e: any) => getDropTargetInfo(e, path, componentConfig, defaultSelectedProp,noHasSelectedInfo),
        // onDragStart: (e: any) => onDragStart(e, path, componentConfig, parentPath),
    };
}


/**
 * 处理样式
 * @param isSelected
 * @param isHovered
 * @param className
 * @param animateClass
 */
function handlePropsClassName (className: any, animateClass: string) {
    return   classNames(className, animateClass);
  }

  
function CommonContainer(props: any,ref:any) {
    const {
        componentConfig,
        domTreeKeys,
        path,
        parentPath,
        containerName,
        selectedComponentInfo,
        hoverKey,
      } = props;
      console.log('CommonContainer-->allComponents: ', allComponents)
      console.log('CommonContainer-->containerName: ', containerName)
    return (
        createElement(get(allComponents, containerName, containerName), {...handleProps(props),ref})
    );
}

// forwardRef 为了ref
export default forwardRef(CommonContainer);
