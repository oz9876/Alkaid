

import React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';

export interface BaseColProps {
    className?: string;
    onClick?: Function;
}

interface ColState {
}

export type ColProps = BaseColProps;

class Col extends React.PureComponent<ColProps, ColState> {
    static propTypes = {
        className: PropTypes.string,
        onClick: PropTypes.func,
    };
    handleClick: React.MouseEventHandler<any | HTMLAnchorElement> = e =>{
        const { onClick } = this.props;
        if(onClick){
            return (onClick)(e)
        }
    }
    render(){
        const {
            className
        } = this.props;
        const classes = classNames({
            [`alkaid-col`]: true,
        },className);
        return (
            <div
                className={classes}
                onClick={this.handleClick}
            >
                <div className={classes} >
                <div
                className={classes}
                onClick={this.handleClick}
            >
                <div className={classes} >
                </div>
            </div>
                </div>
            </div>
        );
    }
}

export default Col;
