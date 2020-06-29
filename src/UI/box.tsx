

import React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';

export interface BaseBoxProps {
    className?: string;
    onClick?: Function;
}

interface BoxState {
}

export type BoxProps = BaseBoxProps;

class Box extends React.PureComponent<BoxProps, BoxState> {
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
            [`alkaid-box`]: true,
        },className);
        return (
            <div
                className={classes}
                onClick={this.handleClick}
            >
                <div className={classes} >
                </div>
            </div>
        );
    }
}

export default Box;
