import { connect } from 'dva';
import each from 'lodash/each';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';

/**
 * redux封装函数
 * @param props
 * @returns {Function}
 */
export function reduxConnect(props?: string[], options?: object) {
    // return connect((state: any) => {
    //     const resultProps: any = {};
    //     each(props, (prop) => resultProps[prop] = state[namespace][prop]);
    //     return resultProps;
    //   }, undefined, undefined, { ...options },
    // );
  }

/**
 *  处理父级属性与组件属性的异同，以组件属性为准
 *  restProps, props
 */
export function diffProps(restProps: any, props: any){
  each(restProps, (v:any,k:any)=>{
    if(!isEqual(props[k],v)){
      props[k] = v;
    }
  });
  return props;
}


/**
 * 过滤掉值为undefined的字段
 * @param value
 * @returns {undefined}
 */
export const filterProps = (value: any) => {
  const props: any = {};
  each(value, (v, k) => {
    if (v !== undefined) {
      props[k] = v;
    }
  })

  return isEmpty(props) ? undefined : props;
};
