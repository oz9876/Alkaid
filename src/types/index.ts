
export interface ModelType {
}

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
    childNodes: VirtualDOMType[]| PropsNodeType
  }