import React from 'react';
import { Table } from 'antd';
import { useGenericTable } from './hooks/UseGenericTable';
import './styles.css'
interface Props{
    data: any[]
    columns: any[]
    loading: boolean
    // onDeletePress(id: string): any
    onClickRow?: Function
    onDeletePress(id: string): any
}

const GenericTable = ({data, columns, onClickRow,onDeletePress, loading}:Props) => {
    const { currentColumns, currentData } = useGenericTable({
        data,
        columns,
        onDeletePress
    })
    return(
        <Table
        columns={currentColumns}
        dataSource={currentData}
        loading={loading}
        onRow={(record) => {
            return {
              onClick: event => { 
                  onClickRow && onClickRow(record) 
            }, // click row
            };
          }}
        />
    )
}

export default GenericTable;