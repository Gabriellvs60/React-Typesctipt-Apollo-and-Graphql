import { useGetAllClientsQuery } from "../../../api";

export default function useAllClients() {
  const { data, loading, refetch } = useGetAllClientsQuery({});

  return {
    data,
    refetch,
    loading,
  };
}
