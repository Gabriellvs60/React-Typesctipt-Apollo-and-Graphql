import { useGetAllClientsQuery } from "../../../api";
import { useEffect, useState } from "react";
import { ErrorHandler } from "../../../commom/utils/ErrorHandler";

export default function useAllClients() {
  const paginateOptions = ["10", "20", "30"];
  const [paginate, setPaginate] = useState(+paginateOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPages, setLimitPages] = useState(0);

  const { data, loading, refetch } = useGetAllClientsQuery({});

  return {
    data,
    refetch,
    loading,
  };
}
