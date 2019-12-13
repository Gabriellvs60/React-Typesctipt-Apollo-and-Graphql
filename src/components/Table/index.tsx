import React from 'react';
import { Table } from 'antd';
import { useGenericTable } from './hooks/UseGenericTable';

interface Props{
    data: any[]
    columns: any[]
    // loading: boolean
    // onDeletePress(id: string): any
    onClickRow?: Function
}

const GenericTable = ({data, columns}:Props) => {
    const { currentColumns, currentData } = useGenericTable({
        data,
        columns
    })
    return(
        <Table
        columns={columns}
        dataSource={data}
        />
    )
}

export default GenericTable;