import { useGetAllAdsQuery } from "../../../api";

export default function useAllClients() {
  const { data, loading, refetch } = useGetAllAdsQuery({});

  return {
    data,
    refetch,
    loading,
  };
}
