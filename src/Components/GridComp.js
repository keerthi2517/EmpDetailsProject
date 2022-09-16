import React, { useState } from 'react';
import UxDataGrid from 'ux-data-grid/components/UxDataGrid';
import axios from 'axios';
import GridLinesVisibility from 'ux-data-grid/constants/GridLinesVisibility';

const GridLinesVisibilityBasics = () => {
  const [rowData, setRowData] = useState(null);

  const columnDefs = [
    {
      field: 'Id',
      headerName: 'Id',
    },
    {
      field: 'Name',
      headerName: 'Name',
    },
    {
      field: 'Role',
      headerName: 'Role',
    },
    {
      field: 'MName',
      headerName: 'Manager',
    }
  ];

  const onGridReady = React.useCallback(function onGridReady(params) {
    const url =
      'https://localhost:44348/api/Emp';

    axios.get(url,{
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Credentials': true
    }).then(response => {
      console.log(response);
      setRowData(response.data);
    });
  }, []);

  return (
    <UxDataGrid
      columnDefs={columnDefs}
      rowData={rowData}
      onGridReady={onGridReady}
      gridLinesVisibility={GridLinesVisibility.Horizontal}
    />
  );
};

export default React.memo(GridLinesVisibilityBasics);
