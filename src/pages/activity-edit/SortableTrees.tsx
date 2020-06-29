import React from 'react';
import SortableTree from 'react-sortable-tree';

interface Props {
    isDrop?: any,
    treeData: any,
    onChangeVal: (any:any) => any
    haveChildren?: false
  }

export default class SortableTrees extends React.PureComponent<Props> {
     
    //调用组件时，值发生改变接收新的数据
    onChangeValue = (treeData:Event) => {
      this.props.onChangeVal(JSON.stringify(treeData));
    }
     
    //是否可以拖动（默认可以不添加, 根据需求而定）
    stopParentNode = (node:any) => {
      if (!node.nextParent) {
        return false;
      }
      return true;
    }
     
    //是否有子级（默认可以不添加, 根据需求而定）
    toHaveChildren = (node:Event) => {
      if (node.type === 'streaming') {
        return false;
      }
      return true;
    }
     
    // render
    render() {
      const {
        isDrop,
        treeData,
        haveChildren,
      } = this.props;
      return (
        <SortableTree
          treeData={treeData}
          onChange={(e:any) => { this.onChangeValue(e); }}
          canDrop={isDrop ? this.stopParentNode : () => { return false; }}
          canNodeHaveChildren={haveChildren ? this.toHaveChildren : () => { return false; }}
        />
      );
    }
  }