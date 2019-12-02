import React from 'react'
import TableHeader from './TableHeader'
import TableRows from './TableRows'
import PropTypes, { object } from 'prop-types';
import TableRow from './TableRow';

//todo dos:
//parameter checking
//add row function
//sorting
//grouping


//column struct
// column {
//columnName:
//fieldName:
//}
// columns is array of column

const Table = (props) => {

    return (
        <props.Component.TableType>
            <TableHeader {...props}></TableHeader>
            <TableRows {...props}></TableRows>
            {props.AddRowOn ?
                null :
                <TableRow {...props}></TableRow>
            }
        </props.Component.TableType>
    )
}

Table.propTypes = {
    Component: PropTypes.shape({
        TableType: PropTypes.elementType.isRequired
    })
}

export default Table;