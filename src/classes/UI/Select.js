import React from 'react';

const Select = (props) => {
    let selectItems = props.selectItemArray.map((value, index) => {
        return (<option value={value}>{value}</option>)
    })

    return (
        <select>
            {selectItems}
        </select>
    )

}

export default Select;