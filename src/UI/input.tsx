

import React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';

export interface BaseInputProps {
    className?: string;
}

interface InputState {
}

export type InputProps = BaseInputProps;

class Input extends React.PureComponent<InputProps, InputState> {
    static propTypes = {
        className: PropTypes.string,
    };
    render(){
        const {
            className
        } = this.props;
        const classes = classNames({
            [`alkaid-input`]: true,
        },className);
        return (
            <input className={classes}>
            </input>
        );
    }
}

export default Input;
