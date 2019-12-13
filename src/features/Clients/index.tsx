import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import GenericTable from '../../components/Table'
import { GET_ALL_CLIENTS } from '../../queries/clients';
// import { client } from '../../commom/config/apollo';
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
    title: "Telefone",
    dataIndex: 'telephone',
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
  if (loading) return <>Loading...</>;
  if (error) return <>`Error! ${error.message}`</>;
  console.log({data})
  return (
    <div>
      <GenericTable
        columns={column}
        data={data.allClients}
      />
    </div>
  );
}
