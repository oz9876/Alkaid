import React, { createElement, memo, useRef, useState } from 'react';
// import {useHistory} from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import ComponentsListItem, { ComponentsListItemType } from './components-list-item';
import{
} from '../../redux/actions';

// import React from 'react';

import './index.scss'
import './activity-edit-container.scss'

interface ComponentsListPropsType {
  dispatch: Dispatch,
  data: Array<ComponentsListItemType>;
}

function ComponentsList (props: ComponentsListPropsType) {
  const {
    data,
    dispatch
  } = props;
  return(
    <div className='activity-edit'>
      <ul className='activity-edit-oper-components-list' >
          {
              data.map((item, index)=>(
                  <ComponentsListItem item={item} dispatch={dispatch}/>
              ))
          }
      </ul>
    </div>
  );
}

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch:Dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(ComponentsList, () => true));