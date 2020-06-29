

import React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';


export interface BaseButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: Function;
}

interface ButtonState {
    loading?: boolean | { delay?: number };
}
  
export type ButtonProps = BaseButtonProps;

class Button extends React.PureComponent<ButtonProps, ButtonState>  {

    static propTypes = {
        className: PropTypes.string,
        onClick: PropTypes.func,
    };
    handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
        const { onClick } = this.props;
        if(onClick){
            return (onClick)(e)
        }
    }
    render(){
        const {
            children,
            className,
        } = this.props;
        const classes = classNames({
            [`alkaid-button`]: true,
        },className);
        return (
            <button
                className={classes}
                onClick={this.handleClick}
            >
                {children}
            </button>
        );
    }
}

export default Button;
