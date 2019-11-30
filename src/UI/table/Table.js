import React from 'react'
import TableHeader from './TableHeader'
import TableRows from './TableRows'


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
        </props.Component.TableType>
    )
}

export default Table;