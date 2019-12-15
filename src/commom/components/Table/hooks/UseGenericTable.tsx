import React from "react";
import { useState, useEffect } from "react";
import merge from "lodash/merge";

interface Props {
  data: any[];
  columns: any[];
  onDeletePress(id: string): any
}

export function useGenericTable({ columns, data, onDeletePress }: Props) {
  const [currentColumns, setCurrentColumns] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setCurrentData(data.map(el => ({ key: el.id, ...el })) as any);
  }, [data]);

  useEffect(() => {
    const mappedColumns = columns.map(el => {
      const key = el.id || el.dataIndex;
      return merge({ key, sorter: true }, el);
    }) as any;

    mappedColumns.push({
      title: "",
      dataIndex: "",
      align: "center",
      render: ((item: any) => <img src="./icons/delete.svg" onClick={(e) => { e.stopPropagation(); onDeletePress(item.id)}} style={{ width: "20px" }} />)
    });

    setCurrentColumns(mappedColumns);
  }, [columns, onDeletePress]);

  return { currentColumns, currentData };
}
