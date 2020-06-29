import { connect } from 'dva';
import each from 'lodash/each';

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