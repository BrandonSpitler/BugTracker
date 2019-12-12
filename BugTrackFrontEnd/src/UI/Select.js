import React from 'react';
import PropTypes, { object } from 'prop-types';

const Select = (props) => {
    let selectItems = props.selectItemArray.map((value, index) => {
        if (value.deleted === undefined || !value.deleted) {
            return (<option key={index} value={value[props.valueName]}>{value[props.decodeName]}</option>)
        } else {
            return null;
        }
    })

    return (
        <select autoFocus={props.autoFocus} value={props.value} onChange={(event) => props.changeHandler(event.target.value)}>
            {selectItems}
        </select >
    )

}

Select.propTypes = {
    valueName: PropTypes.string.isRequired,
    decodeName: PropTypes.string.isRequired,
    selectItemArray: PropTypes.arrayOf(
        PropTypes.object
    )
}

export default Select;