import React from 'react';

const Select = (props) => {
    let selectItems = props.selectItemArray.map((value, index) => {
        return (<option value={value}>{value}</option>)
    })

    return (
        <select value={props.value} onChange={(event) => props.changeHandler(event.target.value)}>
            {selectItems}
        </select>
    )

}

export default Select;