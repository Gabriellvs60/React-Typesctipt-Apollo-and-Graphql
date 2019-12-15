import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import useQueryAllClients from "./hooks/useQueryAllClients"
import useMutationDeleteClient from './hooks/useMutationDeleteClient'
import GenericTable from '../../commom/components/Table'
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
  const {
    data,
    refetch,
    loading,
  } = useQueryAllClients()
  const [showDrawer, setShowDrawer] = useState(false)
  const [title, setTitle] = useState("")
  const [editData, setEditData] = useState(null)
  const { deleteClient } = useMutationDeleteClient({ refetch })
  
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
        data={data?.allClients || []}
        onDeletePress={deleteClient}
        onClickRow={editItem}
        />
    </div>
  );
}
