import React from "react";
import { useState, useEffect } from "react";
import merge from "lodash/merge";
// import { DeleteButton } from "../../Icons";

interface Props {
  data: any[];
  columns: any[];
}

export function useGenericTable({ columns, data }: Props) {
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
      align: "right",
    //   render: (item: any) => <DeleteButton onClick={ (e) => {e.stopPropagation(); onDeletePress(item.id)} } />
    });

    setCurrentColumns(mappedColumns);
  }, [columns]);



  return { currentColumns, currentData};
}
