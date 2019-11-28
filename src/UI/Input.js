import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <input defaultValue={props.defaultValue} onChange={props.changeEventHandler}></input>
    )

}


Input.propTypes = {

}

export default Input