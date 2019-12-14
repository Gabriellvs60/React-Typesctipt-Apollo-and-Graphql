import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import GenericTable from '../../commom/components/Table'
import { GET_ALL_CLIENTS } from '../queries/clients';
import GenericDrawer from '../../commom/components/Drawer'

import { Button } from 'antd';

interface Props { }

const column = [
  {
    title: "Nome",
    dataIndex: 'name',
  },
  {
    title: "Idade",
    dataIndex: 'age',
  },
  {
    title: "Endereço",
    dataIndex: 'address',
  },
  {
    title: "Tipo",
    dataIndex: 'type',
  }
]

export default function Clients(props: Props) {
  const { loading, error, data } = useQuery(GET_ALL_CLIENTS);
  const [showDrawer, setShowDrawer] = useState(false)
  const [title, setTitle] = useState("")
  const [editData, setEditData] = useState(null)
  
  function newClient() {
    console.log(editData)
     setEditData(null)
     setShowDrawer(true)
     console.log(editData)
     setTitle("Novo Cliente")
   }

  function editItem(item: any) {
    setEditData(item)
    setShowDrawer(true)
    alert(item)
    console.log(editData)
    
    setTitle("Edição de Cliente")
  }

  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;

  return (
    <div>
      <h1>Lista de Clientes - Herbie</h1>
      
      <Button type="primary" onClick={() => { newClient() }}>
        Adicionar Novo
      </Button>

      <GenericDrawer
        visible={showDrawer} 
        setVisible={setShowDrawer} 
        editData={editData} 
        setEditData={setEditData}
        title={title}
      />
      <GenericTable
        columns={column}
        data={data.allClients || []}
        onClickRow={editItem}
        />
    </div>
  );
}
